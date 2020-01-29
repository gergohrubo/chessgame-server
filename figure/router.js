const { Router } = require("express");
const authMiddleware = require('../auth/middleware')
const Figure = require("./model");
const Game = require('../game/model')
const User = require('../user/model')
const { toData } = require("../auth/jwt");
const checkMove = require('../validations')
const updateTables = require('../utils/updateTables')

function factory(stream) {
  const router = new Router();
  router.put("/move", authMiddleware, async (req, res, next) => {
    try {
      const userId = req.user.id;
      console.log('THE USER ID', userId)
      const game = await Game.findOne({ where: { id: req.body.gameId }, include: [{ model: User, attributes: ['id', 'name'] }, Figure] });
      if (game.users && game.users.length < 2) {
        return res.status(400).send('Wait for the other player to join')
      }
      if (userId != game.currentTurn) {
        return res.status(400).send("It's not your turn now.");
      }
      if (req.body.coordinate_X > 7 || req.body.coordinate_X < 0 || req.body.coordinate_Y > 7 || req.body.coordinate_Y < 0) {
        return res.status(400).send('Invalid coordinate')
      }
      const selectedFigure = await Figure.findOne({ where: { id: req.body.figureId } })
      if (selectedFigure.userId !== userId) {
        return res.status(400).send('It is not your turn now.')
      }
      const isThereAFigure = await Figure.findOne({ where: { coordinate_X: req.body.coordinate_X, coordinate_Y: req.body.coordinate_Y, gameId: req.body.gameId } })
      if (isThereAFigure) {
        if (isThereAFigure.color === selectedFigure.color) {
          return res.status(401).send('Invalid move with this piece')
        }
      }
      const isItAHittingMove = isThereAFigure ? true : false
      const validityObject = await checkMove(selectedFigure, req.body, isItAHittingMove)
      if (!validityObject.isValidMove) {
        return res.status(401).send('Invalid move with this piece')
      }
      await updateTables(req.body)
      const games = await Game.findAll({ include: [{ model: User, attributes: ['id', 'name'] }, Figure] });
      const action = {
        type: "ALL_GAMES",
        payload: games
      }
      const checkAction = {
        type: 'CHECK'
      }
      const checkString = JSON.stringify(checkAction)
      const string = JSON.stringify(action);
      stream.send(string);
      if (validityObject.isTheKingInCheck) {
        stream.send(checkString)
      }
      res.send(games)
    } catch (err) {
      next(err);
    }
  });
  return router;
}

module.exports = factory;
