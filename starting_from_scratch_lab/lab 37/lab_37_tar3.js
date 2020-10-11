const game = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

const game = [
  ["O", "O", "O"],
  ["X", "X", "X"],
  ["X", "O", "O"],
];

const verdict = theWinnerTakesItAll(game);

function theWinnerTakesItAll(game) {
  for (let index = 0; index < game.length; index++) {
    const row = game[index].reduce(function (a, b) {
      return a === b ? a : !b;
    });
    console.log(row);
  }


  console.log(game.length);
  console.log(game[0].length);
  // need to handle row
  // need to handle column
  // need to handle diag
}
