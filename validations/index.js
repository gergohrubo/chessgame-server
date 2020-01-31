const Figure = require("../figure/model");
const Sequelize = require("sequelize");
const checkBishop = require('./bishop')
const checkRook = require('./rook')
const checkPawn = require('./pawn')
const checkKnight = require('./knight')
const checkKing = require('./king')
const checkQueen = require('./queen')

async function checkMove(selectedFigure, reqBody, isItAHittingMove) {
  const returnedObject = {
    isValidMove: true,
    isTheKingInCheck: false
  }
  const isItValid = await checkValidity(selectedFigure.coordinate_X, selectedFigure.coordinate_Y, reqBody.coordinate_X, reqBody.coordinate_Y, reqBody.gameId, selectedFigure.color, isItAHittingMove, selectedFigure.kind)
  if (!isItValid) {
    returnedObject.isValidMove = false
    return { ...returnedObject }
  }
  const opponentKing = await Figure.findOne({ where: { kind: 'King', color: { [Sequelize.Op.not]: selectedFigure.color }, gameId: reqBody.gameId } })
  const isItCheck = await checkValidity(reqBody.coordinate_X, reqBody.coordinate_Y, opponentKing.coordinate_X, opponentKing.coordinate_Y, reqBody.gameId, selectedFigure.color, true, selectedFigure.kind)
  if (isItCheck) {
    returnedObject.isTheKingInCheck = true
  }
  return returnedObject
}

async function checkValidity(initial_coordinate_X, initial_coordinate_Y, goal_coordinate_X, goal_coordinate_Y, gameId, color, isItAHittingMove, kind) {
  switch (kind) {
    case 'Bishop': {
      return await checkBishop(initial_coordinate_X, initial_coordinate_Y, goal_coordinate_X, goal_coordinate_Y, gameId)
    }
    case 'Rook': {
      return await checkRook(initial_coordinate_X, initial_coordinate_Y, goal_coordinate_X, goal_coordinate_Y, gameId)
    }
    case 'Pawn': {
      return await checkPawn(initial_coordinate_X, initial_coordinate_Y, goal_coordinate_X, goal_coordinate_Y, color, isItAHittingMove, gameId)
    }
    case 'King': {
      return await checkKing(initial_coordinate_X, initial_coordinate_Y, goal_coordinate_X, goal_coordinate_Y, color, gameId)
    }
    case 'Knight': {
      return await checkKnight(initial_coordinate_X, initial_coordinate_Y, goal_coordinate_X, goal_coordinate_Y, gameId)
    }
    case 'Queen': {
      return await checkQueen(initial_coordinate_X, initial_coordinate_Y, goal_coordinate_X, goal_coordinate_Y, gameId)
    }
  }
}

module.exports = checkMove