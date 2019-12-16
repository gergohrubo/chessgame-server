const Sequelize = require('sequelize')
const sequelize = require('../db')

const Game= sequelize.define('game', {
  username1:{
    type: Sequelize.STRING,
    allowNull: false
  },
  username2:{
    type:Sequelize.STRING,
    allowNull:true
  }
})

module.exports = Game