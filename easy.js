// Result and Scores
let result = document.getElementById("result");
let yourScore = document.getElementById("score");
let computerScore = document.getElementById("computer-score");

let yourScoreValue = 0;
let computerScoreValue = 0;

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

// First Turns
let yourFirstTurn = "";
let computerFirstTurn = "";

// Start Button
let startBtn = document.getElementById("start");
let gameStart = "";

// Again Button
let againBtn = document.getElementById("again");
let againStart = "";

// Both Sides Result Value
let yourResult = "";
let computerResult = "";

// turns
let yourTurn = "";
let compTurn = "";

// Win And Lose
let win = "";
let lose = "";

// Successes
let yourSuccesses = "";
let computerSuccesses = "";

// Game Logic

function sideSelection() {
  let random_number = Math.floor(Math.random() * (10 + 1));
  if (random_number > 5.1) {
    yourTurn = true;
    yourFirstTurn = true;
    result.textContent = "Your Turn";
    setTimeout(choice, 500);
  } else {
    yourTurn = false;
    yourFirstTurn = false;
  }
  if (random_number < 5.1) {
    compTurn = true;
    computerFirstTurn = true;
    result.textContent = "Computer Turn";
    setTimeout(choice, 500);
  } else {
    compTurn = false;
    computerFirstTurn = false;
  }
  // console.log(compTurn, yourTurn);
  // console.log(random_number);
}

function startGame() {
  gameStart = true;
  startBtn.style.display = "none";
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
    // NEW STYLES
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

    // PAPER ACTION
    paper.addEventListener("click", () => {
      paperValue = true;
      console.log(paperValue, "paper");
      yourSuccesses = true;
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

          result.textContent = "You have chosen Paper";
          yourResult = "Paper";
          // If Your's Turn Was First
          if (yourFirstTurn == true) {
            setTimeout(computerChoice, 2000);
          }
          setTimeout(gameEnd, 1000);
      }
    });

    // ROCK ACTION
    rock.addEventListener("click", () => {
      rockValue = true;
      yourSuccesses = true;
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

          result.textContent = "You have chosen Rock";
          yourResult = "Rock";
          // If Your's Turn Was First
          if (yourFirstTurn == true) {
            setTimeout(computerChoice, 2000);
          }
          setTimeout(gameEnd, 1000);
      }
    });

    // SCISSORS ACTION
    scissors.addEventListener("click", () => {
      scissorsValue = true;
      yourSuccesses = true;
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

          result.textContent = "You have chosen Scissors";
          yourResult = "Scissors";
          // If Your's Turn Was First
          if (yourFirstTurn == true) {
            setTimeout(computerChoice, 2000);
          }
          setTimeout(gameEnd, 1000);
      }
    });
  } else {
    yChoice.classList.remove("your-header-active");
    yChoice.classList.add("your-header");
  }
  // Computer Is Playing
  if (compTurn == true) {
    yourTurn = false;
    computerFirstTurn = true;
    yourFirstTurn = false;
    computerChoice();
  }
}

function computerChoice() {
  yourTurn = false;
  compChoice.classList.remove("computer-header");
  compChoice.classList.add("computer-header-active");
  let random_comp = Math.floor(Math.random() * 3) + 1;
  yourFirstTurn = false;
  if (random_comp == 3) {
    compScissorsValue = true;
    computerSuccesses = true;
    computerResult = "Scissors";
    if ((computerResult = "Scissors")) {
      compTurn = false;
      compChoice.classList.remove("computer-header-active");
      compChoice.classList.add("computer-header");
      // If Computer's Turn Was First
      if (computerFirstTurn == true) {
        yourFirstTurn = false;
        setTimeout((yourTurn = true) && choice, 2000);
      }
      setTimeout(gameEnd, 1000);
    }
    console.log(compScissorsValue, computerResult, "comp-scissors");
  } else {
    compScissorsValue = "";
  }
  if (random_comp == 2) {
    compRockValue = true;
    computerSuccesses = true;
    computerResult = "Rock";
    if ((computerResult = "Rock")) {
      compTurn = false;
      compChoice.classList.remove("computer-header-active");
      compChoice.classList.add("computer-header");
      // If Computer's Turn Was First
      if (computerFirstTurn == true) {
        yourFirstTurn = false;
        setTimeout((yourTurn = true) && choice, 2000);
      }
      setTimeout(gameEnd, 1000);
    }
    console.log(compRockValue, computerResult, "comp-rock");
  } else {
    compRockValue = "";
  }
  if (random_comp == 1) {
    compPaperValue = true;
    computerSuccesses = true;
    computerResult = "Paper";
    if ((computerResult = "Paper")) {
      compTurn = false;
      compChoice.classList.remove("computer-header-active");
      compChoice.classList.add("computer-header");
      // If Computer's Turn Was First
      if (computerFirstTurn == true) {
        yourFirstTurn = false;
        setTimeout((yourTurn = true) && choice, 2000);
      }
      setTimeout(gameEnd, 1000);
    }
    console.log(compPaperValue, computerResult, "comp-paper");
  } else {
    compPaperValue = "";
  }
}

