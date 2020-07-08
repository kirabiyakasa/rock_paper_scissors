function computerPlay() {
  let number = Math.floor(Math.random() * 3);
  if (number == 0) {
    document.getElementById('rock-icon-computer').style.display = 'inline'
    document.getElementById('paper-icon-computer').style.display = 'none'
    document.getElementById('scissors-icon-computer').style.display = 'none'
    return 'Rock';
  } else if (number == 1) {
    document.getElementById('rock-icon-computer').style.display = 'none'
    document.getElementById('paper-icon-computer').style.display = 'inline'
    document.getElementById('scissors-icon-computer').style.display = 'none'
    return 'Paper';
  } else {
    document.getElementById('rock-icon-computer').style.display = 'none'
    document.getElementById('paper-icon-computer').style.display = 'none'
    document.getElementById('scissors-icon-computer').style.display = 'inline'
    return 'Scissors';
  }
}

let computerScore = 0;
let playerScore = 0;
let playerSelection;

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() === 'ROCK' && 
        computerSelection.toUpperCase() === 'PAPER'||
        playerSelection.toUpperCase() === 'PAPER' && 
        computerSelection.toUpperCase() === 'SCISSORS'||
        playerSelection.toUpperCase() === 'SCISSORS' && 
        computerSelection.toUpperCase() === 'ROCK') {
            ++computerScore;
            document.getElementById('green-arrow').style.display = 'none'
            document.getElementById('red-arrow').style.display = 'inline'
            document.getElementById("round-results").innerHTML = 
            `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection.toUpperCase() === 'ROCK' && 
        computerSelection.toUpperCase() === 'SCISSORS' ||
        playerSelection.toUpperCase() === 'PAPER' && 
        computerSelection.toUpperCase() === 'ROCK' ||
        playerSelection.toUpperCase() === 'SCISSORS' && 
        computerSelection.toUpperCase() === 'PAPER') {
            ++playerScore;
            document.getElementById('green-arrow').style.display = 'inline'
            document.getElementById('red-arrow').style.display = 'none'
            document.getElementById("round-results").innerHTML =
            `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection.toUpperCase() === 'ROCK' && 
        computerSelection.toUpperCase() === 'ROCK' ||
        playerSelection.toUpperCase() === 'PAPER' && 
        computerSelection.toUpperCase() === 'PAPER' ||
        playerSelection.toUpperCase() === 'SCISSORS' && 
        computerSelection.toUpperCase() === 'SCISSORS') {
            document.getElementById('green-arrow').style.display = 'none'
            document.getElementById('red-arrow').style.display = 'none'
            document.getElementById("round-results").innerHTML =
           `Tie! ${computerSelection} and ${playerSelection} cancel out`; 
  } else {
    return "Invalid input";
  }
}

function countPlayerScore() {
  document.getElementById('player-scoring').innerHTML =
   'Player Score: ' + playerScore
}

function countComputerScore() {
  document.getElementById('computer-scoring').innerHTML = 
  'Computer Score: ' + computerScore
}

document.getElementById("choose-rock").addEventListener('click', 
function() {
  playerSelection = 'Rock'
  const computerSelection = computerPlay();
  document.getElementById('rock-icon-player').style.display = 'inline'
  document.getElementById('paper-icon-player').style.display = 'none'
  document.getElementById('scissors-icon-player').style.display = 'none'
  playRound(playerSelection, computerSelection)
  countPlayerScore()
  countComputerScore()
  endGame()
})
document.getElementById("choose-paper").addEventListener('click', 
function() {
  playerSelection = 'Paper'
  const computerSelection = computerPlay();
  document.getElementById('rock-icon-player').style.display = 'none'
  document.getElementById('paper-icon-player').style.display = 'inline'
  document.getElementById('scissors-icon-player').style.display = 'none'
  playRound(playerSelection, computerSelection)
  countPlayerScore()
  countComputerScore()
  endGame()
})
document.getElementById("choose-scissors").addEventListener('click', 
function() {
  playerSelection = 'Scissors'
  const computerSelection = computerPlay();
  document.getElementById('rock-icon-player').style.display = 'none'
  document.getElementById('paper-icon-player').style.display = 'none'
  document.getElementById('scissors-icon-player').style.display = 'inline'
  playRound(playerSelection, computerSelection)
  countPlayerScore()
  countComputerScore()
  endGame()
})

function endGame() {
  if (playerScore === 5) {
    document.getElementById('choose-rock').style.display = 'none';
    document.getElementById('choose-paper').style.display = 'none';
    document.getElementById('choose-scissors').style.display = 'none';
    document.getElementById('play-again').style.display = 'inline';
    document.getElementById('game-results').innerHTML = 
    'You win the game!'
  } else if (computerScore === 5) {
    document.getElementById('choose-rock').style.display = 'none';
    document.getElementById('choose-paper').style.display = 'none';
    document.getElementById('choose-scissors').style.display = 'none';
    document.getElementById('play-again').style.display = 'inline';
    document.getElementById('game-results').innerHTML = 
    'Computer wins the game!'
  }
}

document.getElementById('play-again').addEventListener('click', 
function playAgain() {
  computerScore = 0;
  playerScore = 0 ;
  document.getElementById
  ('choose-rock').style.display = 'inline';
  document.getElementById
  ('choose-paper').style.display = 'inline';
  document.getElementById
  ('choose-scissors').style.display = 'inline';
  document.getElementById('play-again').style.display = 'none';
  document.getElementById('game-results').innerHTML = ''
  document.getElementById("round-results").innerHTML = ''      
  document.getElementById('rock-icon-player').style.display = 'none'
  document.getElementById('paper-icon-player').style.display = 'none'
  document.getElementById('scissors-icon-player').style.display = 'none'
  document.getElementById('rock-icon-computer').style.display = 'none'
  document.getElementById('paper-icon-computer').style.display = 'none'
  document.getElementById('scissors-icon-computer').style.display = 'none'
  document.getElementById('green-arrow').style.display = 'none'
  document.getElementById('red-arrow').style.display = 'none'
  document.getElementById('player-scoring').innerHTML = 'Player Score: 0'
  document.getElementById('computer-scoring').innerHTML = 'Computer Score: 0'
})