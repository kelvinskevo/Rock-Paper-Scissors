const computerChoiceDisplay = document.getElementById("computers-choice");
const usersChoiceDisplay = document.getElementById("users-choice");
const result = document.getElementById("results");
const possibleChoices = document.querySelectorAll("button");
let usersChoice;
let computerChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    usersChoice = e.target.id;
    usersChoiceDisplay.innerHTML = usersChoice;
    generateComputerChoice();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.random() * 3;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
