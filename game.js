var Player = require('./Player');

class Game {
  constructor(type) {
//    this.gameboardData = {}
    this.type = type
  }
  initializeNewGame() {
    var human = new Player('Human', token, 0);
    var computer = new Player('Computer', token, 0);
  }
  resetGameBoard() {
    //set timeout function;
    //go to the main view of the specific board
  }
}


// includes:
//   2 Player instances (humanPlayer, computerPlayer)
//   A way to keep track of the data for the game board
//   A way to keep track of the selected game type
//   A way to detect when a game is a draw (no one has won)
//   A way to reset the Game’s board to begin a new game


//if statements for the rules of the game

//functionality to decide who the win

//the thing that the computer selects goes up against the randomized computer selection (reference romcom project)


//if game is selected - 1 set of rules

//if harder game is selected - 1 other set of rules
