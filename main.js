var game = new Game();
var basicBtn = document.querySelector(".basic-button");
var beastBtn = document.querySelector(".beast-mode-button");
var changeGameBtn = document.querySelector(".change-game-button");
var resetWinsBtn = document.querySelector(".reset-wins-button");
var selectGameView = document.querySelector(".select-game-section");
var gameView = document.querySelector(".select-buddy-section");
var bike = document.querySelector(".bike");
var brunch = document.querySelector(".brunch");

var fightView = document.querySelector(".fight-section");

var humanFighter = document.querySelector("#humanFighter");
var computerFighter = document.querySelector("#computerFighter");

//These are the query selectors for the info displayed on the DOM on page load that is updated from the data model. Is it better to have the space in the HTML already and query select, as I've done here, or is it better to simply NOT have it in the HTML and do some .innerHTML on page load?
var message = document.querySelector("h5");
var humanToken = document.querySelector(".human-token");
var humanPlayer = document.querySelector(".human-player");
var humanWins = document.querySelector(".human-wins");
var computerToken = document.querySelector(".computer-token");
var computerPlayer = document.querySelector(".computer-player");
var computerWins = document.querySelector(".computer-wins");

var createToken = document.createElement("p")

basicBtn.addEventListener("click", displayBasicGame);
beastBtn.addEventListener("click", displayBeastGame);
changeGameBtn.addEventListener("click", displayHome);
resetWinsBtn.addEventListener("click", resetWins)
gameView.addEventListener("click", function(e){
  playGame(e)
});

onload = hide(gameView);
onload = updatePlayerInfoOnLoad();


function updatePlayerInfoOnLoad() {
  message.innerText = game.message;
  humanToken.innerText = game.human.token;
  computerToken.innerText = game.computer.token;
  humanPlayer.innerText = game.human.name;
  computerPlayer.innerText = game.computer.name;
  updateWinCount();
};

function playGame(e){
  if (e.target.classList.contains("buddy-button-image")) {
    createToken.classList.add("human-token")
    e.target.parentNode.append(createToken)
    createToken.innerText = game.human.token;
    game.determineWinner(e.target.id);
  }
  setTimeout(showFight, 600);
  setTimeout(displayUpdatedInfo, 600);
  setTimeout(game.resetGame, 2700);
};

//Added the game. to this function above when the fuction resetGame (lines 72-79) is moved into the game.js. This doesn't make any sense to me to have it in the Game class but that's what the project prompt instructs. Will be asking about this tomorrow (Monday).

function updateWinCount() {
  humanWins.innerText = game.human.retrieveWinsFromStorage() || 0
  computerWins.innerText = game.computer.retrieveWinsFromStorage() || 0
};

function resetWins() {
  localStorage.clear();
  location.reload();
};

// function resetGame() {
//   if (game.type === "beast") {
//     displayBeastGame();
//   } else {
//     displayBasicGame();
//   }
//   createToken.remove();
// };

function showFight() {
  hide(gameView);
  show(fightView)
  viewFighters();
};

function viewFighters() {
  humanFighter.src = `./assets/${game.human.buddy}.png`;
  computerFighter.src = `./assets/${game.computer.buddy}.png`;
};

function displayUpdatedInfo() {
  message.innerText = game.message;
  humanWins.innerText = `${game.human.wins}`;
  computerWins.innerText = `${game.computer.wins}`;
  game.human.saveWinsToStorage();
  game.computer.saveWinsToStorage();
};

function displayBasicGame() {
  hide(selectGameView);
  hide(bike);
  hide(brunch);
  hide(fightView);
  show(gameView);
  show(changeGameBtn);
  game.type = "basic";
  message.innerText = "choose your buddy";
};

function displayBeastGame() {
  hide(selectGameView);
  hide(fightView);
  show(gameView);
  show(changeGameBtn);
  show(bike);
  show(brunch);
  game.type = "beast";
  message.innerText = "choose your bestest buddy";
};

function displayHome() {
  hide(gameView);
  hide(bike);
  hide(brunch);
  hide(changeGameBtn);
  show(selectGameView);
  message.innerText = "choose your game";
};

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

// function show(elements) {
  //   for (var i = 0; i < elements.length; i++) {
    //     elements[i].classList.remove('hidden');
    //   }
    // }


// function hide(elements) {
//   for (var i = 0; i < elements.length; i++) {
//     elements[i].classList.add("hidden");
//   }
// };
