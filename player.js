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
      console.log(this.buddy)
    } else {
      var buddies = ['bear', 'bee', 'bowling'];
      var randomBuddyIndex = Math.floor(Math.random() * 3);
      this.buddy = buddies[randomBuddyIndex]
      console.log(this.buddy)
    }
  }
  
  takeTurnBeast(buddy) {
    if (buddy) {
      this.buddy = buddy
      console.log(this.buddy)
    } else {
      var buddies = ['bear', 'bee', 'bowling', 'brunch', 'bicycle'];
      var randomBuddyIndex = Math.floor(Math.random() * 5);
      this.buddy = buddies[randomBuddyIndex]
      console.log(this.buddy)
    }
  }
};
