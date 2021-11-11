class Game {
  constructor(type) {
    this.human = new Player('Human', 😄);
    this.computer = new Computer('Computer', 💻)
    this.message ='Choose your game!'
    this.type = type;
    //game must time out
  }
  // initializeNewGame() {
  //   var human = new Player('Human', token, 0);
  //   var computer = new Player('Computer', token, 0);
  // }
  //I think this code is redundant.
  resetGameBoard() {
    //set timeout function;
    //go to the main view of the specific board
  }
  determineGameType() {
    if (this.type === 'buddy') {
      determineWinnerBasic(buddy)
    } else {
      determineWinnerBeast(buddy)
    }
    //I don't yet know where 'budy'/ type in constructor is coming from. Needs to connect to the button selected.
  }
  determineWinnerBasic(buddy) {
    this.human.takeTurnBasic(buddy);
    this.computer.takeTurnBasic();
    //game logic here
  }
  determineWinnerBeast(buddy) {
    this.human.takeTurnBeast(buddy);
    this.computer.takeTurnBasic();
    //game logic here
  }
}



// includes:
//   2 Player instances (human, computer)
//   A way to keep track of the data for the game board
//   A way to keep track of the selected game type
//   A way to detect when a game is a draw (no one has won)
      //I beleive this could also be a big conditional that determines who wins and loses.
//   A way to reset the Game’s board to begin a new game


//if statements for the rules of the game

//functionality to decide who the win

//the thing that the computer selects goes up against the randomized computer selection (reference romcom project)


//if game is selected - 1 set of rules

//if harder game is selected - 1 other set of rules


//Game logic:
//human wins if
