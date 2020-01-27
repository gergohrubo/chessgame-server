const Sequelize = require("sequelize");
const Player = require("../player/model");
const Figure = require("./model");
const Game = require('../game/model')
const User = require('../user/model')

async function updateTables(reqBody) {
  const game = await Game.findOne({ where: { id: reqBody.gameId }, include: [{ model: User, attributes: ['id', 'name'] }, Figure] });
  await Figure.destroy({
    where: {
      gameId: reqBody.gameId,
      coordinate_X: reqBody.coordinate_X,
      coordinate_Y: reqBody.coordinate_Y
    }
  });
  await Figure.update(
    {
      coordinate_X: reqBody.coordinate_X,
      coordinate_Y: reqBody.coordinate_Y
    },
    { where: { id: reqBody.figureId } }
  );
  const currentPlayer = await Player.findOne({
    where: {
      gameId: reqBody.gameId,
      userId: {
        [Sequelize.Op.not]: game.currentTurn
      }
    }
  });
  await Game.update(
    { currentTurn: currentPlayer.userId },
    { where: { id: reqBody.gameId } }
  );
}

module.exports = updateTables