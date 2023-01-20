const computerChoiceDisplay = document.getElementById("computers-choice");
const usersChoiceDisplay = document.getElementById("users-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const userscoreDisplay = document.getElementById("userscore");
const computerscoreDisplay = document.getElementById("computerscore");
const gameDisplay = document.getElementById("game");
const newgame = document.getElementById("newgame");
const closemodal = document.getElementById("newgamemodal");

let usersChoice;
let computerChoice;
let results;
let game = "";

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    usersChoice = e.target.id;
    usersChoiceDisplay.innerHTML = usersChoice;
    getComputerChoice();
    playround(usersChoice, computerChoice);
  })
);

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

var userscore = 0;
var computerscore = 0;
function playround() {
  if (usersChoice === computerChoice) {
    results = "its a tie";
  } else if (
    (usersChoice === "rock" && computerChoice === "scissors") ||
    (usersChoice === "scissors" && computerChoice === "paper") ||
    (usersChoice === "paper" && computerChoice === "rock")
  ) {
    results = "You won";
    userscore++;
  } else {
    results = "You lost";
    computerscore++;
  }

  if (userscore === 5) {
    game = "Game Over You Won";
    openModal();
    userscore = 0;
    computerscore = 0;
  } else if (computerscore === 5) {
    game = "Game Over You Lost";
    openModal();
    userscore = 0;
    computerscore = 0;
  }

  if (userscore === 5 || computerscore === 5) {
    openModal();
  }

  resultDisplay.innerHTML = results;
  userscoreDisplay.innerHTML = userscore;
  computerscoreDisplay.innerHTML = computerscore;
  gameDisplay.innerHTML = game;
}

newgame.addEventListener("click", () => {
  userscore = 0;
  computerscore = 0;
  game = "";
  usersChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";
  resultDisplay.innerHTML = "";
  userscoreDisplay.innerHTML = "";
  computerscoreDisplay.innerHTML = "";
  gameDisplay.innerHTML = "";
  location.reload();
});

function resetGame() {
  location.reload();
}

var modal = document.getElementById("modal");

function openModal() {
  modal.style.visibility = "visible";
}

function closeModal() {
  modal.style.visibility = "hidden";
}

closemodal.addEventListener("click", () => {
  closeModal();
});
