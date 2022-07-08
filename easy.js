// Result and Scores
let result = document.getElementById("result");
let yourScore = document.getElementById("score");
let computerScore = document.getElementById("computer-score");

// Play Buttons
let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");

// Your Values
let paperValue = "";
let rockValue = "";
let scissorsValue = "";

// Computer Buttons
let compPaper = document.querySelector(".c-paper");
let compRock = document.querySelector(".c-rock");
let compScissors = document.querySelector(".c-scissors");

// Disable
compPaper.disabled = true;
compRock.disabled = true;
compScissors.disabled = true;

// Computer Value
let compPaperValue = "";
let compRockValue = "";
let compScissorsValue = "";

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
  let random_number = Math.floor(Math.random() * (10 + 1));
  if (random_number > 5.1) {
    yourTurn = true;
    result.textContent = "Your Turn";
    setTimeout(choice, 500);
  } else {
    yourTurn = false;
  }
  if (random_number < 5.1) {
    compTurn = true;
    result.textContent = "Computer Turn";
    choice();
  } else {
    compTurn = false;
  }
  // console.log(compTurn, yourTurn);
  // console.log(random_number);
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

function choice() {
  // You is playing

  if (yourTurn == true) {
    yChoice.classList.remove("your-header");
    yChoice.classList.add("your-header-active");
    // Paper New Class
    paper.classList.remove("paper");
    paper.classList.add("choose-one-p");

    // Rock New Class
    rock.classList.remove("rock");
    rock.classList.add("choose-one-r");

    // Scissors New Class
    scissors.classList.remove("scissors");
    scissors.classList.add("choose-one-s");

    result.textContent = "Choose the button";

    paper.addEventListener("click", () => {
      paperValue = true;
      console.log(paperValue, "paper");

      switch (paperValue) {
        case true:
          // Paper Disable and Selected Class
          paper.disabled = true;
          paper.classList.remove("choose-one-p");
          paper.classList.add("paper-selected");
          // Scissors Disable and Inactive Class
          scissors.disabled = true;
          scissors.classList.remove("choose-one-s");
          scissors.classList.add("scissors-inact");
          // Rock Disable and Inactive Class
          rock.disabled = true;
          rock.classList.remove("choose-one-r");
          rock.classList.add("rock-inact");
      }
    });

    rock.addEventListener("click", () => {
      rockValue = true;
      console.log(rockValue, "rock");

      switch (rockValue) {
        case true:
          // Paper Disable and Inactive Class
          paper.disabled = true;
          paper.classList.remove("choose-one-p");
          paper.classList.add("paper-inact");
          // Scissors Disable and Inactive Class
          scissors.disabled = true;
          scissors.classList.remove("choose-one-s");
          scissors.classList.add("scissors-inact");
          // Rock Disable and Selected Class
          rock.disabled = true;
          rock.classList.remove("choose-one-r");
          rock.classList.add("rock-selected");
      }
    });

    scissors.addEventListener("click", () => {
      scissorsValue = true;
      console.log(scissorsValue, "scissors");

      switch (scissorsValue) {
        case true:
          // Paper Disable and Inactive Class
          paper.disabled = true;
          paper.classList.remove("choose-one-p");
          paper.classList.add("paper-inact");
          // Scissors Disable and Selected Class
          scissors.disabled = true;
          scissors.classList.remove("choose-one-s");
          scissors.classList.add("scissors-selected");
          // Rock Disable and Inactive Class
          rock.disabled = true;
          rock.classList.remove("choose-one-r");
          rock.classList.add("rock-inact");
      }
    });
  }

  // Computer Is Playing

  if (compTurn == true) {
    computerChoice();
  }
}

function computerChoice() {
  compChoice.classList.remove("computer-header");
  compChoice.classList.add("computer-header-active");
  let random_comp = Math.floor(Math.random() * 3) + 1;
  if (random_comp == 3) {
    compScissorsValue = true;
    console.log(compScissorsValue, "comp-scissors");
  } else {
    compScissorsValue = "";
  }
  if (random_comp == 2) {
    compRockValue = true;
    console.log(compRockValue, "comp-rock");
  } else {
    compRockValue = "";
  }
  if (random_comp == 1) {
    compPaperValue = true;
    console.log(compPaperValue, "comp-paper");
  } else {
    compPaperValue = "";
  }
}
