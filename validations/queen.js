const Figure = require('../figure/model')
const { buildHorizontal, buildVertical, buildDiagonal } = require('./jumping')

async function Queen(initial_X, initial_Y, goal_X, goal_Y, gameId) {
  if (((goal_X - initial_X) === 0) && (goal_Y - initial_Y === 0) && (Math.abs(goal_X - initial_X) === Math.abs(goal_Y - initial_Y))) {
    return false
  }
  if ((goal_X - initial_X) === 0) {
    const squares = buildVertical(initial_X, initial_Y, goal_Y)
    const promises = squares.map(async square => Figure.findOne({ where: { coordinate_X: square.x, coordinate_Y: square.y, gameId: gameId } }))
    const whatIsThere = await Promise.all(promises)
    const isThereSomething = whatIsThere.reduce((a, b) => { return (Boolean(a) || Boolean(b)) }, false)
    return !isThereSomething
  } else if (goal_Y - initial_Y === 0) {
    const squares = buildHorizontal(initial_X, goal_X, initial_Y)
    const promises = squares.map(async square => Figure.findOne({ where: { coordinate_X: square.x, coordinate_Y: square.y, gameId: gameId } }))
    const whatIsThere = await Promise.all(promises)
    const isThereSomething = whatIsThere.reduce((a, b) => { return (Boolean(a) || Boolean(b)) }, false)
    return !isThereSomething
  } else if (Math.abs(goal_X - initial_X) === Math.abs(goal_Y - initial_Y)) {
    console.log('INITIAL_X', initial_X)
    console.log('INITIAL_Y', initial_Y)
    console.log('GOAL_X', goal_X)
    console.log('GOAL_Y', goal_Y)
    const squares = buildDiagonal(initial_X, goal_X, initial_Y, goal_Y)
    console.log('QUEEN DIAGONAL 1', squares)
    const promises = squares.map(async square => Figure.findOne({ where: { coordinate_X: square.x, coordinate_Y: square.y, gameId: gameId } }))
    console.log('QUEEN DIAGONAL 2', promises)
    const whatIsThere = await Promise.all(promises)
    console.log('QUEEN DIAGONAL 3', whatIsThere)
    const isThereSomething = whatIsThere.reduce((a, b) => { return (Boolean(a) || Boolean(b)) }, false)
    console.log('QUEEN DIAGONAL 4', isThereSomething)
    return !isThereSomething
  } else {
    return false
  }
}
module.exports = Queen;