function againGame() {
  computerResult = "";
  yourResult = "";

  yourFirstTurn = "";
  computerFirstTurn = "";
  compTurn = "";
  yourTurn = "";

  paper.disabled = false;
  scissors.disabled = false;
  rock.disabled = false;

  // Removing All Classes From The Player's Buttons

  switch (paperValue) {
    case true:
      // Paper Not Selected
      paper.classList.remove("paper-selected");
      paper.classList.add("paper");
      // Scissors Not Selected
      scissors.classList.remove("scissors-inact");
      scissors.classList.add("scissors");
      // Rock Not Selected
      rock.classList.remove("rock-inact");
      rock.classList.add("rock");
  }

  switch (rockValue) {
    case true:
      // Paper Not Selected
      paper.classList.remove("paper-inact");
      paper.classList.add("paper");
      // Scissors Not Selected
      scissors.classList.remove("scissors-inact");
      scissors.classList.add("scissors");
      // Rock Not Selected
      rock.classList.remove("rock-selected");
      rock.classList.add("rock");
  }

  switch (scissorsValue) {
    case true:
      // Paper Not Selected
      paper.classList.remove("paper-inact");
      paper.classList.add("paper");
      // Scissors Not Selected
      scissors.classList.remove("scissors-selected");
      scissors.classList.add("scissors");
      // Rock Not Selected
      rock.classList.remove("rock-inact");
      rock.classList.add("rock");
  }

  // Removing All Classes From The Computer's Buttons
  switch (compScissorsValue) {
    case true:
      compPaper.classList.remove("paper-inact");
      compPaper.classList.add("c-paper");

      compScissors.classList.remove("scissors-selected");
      compScissors.classList.add("c-scissors");

      compRock.classList.remove("rock-inact");
      compRock.classList.add("c-rock");
  }

  switch (compPaperValue) {
    case true:
      compPaper.classList.remove("paper-selected");
      compPaper.classList.add("c-paper");

      compScissors.classList.remove("scissors-inact");
      compScissors.classList.add("c-scissors");

      compRock.classList.remove("rock-inact");
      compRock.classList.add("c-rock");
  }

  switch (compRockValue) {
    case true:
      compPaper.classList.remove("paper-inact");
      compPaper.classList.add("c-paper");

      compScissors.classList.remove("scissors-inact");
      compScissors.classList.add("c-scissors");

      compRock.classList.remove("rock-selected");
      compRock.classList.add("c-rock");
  }

  scissorsValue = "";
  rockValue = "";
  paperValue = "";

  yourSuccesses = "";
  computerSuccesses = "";

  console.log("again Game");
  paper.removeEventListener("click", () => {});
  setTimeout(sideSelection, 1000);
}

againBtn.addEventListener("click", () => {
  againBtn.style.display = "none";
  yourSuccesses = "";
  computerSuccesses = "";
  againGame();
});

function gameEnd() {
  // If all are successful

  if (yourSuccesses == true && computerSuccesses == true) {
    console.log("game-end");
    // Removing Active Class From Header
    yChoice.classList.remove("your-header-active");
    yChoice.classList.add("your-header");

    // Showing Again Button
    againBtn.style.display = "block";

    // Showing Computer's Result by Adding Active Class To The Chosen Btn
    switch (compScissorsValue) {
      case true:
        compPaper.classList.remove("c-paper");
        compPaper.classList.add("paper-inact");

        compScissors.classList.remove("c-scissors");
        compScissors.classList.add("scissors-selected");

        compRock.classList.remove("c-rock");
        compRock.classList.add("rock-inact");
    }

    switch (compPaperValue) {
      case true:
        compPaper.classList.remove("c-paper");
        compPaper.classList.add("paper-selected");

        compScissors.classList.remove("c-scissors");
        compScissors.classList.add("scissors-inact");

        compRock.classList.remove("c-rock");
        compRock.classList.add("rock-inact");
    }

    switch (compRockValue) {
      case true:
        compPaper.classList.remove("c-paper");
        compPaper.classList.add("paper-inact");

        compScissors.classList.remove("c-scissors");
        compScissors.classList.add("scissors-inact");

        compRock.classList.remove("c-rock");
        compRock.classList.add("rock-selected");
    }

    // Compare Function
    resultCompare();
    console.log("Compare");
  }
}

function resultCompare() {
  // You win
  if (computerResult == "Scissors" && yourResult == "Rock") {
    result.textContent = "You Win!";
    yourScoreValue++;
    yourScore.textContent = yourScoreValue;
  } else {
  }
  if (computerResult == "Paper" && yourResult == "Scissors") {
    result.textContent = "You Win!";
    yourScoreValue++;
    yourScore.textContent = yourScoreValue;
  } else {
  }
  if (computerResult == "Rock" && yourResult == "Paper") {
    result.textContent = "You Win!";
    yourScoreValue++;
    yourScore.textContent = yourScoreValue;
  } else {
  }

  // TIE
  if (computerResult == "Scissors" && yourResult == "Scissors") {
    result.textContent = "Tie!";
  } else {
  }
  if (computerResult == "Rock" && yourResult == "Rock") {
    result.textContent = "Tie!";
  } else {
  }
  if (computerResult == "Paper" && yourResult == "Paper") {
    result.textContent = "Tie!";
  } else {
  }

  // You Lose
  if (computerResult == "Scissors" && yourResult == "Paper") {
    result.textContent = "You Lose!";
    computerScoreValue++;
    computerScore.textContent = computerScoreValue;
  } else {
  }
  if (computerResult == "Paper" && yourResult == "Rock") {
    result.textContent = "You Win!";
    computerScoreValue++;
    computerScore.textContent = computerScoreValue;
  } else {
  }
  if (computerResult == "Rock" && yourResult == "Scissors") {
    result.textContent = "You Lose!";
    computerScore.textContent = computerScoreValue;
  } else {
  }
}
