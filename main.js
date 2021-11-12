var game = new Game('');
var basicBtn = document.querySelector(".basic-button")
var beastBtn = document.querySelector(".beast-mode-button")
var selectGameView = document.querySelector(".select-game-section")
var gameView = document.querySelector(".select-buddy-section")
var bike = document.querySelector(".bike")
var brunch = document.querySelector(".brunch")
var changeGameBtn = document.querySelector(".change-game-button")


basicBtn.addEventListener("click", displayBasicGame)
beastBtn.addEventListener("click", displayBeastGame)
changeGameBtn.addEventListener("click", displayHome)
gameView.addEventListener("click", function(e){
  playGame(e)
});

window.onload = hide(gameView)

function playGame(e){
  game.determineGame(e.target.alt)
};

function displayBasicGame() {
  hide(selectGameView);
  hide(bike);
  hide(brunch);
  show(gameView);
  show(changeGameBtn);
  game.type = "basic";
  console.log(game)
};

function displayBeastGame() {
  hide(selectGameView);
  show(gameView);
  show(changeGameBtn);
  game.type = "beast"
  console.log(game)
};

function displayHome() {
  hide(gameView);
  hide(bike);
  hide(brunch);
  hide(changeGameBtn);
  show(selectGameView);
}

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
    element.classList.add("hidden")
};


//dont forget to set timout- might not belong here, need to thing through
//the event is load- then re-diplay the home page
