const express = require("express");
const app = express();
// const User = require ("./user/model")
const userRouter = require("./user/router");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const cors = require("cors");
const corsMiddleware = cors();
const loginRouter=require("./auth/router")

app.use(corsMiddleware);
app.use(jsonParser);
const port = 4000;
app.use(userRouter);
app.use(loginRouter)
app.get("/", (req, res) => {
  res.send("Blabla");
});

app.listen(port, () => console.log(`Listening on ${port}`));