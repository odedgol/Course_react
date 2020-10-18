let game = [
  ["X", "O", "O"],
  ["O", "X", "O"],
  ["O", "O", "X"],
]; // diag

let game = [
    ["X", "O", "O"],
    ["X", "O", "O"],
    ["O", "O", "X"],
  ]; // colm

  let game = [
    ["X", "X", "X"],
    ["O", "X", "O"],
    ["O", "O", "X"],
  ]; // row

const verdict = theWinnerTakesItAll(game);

const arrayContainsChecker = (sourceArray, targetArray) => targetArray.every(element => sourceArray.includes(element));


function theWinnerTakesItAll(game) {
  let diagonal = [];
  for (let index = 0; index < game.length; index++) {
    if(arrayContainsChecker(game[index], ["X", "X", "X"]) || arrayContainsChecker(game[index], ["O", "O", "O"])){
      console.log("winnerRow " + winnerRow);
      return winnerRow;

    }

    const columnsAsLines = game.map((row) => row[index]);
    const winnerCol = columnsAsLines.reduce(function (a, b) {
      return a === b ? a : !b;
    });
    if (winnerCol) {
      console.log("winnerCol " + winnerCol);
      return winnerCol;
    }
    if (!diagonal.includes("O") && !diagonal.includes("X")) {
        console.log(game[index][index]);
      diagonal.push(game[index][index]);
    }
  }

  if (diagonal.length === 1) {
    console.log("winnerDiag " + diagonal[0]);
    return diagonal[0];
  }
}
