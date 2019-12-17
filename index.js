const express = require("express");
const app = express();

const Player=require("./player/model")
const Sse = require("json-sse");
const playerRouterFactory = require("./player/router");
const stream = new Sse();
const playerRouter = playerRouterFactory(stream);

const userRouter = require("./user/router");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const cors = require("cors");
const corsMiddleware = cors();
const loginRouter = require("./auth/router");
const gameRouter = require("./game/router");


app.use(corsMiddleware);
app.use(jsonParser);
const port = process.env.PORT || 4000;
app.use(userRouter);
app.use(loginRouter);
app.use(gameRouter);
app.use(playerRouter);

app.get("/", (req, res) => {
  stream.send("Lala")
  res.send("Blabla");
});

app.get("/stream", async (req, res) => {
  
  try {
    const players = await Player.findAll(); 
    const action={
      type:"ALL_PLAYERS",
      payload: players
    }
    const string = JSON.stringify(action); 
    stream.updateInit(string); 
    stream.init(req, res); 
  } catch (error) {
    next(error);
  }
});


app.listen(port, () => console.log(`Listening on ${port}`));
