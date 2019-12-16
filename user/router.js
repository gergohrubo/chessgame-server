const { Router } = require("express");
const bcrypt = require("bcrypt");
const User = require("./model");
const router = new Router();

// router.post("/user",(req, res)=>{
//   const user = {
//     name:req.body.name,
//     email: req.body.email,
//     password: bcrypt.hashSync(req.body.password, 10)
//   }
//  User.create(user)
//   .then(result => {
//       res.send(result);
//   })
// })

router.post("/user", async (req, res, next) => {
  try {
    const user = {
      name: req.body.name,
      // email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10)
    };
    const createUser = await User.create(user);
    res.send(createUser);
  } catch (error) {
    next(error);
  }
});
router.get("/user", async (req, res) => {
  const user = await User.findAll();
  res.send(user);
});

module.exports = router;
