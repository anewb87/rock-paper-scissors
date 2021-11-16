class Game {
  constructor(type) {
    this.human = new Player('Human', '😄');
    this.computer = new Player ('Computer', '💻');
    this.message = null;
    this.type = type;
  }

  determineWinner(buddy) {
    this.human.takeTurn(buddy);
    this.computer.takeTurn();
    if (this.human.buddy === this.computer.buddy) {
      this.message = '😑 Awe, twins! But no one wins. 😑';
    } else if (this.humanWins()) {
      this.human.wins++;
      this.message = '😄 Your buddy is the best buddy! Human wins! 😄';
    } else {
      this.computer.wins++;
      this.message = '💻  Bummer! Computer wins. 💻';
    }
  }

  humanWins(){
    if (this.human.buddy === 'bear' && (this.computer.buddy === 'bowling' || this.computer.buddy === 'brunch')) {
      return true;
    } else if (this.human.buddy === 'bee' && (this.computer.buddy === 'bear' || this.computer.buddy === 'bike')) {
      return true;
    } else if (this.human.buddy === 'bowling' && (this.computer.buddy === 'bee' || this.computer.buddy === 'brunch')) {
      return true;
    } else if (this.human.buddy === 'bike' && (this.computer.buddy === 'bowling' || this.computer.buddy === 'bear')) {
      return true;
    } else if (this.human.buddy === 'brunch' && (this.computer.buddy === 'bike' || this.computer.buddy === 'bee')) {
      return true;
    } else {
      return false;
    }
  }
  resetGame() {
    this.human.buddy = null;
    this.computer.buddy = null;
  }
};
