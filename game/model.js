const Sequelize = require('sequelize')
const sequelize = require('../db')

const Game= sequelize.define('game')

module.exports = Game