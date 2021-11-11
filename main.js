var game = {}
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



basicBtn.addEventListener("click", function(e){
  displayBasicGame();
  game = new Game(e.target.id);
  console.log(game)
  //game.determineGameType();
})

beastBtn.addEventListener("click", function(e){
  displayBeastGame();
  game = new Game(e.target.id);
  console.log(game)
  //game.determineGameType();

})
// bearBuddy.addEventListener("click", function(e){
//   console.log(e.target.alt)
// })
gameView.addEventListener("click", function(e){
  playGame(e)
})

function playGame(e){
  game.determineWinnerBasic(e.target.alt)
}



function displayBasicGame() {
  hide(selectGameView);
  show(gameView);
  hide(bike);
  hide(brunch);
};

function displayBeastGame() {
  hide(selectGameView)
  show(gameView);
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
