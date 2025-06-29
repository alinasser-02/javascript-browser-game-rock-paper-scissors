/*------------ Constants ------------------*/
const choice = ["rock", "paper", "scissors"];

/*------------- Variables -----------------*/
let msg;
let playerChoice;
let computerChoice;

/*------ Cached Element References ---------*/
const rockBtnEl = document.querySelector("#rock");
const paperBtnEl = document.querySelector("#paper");
const scissorsBtnEl = document.querySelector("#scissors");
const resultDisplayEl = document.querySelector("#result-display");

/*-------- Functions -----------------------*/
function getComputerChoice() {
  // generate a random number 0-2
  const randomIndex = Math.floor(Math.random() * choice.length);
  // select the item from the array
  return choice[randomIndex];
}
const getPlayerChoice = (event) => {
  playerChoice = event.target.id;
};

// initialize game state
function play(event) {
  computerChoice = getComputerChoice();
  // after updating state, render to html
  render();
  getPlayerChoice(event);
  getComputerChoice();
  compare();
  render();
}

// updates our UI/html directly
function render() {
  resultDisplayEl.textContent = `Computer chose ${computerChoice} and you chose ${playerChoice}. ${msg}`;
}

function compare() {
  if (playerChoice === computerChoice) {
    msg = "You tied!";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    msg = "Congrats! You win!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    msg = "Congrats! You win!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    msg = "Congrats! You win!";
  } else {
    msg = "You lose! Try again?";
  }
}
function resetGame(){  playerChoice = null;
  computerChoice = null;
  resultDisplayEl.textContent = '' ;
}


/*--------- Event Listeners ----------------*/
rockBtnEl.addEventListener("click", play);
paperBtnEl.addEventListener("click", play);
scissorsBtnEl.addEventListener("click", play);
document.querySelector('#resetButton').addEventListener('click', resetGame);