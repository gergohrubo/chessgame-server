const CurrentGame = require("./model");
const { Router } = require("express");
const Game = require("../game/model");

const router = new Router();

router.put("/game/:id", async (req, res, next) => {
  try {
    const game = await CurrentGame.findByPk(req.params.id, { include: [Game] });
    await game.update(request.body);
    res.json(game);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
