const { buildDiagonal } = require('./jumping')
const Figure = require('../figure/model')

function isMoveValid(initial_X, initial_Y, goal_X, goal_Y) {
  if (Math.abs(goal_X - initial_X) !== Math.abs(goal_Y - initial_Y)) {
    return false
  }
  return true
}

module.exports = async function (initial_X, initial_Y, goal_X, goal_Y, gameId) {
  if (isMoveValid(initial_X, initial_Y, goal_X, goal_Y)) {
    const squares = buildDiagonal(initial_X, goal_X, initial_Y, goal_Y)
    const promises = squares.map(async square => Figure.findOne({ where: { coordinate_X: square.x, coordinate_Y: square.y, gameId: gameId } }))
    const whatIsThere = await Promise.all(promises)
    console.log('BISHOP WHATISTHERE', whatIsThere)
    const isThereSomething = whatIsThere.reduce((a, b) => { return (Boolean(a) || Boolean(b)) }, false)
    console.log('BISHOP ISTHERESOMETHING', isThereSomething)
    return !isThereSomething
  } else {
    return false
  }
}