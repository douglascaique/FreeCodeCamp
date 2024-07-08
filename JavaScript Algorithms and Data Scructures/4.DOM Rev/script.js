
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  // if (player == "Rock" && computer == "Scissors") {
  //   return true;
  // } else if (player == "Scissors" && computer == "Paper") {
  //   return true;
  // } else if (player == "Paper" && computer == "Rock") {
  //   return true;
  // } else {
  //   return false
  // }

  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );

}

let playerScore = 0;
let computerScore = 0

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  // const result = hasPlayerWonTheRound()

  // if (result == true) {
  //   return `"Player wins! ${userOption} beats ${computerResult}"`
  // } else {
  //   return `"Computer wins! ${computerResult} beats ${userOption}".`
  // }

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;
  roundResultsMsg.textContent = getRoundResults(userOption);

  // if (playerScore === 3 || computerScore === 3) {
  //   optionsContainer.style.display = "none";
  //   resetGameBtn.style.display = "block";
  //   winnerMsgElement.textContent = playerScore === 3 ? "Player has won the game!" : "Computer has won the game!";
  // }

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${playerScore === 3 ? "Player" : "Computer"
      } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
};

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;

  resetGameBtn.style.display = "hide"
  optionsContainer.style.display = "flex";
  winnerMsgElement.textContent = "";
  roundResultsMsg.textContent = "";
}
