const validOptions = ["rock", "paper", "scissors"];

function playRound(playerSelection, computerSelection) {
  if (!validOptions.includes(playerSelection)) {
    throw new Error(`Invalid choice: ${playerSelection}`);
  }
  let result;
  if (playerSelection == computerSelection) {
    result = "Draw";
  } else if (playerSelection == "rock") {
    switch (computerSelection) {
      case "scissors":
        result = "Win";
        break;
      case "paper":
        result = "Lose";
        break;
    }
  } else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "rock":
        result = "Win";
        break;
      case "scissors":
        result = "Lose";
        break;
    }
  } else if (playerSelection == "scissors") {
    switch (computerSelection) {
      case "paper":
        result = "Win";
        break;
      case "rock":
        result = "Lose";
        break;
    }
  }
  return result;
}

// return either rock, paper, or scissors with equal likelihood
function getComputerChoice() {
  let choice;
  let x = Math.round(Math.random() * 2);
  switch (x) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
      break;
  }
  return choice;
}

function playGame(numGames, playerSelection) {
  let results = {
    Win: 0,
    Lose: 0,
    Draw: 0,
  };

  for (var i = 0; i < numGames; i++) {
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection.toLowerCase(), computerSelection);
    results[result] += 1;
  }
  console.log(playerSelection, results);
}

// let playerSelection = prompt("whats your choice?").toLowerCase();

playGame(100, "ROCK");
playGame(100, "PAPER");
playGame(100, "SCISSORS");

document.addEventListener('DOMContentLoaded', () => {
  let buttons = document.getElementsByClassName('rps');
  console.log(buttons);
  let rps = Array.prototype.filter.call(
    buttons,
    (button) => {
      button.addEventListener("click", () => {
        let playerSelection = button.id;
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        
        let resultDiv = document.getElementById('results');
        let newContent = document.createTextNode(result+'\n');
        resultDiv.appendChild(newContent);
      })
    }
  );
});