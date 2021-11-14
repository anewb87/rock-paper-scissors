class Game {
  constructor(type) {
    this.human = new Player("Human", "😄");
    this.computer = new Player ("Computer", "💻");
    this.message = "choose your game"
    this.type = type;
  }

  determineWinner(buddy) {
    this.human.takeTurn(buddy);
    this.computer.takeTurn();
    if (this.human.buddy === this.computer.buddy) {
      this.message = "😑 Twin Buddies. It's a Tie. 😑";
      console.log(this.message)
    } else if (this.humanWins()) {
      this.human.wins ++;
      this.message = "😄 Human's Buddy for the Win! 😄";
      console.log(this.message)
    } else {
      this.computer.wins ++;
      this.message = "💻 Computer's Buddy for the Win! 💻";
      console.log(this.message)
    }

  }
  humanWins(){
    if (this.human.buddy === "bear" && (this.computer.buddy === "bowling" || this.computer.buddy === "brunch")) {
      return true;
    } else if (this.human.buddy === "bee" && (this.computer.buddy === "bear" || this.computer.buddy === "bike")) {
      return true;
    } else if (this.human.buddy === "bowling" && (this.computer.buddy === "bee" || this.computer.buddy === "brunch")) {
      return true;
    } else if (this.human.buddy === "bike" && (this.computer.buddy === "bowling" || this.computer.buddy === "bear")) {
      return true;
    } else if (this.human.buddy === "brunch" && (this.computer.buddy === "bike" || this.computer.buddy === "bee")) {
      return true;
    } else {
      return false;
    }
  }

  timeout(view) {
    setTimeout(view, 1500)
  }
};



//In an attempt to make this code DRYer, I tried out the code below, but it did NOT work
// humanWins(){
//   if (this.human.buddy === 'bear' && (this.computer.buddy === 'bowling' || this.computer.buddy === 'brunch')) || {
//   (this.human.buddy === 'bee' && (this.computer.buddy === 'bear' || this.computer.buddy === 'bike')) ||
//   (this.human.buddy === 'bowling' && (this.computer.buddy === 'bee' || this.computer.buddy === 'brunch')) ||
//   (this.human.buddy === 'bike' && (this.computer.buddy === 'bowling' || this.computer.buddy === 'bear')) ||
//   (this.human.buddy === 'brunch' && (this.computer.buddy === 'bike' || this.computer.buddy === 'bee')) {
//     return true
//   } else {
//     return false
//   }
// }


// includes:
//   done-2 Player instances (human, computer)

//   A way to keep track of the data for the game board: I'm thinking/assuming this means basically all the game logic except for a tie

//   done-A way to keep track of the selected game type

//   done-A way to detect when a game is a draw (no one has won)

//   A way to reset the Game’s board to begin a new game
