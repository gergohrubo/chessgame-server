const { Router } = require("express");
const Figure = require("./model");

function factory(stream) {
  const router = new Router();

  router.put("/move", async (req, res, next) => {
    try {
      await Figure.destroy({
        where: {
          coordinate_X: req.body.coordinate_X,
          coordinate_Y: req.body.coordinate_Y
        }
      });
      await Figure.update(
        {
          coordinate_X: req.body.coordinate_X,
          coordinate_Y: req.body.coordinate_Y
        },
        { where: { id: req.body.figureId } }
      );
      const board = await Figure.findAll({
        where: { gameId: req.body.gameId }
      });

      const action = {
        type: "UPDATE_BOARD",
        payload: board
      };

      const string = JSON.stringify(action);

      stream.send(string);

      res.send(board);
    } catch (err) {
      next(err);
    }
  });
  return router;
}

module.exports = factory;
