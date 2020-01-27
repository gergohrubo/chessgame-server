const express = require("express");
const Player = require("./model");
const { Router } = express


function factory(stream) {
  const router = new Router();

  router.get("/player", async (req, res, next) => {

    try {
      const players = await Player.findAll();

      res.send(players);
    } catch (error) {
      next(error)
    }
  });
  return router
}



module.exports = factory;
