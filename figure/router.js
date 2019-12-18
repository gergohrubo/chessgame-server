const { Router } = require("express");
const Figure = require("./model");
const router = new Router();

router.put("/figure/move", async (req, res) => {
  const figure = await Figure.findByPk({ where: { id: req.params.body.id } });

  //     router.put("/movie/:id", (request, response, next) =>
  // Movie.findByPk(request.params.id)
  //   .then(movie => movie.update(request.body))
  //   .then(movie => response.json(movie))
  //   .catch(error => next(error))
  // );
});
// router.post("/move", async (req, res) => {
//   const oldFigure = await Move.findOne({where: {coordinate_X: req.body.coordinate_X, coordinate_Y: req.body.coordinate_Y}});
//   if (oldFigure) {
//     await Move.destroy({where: {id: oldFigure.id}});
//   }
//   await Move.update({x: req.body.x, y: req.body.y}, {where: {id: req.body.id}})
//   const board = await Move.findAll({where: {gameid: req.body.gameid}})
//   res.json(board);
// });

router.get("/figure/:gameId", async (req, res) => {
  const figures = await Figure.findAll({
    where: {game_id: res.params.gameId}
  });
  res.send(figures);
});

module.exports = router;
