const Figure = require('../figure/model')

function King(initial_X, initial_Y, goal_X, goal_Y, color, gameId) {
  if ((Math.abs(goal_X - initial_X) === 1 && Math.abs(goal_Y - initial_Y) < 2) || (Math.abs(goal_X - initial_X) < 2 && Math.abs(goal_Y - initial_Y) === 1)) {
    return true
  } else {
    return false
  }
}

async function isCastling(initial_X, initial_Y, goal_X, goal_Y, color, gameId) {
  if (color === 'white' && initial_X === 4 && initial_Y === 0 && goal_Y === 0) {
    if (goal_X === 6) {
      const Rook = await await Figure.findOne({ where: { coordinate_X: initial_X, coordinate_Y: initial_Y + 1, gameId: gameId } })
    }
  }
}

module.exports = King;