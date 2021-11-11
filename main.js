var basicBtn = document.querySelector(".basic-button")
var beastBtn = document.querySelector(".beast-mode-button")
var selectGameView = document.querySelector(".select-game-section")
var beastGameView = document.querySelector(".choose-button-section")
var bikeBeastSection = document.querySelector(".bike-section")
var brunchBeastSection = document.querySelector(".brunch-section")
//var extraBeastElements = document.querySelectorAll(".beast-button")


basicBtn.addEventListener("click", displayBasicGame)
beastBtn.addEventListener("click", displayBeastGame)


function displayBasicGame() {
  hide(selectGameView);
  show(beastGameView);
  hide(bikeBeastSection);
  hide(brunchBeastSection);
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

// function hide(element) {
//   if (Array.isArray(element)) {
//     for (var i = 0; i < element.length; i++) {
//       element[i].classList.add("hidden");
//     }
//   } else {
//     element.classList.add("hidden")
//   }
// };


//all functionality for displaying
//set timout
//the event is load- then re-diplay the home page
