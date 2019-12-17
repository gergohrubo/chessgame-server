const Sequelize = require("sequelize");
const sequelize = require("../db");
const Player = require("../player/model");
const User = require("../user/model");
const Game = require("../game/model");

const Figure = sequelize.define("figures", {
  kind: {
    type: Sequelize.STRING,
    allowNull: false
  },
  coordinate_X: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  coordinate_Y: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Figure.belongsTo(User, {through: Player});
Figure.belongsTo(Game);

// Promise.all([
//   Figure.create({
//     name: "King",
//     coordinate_X: 4,
//     coordinate_Y: 0,
//     color: "white"
//   }),
//   Figure.create({
//     name: "King",
//     coordinate_X: 4,
//     coordinate_Y: 7,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Queen",
//     coordinate_X: 3,
//     coordinate_Y: 0,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Queen",
//     coordinate_X: 3,
//     coordinate_Y: 7,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Bishop",
//     coordinate_X: 2,
//     coordinate_Y: 0,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Bishop",
//     coordinate_X: 5,
//     coordinate_Y: 0,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Bishop",
//     coordinate_X: 2,
//     coordinate_Y: 7,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Bishop",
//     coordinate_X: 5,
//     coordinate_Y: 7,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Knight",
//     coordinate_X: 1,
//     coordinate_Y: 0,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Knight",
//     coordinate_X: 6,
//     coordinate_Y: 0,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Knight",
//     coordinate_X: 1,
//     coordinate_Y: 7,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Knight",
//     coordinate_X: 6,
//     coordinate_Y: 7,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Rook",
//     coordinate_X: 0,
//     coordinate_Y: 0,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Rook",
//     coordinate_X: 7,
//     coordinate_Y: 0,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Rook",
//     coordinate_X: 0,
//     coordinate_Y: 7,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Rook",
//     coordinate_X: 7,
//     coordinate_Y: 7,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 0,
//     coordinate_Y: 1,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 1,
//     coordinate_Y: 1,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 2,
//     coordinate_Y: 1,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 3,
//     coordinate_Y: 1,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 4,
//     coordinate_Y: 1,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 5,
//     coordinate_Y: 1,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 6,
//     coordinate_Y: 1,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 7,
//     coordinate_Y: 1,
//     color: "white"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 0,
//     coordinate_Y: 6,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 1,
//     coordinate_Y: 6,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 2,
//     coordinate_Y: 6,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 3,
//     coordinate_Y: 6,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 4,
//     coordinate_Y: 6,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 5,
//     coordinate_Y: 6,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 6,
//     coordinate_Y: 6,
//     color: "black"
//   }),
//   Figure.create({
//     name: "Pawn",
//     coordinate_X: 7,
//     coordinate_Y: 6,
//     color: "black"
//   })
// ]);

module.exports = Figure;
