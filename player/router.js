const express = require("express");
const{ toData}=require("../auth/jwt")
const Player = require("./model");
const { Router } = express


function factory(stream){
  const router = new Router();

router.get("/player", async (req, res, next) => {

  try {
    const players = await Player.findAll();

    res.send(players);
  } catch (error) {
    next(error)
  }
});

router.post("/player", async (req, res, next) =>{

  // const auth = req.headers.authorization && req.headers.authorization.split(' ')
  // if (auth && auth[0] === 'Bearer' && auth[1]) {
  //   const data = toData(auth[1])
  //   res.send({data})
  try {
    console.log('THE JWT',req.body.jwt)
    console.log('THE TYPE', typeof req.body.jwt)
    const {userId} = toData(req.body.jwt)
    console.log('THE USER ID', userId)
    console.log('THE TYPE OF USER ID', typeof userId)
    const player = await Player.create({userId, gameId:req.body.gameId});  //userId, gameId:req.body.gameId}

const action={
  type:"NEW_PLAYER",
  payload:player
}
    const string=JSON.stringify(action)
    stream.send(string)
    res.send(player);
  } catch (error) {
    next(error);
  }
// } 
// else {
//   res.status(401).send({
//     message: 'Please supply some valid credentials'
//   })
// }
})

return router
}



module.exports = factory;
