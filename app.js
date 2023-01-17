const computerChoiceDisplay = document.getElementById("computers-choice");
const usersChoiceDisplay = document.getElementById("users-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let usersChoice;
let computerChoice;
let results;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    usersChoice = e.target.id;
    usersChoiceDisplay.innerHTML = usersChoice;
    getComputerChoice();
    getresult();
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

function getresult() {
  if (usersChoice === computerChoice) {
    results = "Its a Tie";
  } else if (usersChoice === "rock" && computerChoice === "scissors") {
    results = "You won";
  } else if (usersChoice === "scissors" && computerChoice === "paper") {
    results = "You won";
  } else if (usersChoice === "paper" && computerChoice === "rock") {
    results = "You won";
  } else {
    results = "You lost";
  }
  resultDisplay.innerHTML = results;
}
