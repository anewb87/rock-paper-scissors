class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.buddy;
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.name}Wins`, `${this.wins}`);
  }

  retrieveWinsFromStorage() {
    this.wins = (localStorage.getItem(`${this.name}Wins`)) || 0
    return this.wins
  }

  takeTurn(buddy) {
    var buddyOptions = ['brunch', 'bike', 'bear', 'bee', 'bowling'];
    if (buddy) {
      this.buddy = buddy
      console.log(this.buddy)
    } else if (game.type === 'beast'){
      var randomBuddyIndex = Math.floor(Math.random() * 5);
      this.buddy = buddyOptions[randomBuddyIndex]
      console.log(this.buddy)
    } else {
      var basicVersion = buddyOptions.slice(2)
      var basicRandomBuddyIndex = Math.floor(Math.random() * 3);
      this.buddy = basicVersion[basicRandomBuddyIndex]
      console.log(this.buddy)
    }
  }
};
