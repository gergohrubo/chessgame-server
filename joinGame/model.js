const Sequelize = require('sequelize')
const sequelize = require('../db')

const CurrentGame= sequelize.define('game', {
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

module.exports = CurrentGame