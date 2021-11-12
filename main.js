var game = new Game('');
var basicBtn = document.querySelector(".basic-button")
var beastBtn = document.querySelector(".beast-mode-button")
var selectGameView = document.querySelector(".select-game-section")
var gameView = document.querySelector(".select-buddy-section")
var bike = document.querySelector(".bike")
var brunch = document.querySelector(".brunch")
//var bearBuddy = document.querySelector(".bear-buddy")
//var beeBuddy = document.querySelector(".bee-buddy")
// var bowlingBuddy = document.querySelector(".bowling-buddy")
// var bikeBuddy = document.querySelector(".bike-buddy")
// var brunchBuddy = document.querySelector(".brunch-buddy")
//var getBuddyValues = document.querySelector(".get-buddy-values")
//don't currently need above with gameView



basicBtn.addEventListener("click", displayBasicGame)

  //game.determineGame();

beastBtn.addEventListener("click", displayBeastGame)

  //game.determineGame();




gameView.addEventListener("click", function(e){
  playGame(e)
})

function playGame(e){
  game.determineGame(e.target.alt)
}



function displayBasicGame() {
  hide(selectGameView);
  show(gameView);
  hide(bike);
  hide(brunch);
  game.type = 'basic';
  console.log(game)
};

function displayBeastGame() {
  hide(selectGameView)
  show(gameView);
  game.type = 'beast'
  console.log(game)
};

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
    element.classList.add("hidden")
};



//all functionality for displaying
//set timout
//the event is load- then re-diplay the home page
