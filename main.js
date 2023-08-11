// Adding comment to check what branch I am on
// This is so cool

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
      console.log('Tie! Keep it going!');
      return 0;
  } else if(playerSelectionCaps === 'ROCK' && computerSelectionCaps === 'SCISSORS') {
      console.log('You win! Rock beats Scissors');
      return 1;
  } else if(playerSelectionCaps === 'PAPER' && computerSelectionCaps === 'ROCK') {
      console.log('You win! Paper beats Rock');
      return 1;
  } else if(playerSelectionCaps === 'SCISSORS' && computerSelectionCaps == 'PAPER') {
      console.log('You win! Scissors beats paper');
      return 1;
  } else if(playerSelectionCaps === 'SCISSORS' && computerSelectionCaps == 'ROCK') {
      console.log('You lose! Rock beats Scissors');
      return 0;
  } else if(playerSelectionCaps === 'PAPER' && computerSelectionCaps === 'SCISSORS') {
      console.log('You lose! Scissors beats paper');
      return 0;
  } else if(playerSelectionCaps === 'ROCK' && computerSelectionCaps === 'PAPER') {
      console.log('You lose! Paper beats Rock');
      return 0;
  } else {
      console.log('Invalid choice. You lose this round')
    return 0;
  }
}

function game() {
  let playerSelection = '';
  let computerSelection = '';
  let winCount = 0;
  for (let i = 0; i <5; i++) {
    playerSelection = prompt('Enter rock, paper, or scissors', 'rock');
    computerSelection = getComputerChoice();
    winCount += playRound(playerSelection, computerSelection);
  }
  if (winCount >= 3) {
    console.log('You win this 5 round game!');
  } else {
    console.log('You lost this 5 round game!');
  }
}