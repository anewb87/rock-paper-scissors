class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.buddy
  }
  saveWinsToStorage() {
    //localStorage.setItem()
  }
  retrieveWinsFromStorage() {
    //localStorage.getItem()
  }
  takeTurnBasic(buddy) {
    if (buddy) {
      this.buddy = buddy
    } else {
      var buddies = ['bear', 'bee', 'bowling ball'];
      var randomBuddyIndex = Math.floor(Math.random() * 3);
      this.buddy = buddies[getRandomIndex]
    }
  }
  takeTurnBeast(buddy) {
    if (buddy) {
      this.buddy = buddy
    } else {
      var buddies = ['bear', 'bee', 'bowling ball', 'brunch', 'bicycle'];
      var randomBuddyIndex = Math.floor(Math.random() * 5);
      this.buddy = buddies[getRandomIndex]
    }
  }
}



//takeTurn notes:
//human takes a turn and computer takes a turn -> this happens in the GAME
//human needs a buddy
//computer needs a buddy
//
// from romcom:
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
