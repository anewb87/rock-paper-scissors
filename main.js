var game = new Game();
var basicBtn = document.querySelector(".basic-button")
var beastBtn = document.querySelector(".beast-mode-button")
var changeGameBtn = document.querySelector(".change-game-button")
var selectGameView = document.querySelector(".select-game-section")
var gameView = document.querySelector(".select-buddy-section")
var bike = document.querySelector(".bike")
var brunch = document.querySelector(".brunch")

var message = document.querySelector("h5")
var humanWins = document.querySelector(".human-wins")
var computerWins = document.querySelector(".computer-wins")

var selectedBuddiesSection = document.querySelectorAll(".selected-buddies-section")




// var humanBearSelection =document.querySelector(".bear")

basicBtn.addEventListener("click", displayBasicGame)
beastBtn.addEventListener("click", displayBeastGame)
changeGameBtn.addEventListener("click", displayHome)
gameView.addEventListener("click", function(e){
  play(e)
});

window.onload = hide(gameView)

function play(e){
  if (e.target.classList.contains("buddy-button-image")) {
    game.playGame(e.target.id)
  }
  show(e.target.nextElementSibling)
  message.innerText = game.message;
  humanWins.innerText = `Wins: ${game.human.wins}`;
  computerWins.innerText = `Wins: ${game.computer.wins}`;
//  showSelectedBuddies()
};

// show(humanBearSelection)
// function revealHumanSelection() {
//
// }

function showSelectedBuddies() {
  var humanBuddy = document.querySelector(`#${game.human.buddy}`)
  var computerBuddy = document.querySelector(`#${game.computer.buddy}`)
  hide(gameView);
  selectedBuddiesSection.appendChild(humanBuddy)
  // selectedBuddies.innerHTML = `
  //   <section>
  //     humanBuddy
  //     computerBuddy
  //   </section>`
  // show(humanBuddy);
  // show(computerBuddy);
  //not working, look up append tomorrow
}



function displayBasicGame() {
  hide(selectGameView);
  hide(bike);
  hide(brunch);
  show(gameView);
  show(changeGameBtn);
  game.type = "basic";
  message.innerText = "choose your buddy"

  console.log(game)
};

function displayBeastGame() {
  hide(selectGameView);
  show(gameView);
  show(changeGameBtn);
  show(bike);
  show(brunch)
  game.type = "beast"
  message.innerText = "choose your bestest buddy"
  console.log(game)
};

function displayHome() {
  hide(gameView);
  hide(bike);
  hide(brunch);
  hide(changeGameBtn);
  show(selectGameView);

  message.innerText = "choose your game"
};

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
    element.classList.add("hidden")
};


//dont forget to set timout- might not belong here, need to thing through
//the event is load- then re-diplay the home page


//appendChild youtube video: https://www.youtube.com/watch?v=umHdBuTw98c
//kind of helpful: https://www.youtube.com/watch?v=y17RuWkWdn8&t=88s


//function show(element, rule) {
//     element.classList.remove(rule);
// };
