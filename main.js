var game = new Game();
var basicBtn = document.querySelector(".basic-button");
var beastBtn = document.querySelector(".beast-mode-button");
var changeGameBtn = document.querySelector(".change-game-button");
var resetWinsBtn = document.querySelector(".reset-wins-button");
var selectGameView = document.querySelector(".select-game-section");
var gameView = document.querySelector(".select-buddy-section");
var fightView = document.querySelector(".fight-section");
var bike = document.querySelector(".bike");
var brunch = document.querySelector(".brunch");
var humanFighter = document.querySelector("#humanFighter");
var computerFighter = document.querySelector("#computerFighter");
var message = document.querySelector("h5");
var humanWins = document.querySelector(".human-wins");
var computerWins = document.querySelector(".computer-wins");
var createToken = document.createElement("p");

basicBtn.addEventListener("click", displayBasicGame);
beastBtn.addEventListener("click", displayBeastGame);
changeGameBtn.addEventListener("click", displayHome);
resetWinsBtn.addEventListener("click", resetWins)
gameView.addEventListener("click", function(e){
  playGame(e)
});

hide([gameView]);
updateWinCount();

function playGame(e){
  if (e.target.classList.contains("buddy-button-image")) {
    e.target.parentNode.append(createToken);
    createToken.classList.add("human-token");
    createToken.innerText = game.human.token;
    game.determineWinner(e.target.id);
  }
  disableChangeGameBtn();
  setTimeout(showFight, 700);
  setTimeout(displayUpdatedInfo, 700);
  setTimeout(resetGameBoard, 2800);
};

function disableChangeGameBtn() {
    changeGameBtn.classList.add("disabled-button");
    changeGameBtn.classList.add("disabled-button:hover");
    changeGameBtn.disabled = true;
};

function enableChangeGameBtn() {
  changeGameBtn.classList.remove("disabled-button");
  changeGameBtn.classList.remove("disabled-button:hover");
  changeGameBtn.disabled = false;
};

function updateWinCount() {
  humanWins.innerText = game.human.retrieveWinsFromStorage() || 0
  computerWins.innerText = game.computer.retrieveWinsFromStorage() || 0
};

function resetWins() {
  localStorage.clear();
  location.reload();
};

function resetGameBoard() {
  if (game.type === "beast") {
    displayBeastGame();
  } else {
    displayBasicGame();
  }
  createToken.remove();
  enableChangeGameBtn();
  game.resetGame();
};

function showFight() {
  hide([gameView]);
  show([fightView]);
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
  hide([selectGameView, bike, brunch, fightView])
  show([gameView, changeGameBtn]);
  game.type = "basic";
  message.innerText = "choose your buddy";
};

function displayBeastGame() {

  hide([selectGameView, fightView]);
  show([gameView, changeGameBtn, bike, brunch]);
  game.type = "beast";
  message.innerText = "choose your bestest buddy";
};

function displayHome() {
  hide([gameView, bike, brunch, changeGameBtn]);
  show([selectGameView]);
  message.innerText = "choose your game";
};

function show(elements) {
  for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('hidden');
  }
};

function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("hidden");
  }
};
