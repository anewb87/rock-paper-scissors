var basicBtn = document.querySelector(".basic-button")
var beastBtn = document.querySelector(".beast-mode-button")
var selectGameView = document.querySelector(".select-game-section")
var basicGameView = document.querySelector(".choose-button-section")
var beastGameView = document.querySelectorAll(".beast-mode-view")
//var extraBeastElements = document.querySelectorAll(".beast-button")


basicBtn.addEventListener("click", displayBasicGame)
beastBtn.addEventListener("click", displayBeastGame)


function displayBasicGame() {
  show(basicGameView);
  hide(selectGameView);
  hide(beastGameView);
}

function displayBeastGame() {
  hide(basicGameView);
  show(beastGameView);
}


function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};



//all functionality for displaying
//set timout
//the event is load- then re-diplay the home page
