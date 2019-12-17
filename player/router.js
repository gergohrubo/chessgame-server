const express = require("express");
const Player = require("./model");
const { Router } = express


function factory(stream){
  const router = new Router();

router.get("/player", async (req, res, next) => {
  
  try {
    const palyers = await Player.findAll();

    res.send(palyers);
  } catch (error) {
    next(error)
  }
});

router.post("/player", async (req, res, next) =>{
  try {
    const player = await Player.create(req.body);

const action={
  type:"NEW_PLAYER",
  payload:player
}
    const string=JSON.stringify(action)
    stream.send(string)
    res.send(palyer);
  } catch (error) {
    next(error);
  }
  
})
return router
}



module.exports = factory;
