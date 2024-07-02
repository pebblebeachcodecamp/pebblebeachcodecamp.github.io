var rock = document.getElementById("nuke");
var paper = document.getElementById("force_field");
var scissors = document.getElementById("man_that_walks_in_with_a_gun");

var playerScoreDisplay = document.getElementById("playerScore");
var computerScoreDisplay = document.getElementById("computerScore");
var resultsDisplay = document.getElementById("results");

var playerScore = 0;
var computerScore = 0;

rock.addEventListener("click", function() {
  playRound("nuke");
});

paper.addEventListener("click", function() {
  playRound("force_field");
});

scissors.addEventListener("click", function() {
  playRound("man_that_walks_in_with_a_gun");
});


function playRound(playerSelection) {
  var computerSelection = computerPlay();

  if(playerSelection === computerSelection) {
    tie(computerSelection);
  } else if(playerSelection === "nuke" && computerSelection === "man_that_walks_in_with_a_gun") {
    playerWin(computerSelection);
  } else if(playerSelection === "nuke" && computerSelection === "force_field") {
    computerWin(computerSelection);
  } else if(playerSelection === "force_field" && computerSelection === "nuke") {
    playerWin(computerSelection);
  } else if(playerSelection === "force_field" && computerSelection === "man_that_walks_in_with_a_gun") {
    computerWin(computerSelection);
  } else if(playerSelection === "man_that_walks_in_with_a_gun" && computerSelection === "force_field") {
    playerWin(computerSelection);
  } else if(playerSelection === "man_that_walks_in_with_a_gun" && computerSelection === "nuke") {
    computerWin(computerSelection);
  }
}

function computerPlay() {
  var choices = ["nuke", "man_that_walks_in_with_a_gun", "force_field"];
  var random = Math.floor(Math.random() * 3);
  return choices[random];
}

function tie(computerSelection) {
  resultsDisplay.textContent = `Computer chose ${computerSelection}. It's a tie!`;
}

function playerWin(computerSelection) {
  playerScore++;
  playerScoreDisplay.textContent = playerScore;
  resultsDisplay.textContent = `Computer chose ${computerSelection}. You win!`;
}

function computerWin(computerSelection) {
  computerScore++;
  computerScoreDisplay.textContent = computerScore;
  resultsDisplay.textContent = `Computer chose ${computerSelection}. You lose!`;
}