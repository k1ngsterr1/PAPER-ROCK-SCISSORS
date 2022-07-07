// Result and Scores
let result = document.getElementById("result");
let yourScore = document.getElementById("score");
let computerScore = document.getElementById("computer-score");

// Play Buttons
let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let scissors = document.querySelector("scissors");

// Computer Buttons
let compPaper = document.querySelector(".c-paper");
let compRock = document.querySelector(".c-rock");
let compScissors = document.querySelector(".c-scissors");

// Choices
let yChoice = document.querySelector(".your-header");
let compChoice = document.querySelector(".computer-header");

// Start Button
let startBtn = document.getElementById("start");
let gameStart = "";
// turns
let yourTurn = "";
let compTurn = "";

// Game Logic

function sideSelection() {
  let random_number = Math.floor(Math.random() * (7 + 1));
  if (random_number > 5) {
    yourTurn = true;
    result.textContent = "Your Turn";
  } else {
    yourTurn = false;
  }
  if (random_number < 5) {
    compTurn = true;
    result.textContent = "Computer Turn";
  } else {
    compTurn = false;
  }
  console.log(compTurn, yourTurn);
}

function startGame() {
  gameStart = true;
  startBtn.style.visibility = "hidden";
  result.textContent = "Game Has Started";

  if (gameStart == true) {
    setTimeout(sideSelection, 1000);
  }
}

startBtn.addEventListener("click", () => {
  startGame();
});

function yourChoice() {
  if (yourTurn == true) {
    yChoice.classList.remove("your-header");
    yChoice.classList.add("your-header-active");
  }
}
