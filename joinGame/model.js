const Sequelize = require('sequelize')
const sequelize = require('../db')
const Game= require("../game/model")

const CurrentGame= sequelize.define('currentgame', {
  username1:{
    type: Sequelize.STRING,
    allowNull: false
  },
  userId1:{
    type:Sequelize.INTEGER
  },
  color1:{
    type:Sequelize.STRING,
    allowNull: false
  },

  username2:{
    type: Sequelize.STRING,
    allowNull: false
  },
  userId2:{
    type:Sequelize.INTEGER
  },
color2:{
  type:Sequelize.STRING,
  allowNull: false
}
})
CurrentGame.belongsTo(Game)

module.exports = CurrentGame