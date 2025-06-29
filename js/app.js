/*-------------------------------- Constants --------------------------------*/

const choices = ["rock", "paper", "scissors"];

/*-------------------------------- Variables --------------------------------*/

let playerChoice;
let computerChoice;
let msg;

/*------------------------ Cached Element References ------------------------*/
const rockBtnEl = document.querySelector("#rock");
const paperBtnEl = document.querySelector("#paper");
const scisoorBtnEl = document.querySelector("#scissor");
const resultDisplayEl = document.querySelector("#result-display");

/*-------------------------------- Functions --------------------------------*/
getComputerChoice = () => {
  //generate a random number 0-2
  const randomIdx = Math.floor(Math.random() * choices.length);

  // select the item from the array
  return choices[randomIdx];
};

//initialize game state
play = () => {
  computerChoice = getComputerChoice();
  console.log('computer choice:', computerChoice);

  //after updating state, render to html
  render();
};

play();

//updates out UI/html directly
render = () => {};
/*----------------------------- Event Listeners -----------------------------*/
