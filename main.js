function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if(computerChoice === 1) {
    return 'Rock';
  } else if(computerChoice === 2) {
    return 'Paper';
  } else if(computerChoice === 3) {
    return 'Scissors';
  } else {
    return 'Incorrect computerChoice value';
  }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionCaps = playerSelection.toUpperCase();
    let computerSelectionCaps = computerSelection.toUpperCase();
    if(playerSelectionCaps === computerSelectionCaps) {
        return 'Tie! Keep it going!';
    } else if(playerSelectionCaps === 'ROCK' && computerSelectionCaps === 'SCISSORS') {
        return 'You win! Rock beats Scissors';
    } else if(playerSelectionCaps === 'PAPER' && computerSelectionCaps === 'ROCK') {
        return 'You win! Paper beats Rock';
    } else if(playerSelectionCaps === 'SCISSORS' && computerSelectionCaps == 'PAPER') {
        return 'You win! Scissors beats paper';
    }
}

const playerSelection = 'paper';
const computerSelection = 'rock';
console.log(playRound(playerSelection, computerSelection));