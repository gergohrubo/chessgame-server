const { Router } = require("express");
const bcrypt = require("bcrypt");
const Game = require("./model");
const router = new Router();


router.post("/game", async (req, res, next) => {
  try {
    const game = {
      username1: req.body.name,
      username2:null
    };
    const createGeme = await Game.create(game);
    res.send(createGeme);
  } catch (error) {
    next(error);
  }
});
router.get("/game", async (req, res) => {
  const game = await Game.findAll();
  res.send(game);
});

module.exports = router;