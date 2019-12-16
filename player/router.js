const Player = require("./model");
const { Router } = require("express");
const Game = require("../game/model");
const User = require("../user/model");
const router = new Router();

router.post("/player", async (req, res, next) => {
  try {
    const game = await Player.create(req.body);
    res.json(game);
  } catch (err) {
    next(err);
  }
});
router.get("/player", async (req, res) => {
  const player = await Player.findAll();
  res.json(player);
});

module.exports = router;
