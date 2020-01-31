const Figure = require("../figure/model");

const createWhiteFigures = async (userId, gameId) => {
  await Promise.all([
    Figure.create({
      kind: "King",
      coordinate_X: 4,
      coordinate_Y: 0,
      color: "white",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Queen",
      coordinate_X: 3,
      coordinate_Y: 0,
      color: "white",
      userId,
      gameId
    }),

    Figure.create({
      kind: "Bishop",
      coordinate_X: 2,
      coordinate_Y: 0,
      color: "white",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Bishop",
      coordinate_X: 5,
      coordinate_Y: 0,
      color: "white",
      userId,
      gameId
    }),

    Figure.create({
      kind: "Knight",
      coordinate_X: 1,
      coordinate_Y: 0,
      color: "white",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Knight",
      coordinate_X: 6,
      coordinate_Y: 0,
      color: "white",
      userId,
      gameId
    }),

    Figure.create({
      kind: "Rook",
      coordinate_X: 0,
      coordinate_Y: 0,
      color: "white",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Rook",
      coordinate_X: 7,
      coordinate_Y: 0,
      color: "white",
      userId,
      gameId
    }),

    Figure.create({
      kind: "Pawn",
      coordinate_X: 0,
      coordinate_Y: 1,
      color: "white",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 1,
      coordinate_Y: 1,
      color: "white",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 2,
      coordinate_Y: 1,
      color: "white",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 3,
      coordinate_Y: 1,
      color: "white",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 4,
      coordinate_Y: 1,
      color: "white",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 5,
      coordinate_Y: 1,
      color: "white",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 6,
      coordinate_Y: 1,
      color: "white",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 7,
      coordinate_Y: 1,
      color: "white",
      userId,
      gameId
    })
  ]);
};

const createBlackFigures = async (userId, gameId) => {
  await Promise.all([
    Figure.create({
      kind: "King",
      coordinate_X: 4,
      coordinate_Y: 7,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Queen",
      coordinate_X: 3,
      coordinate_Y: 7,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Bishop",
      coordinate_X: 2,
      coordinate_Y: 7,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Bishop",
      coordinate_X: 5,
      coordinate_Y: 7,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Knight",
      coordinate_X: 1,
      coordinate_Y: 7,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Knight",
      coordinate_X: 6,
      coordinate_Y: 7,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Rook",
      coordinate_X: 0,
      coordinate_Y: 7,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Rook",
      coordinate_X: 7,
      coordinate_Y: 7,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 0,
      coordinate_Y: 6,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 1,
      coordinate_Y: 6,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 2,
      coordinate_Y: 6,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 3,
      coordinate_Y: 6,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 4,
      coordinate_Y: 6,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 5,
      coordinate_Y: 6,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 6,
      coordinate_Y: 6,
      color: "black",
      userId,
      gameId
    }),
    Figure.create({
      kind: "Pawn",
      coordinate_X: 7,
      coordinate_Y: 6,
      color: "black",
      userId,
      gameId
    })
  ]);
};

module.exports = { createWhiteFigures, createBlackFigures }