prompt = require('prompt');

// var board = ' _ _ _\n _ _ _\n _ _ _';
// console.log(board);

prompt.start();
prompt.get(['player1Name', 'player2Name'], function(err, result) {
  console.log("The first player is ", result.player1Name);
  console.log("The second player is ", result.player2Name);
})

var board = [['_ ', '_ ', '_ '], ['_ ', '_ ', '_ '], ['_ ', '_ ', '_ ']];



// Initialize an empty board to be a 2d array
// Ask the players to provide an input for each turn indicating both the value and its position on the board.
//
