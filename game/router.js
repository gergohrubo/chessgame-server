const { Router } = require("express");
const bcrypt = require("bcrypt");
const Game = require("./model");
const router = new Router();

// router.get("/game", async (req, res) => {
//   const game = await Game.findAll({ include: [{ model: User, attributes: ['id', 'name'] }] });
//   res.send(game);
// });

function factory(stream) {
  const router = new Router();

  router.post("/game", async (req, res, next) => {
    try {
      const game = {
        username1: req.body.name,
        username2: null
      };
      const newGame = await Game.create(game);
      const action = {
        type: "NEW_GAME",
        payload: newGame
      }
      const string = JSON.stringify(action)
      stream.send(string)
      res.send(newGame);
    } catch (error) {
      next(error);
    }
  });
  return router
}



module.exports = factory;