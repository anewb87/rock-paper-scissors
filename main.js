var basicBtn = document.querySelector(".basic-button")
var beastBtn = document.querySelector(".beast-mode-button")
var selectGameView = document.querySelector(".select-game-section")
var beastGameView = document.querySelector(".choose-button-section")
var bike = document.querySelector(".bike")
var brunch = document.querySelector(".brunch")


basicBtn.addEventListener("click", displayBasicGame)
beastBtn.addEventListener("click", displayBeastGame)


function displayBasicGame() {
  hide(selectGameView);
  show(beastGameView);
  hide(bike);
  hide(brunch);
};

function displayBeastGame() {
  hide(selectGameView)
  show(beastGameView);
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
