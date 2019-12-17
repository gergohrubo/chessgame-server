const Sequelize = require('sequelize')
const sequelize = require('../db')
const Game= require("../game/model")
const User=require("../user/model")

const Player= sequelize.define('player'
)
Game.belongsToMany(User, { through: Player })
User.belongsToMany(Game, { through: Player })
module.exports = Player


