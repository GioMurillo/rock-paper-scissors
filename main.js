function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if(computerChoice === 1) {
    return 'ROCK';
  } else if(computerChoice === 2) {
    return 'PAPER';
  } else if(computerChoice === 3) {
    return 'SCISSORS';
  } else {
    return 'Incorrect computerChoice value';
  }
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  if(playerSelection === computerSelection) {
      console.log('Tie! Keep it going!');
      return 0;
  } else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
      console.log('You win! Rock beats Scissors');
      return 1;
  } else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
      console.log('You win! Paper beats Rock');
      return 1;
  } else if(playerSelection === 'SCISSORS' && computerSelection == 'PAPER') {
      console.log('You win! Scissors beats paper');
      return 1;
  } else if(playerSelection === 'SCISSORS' && computerSelection == 'ROCK') {
      console.log('You lose! Rock beats Scissors');
      return 0;
  } else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
      console.log('You lose! Scissors beats paper');
      return 0;
  } else if(playerSelection === 'ROCK' && computerSelection === 'PAPER') {
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

let winCount = 0;

const selections = Array.from(document.querySelectorAll("button"));
selections.forEach(selection => {
  selection.addEventListener('click', e => playRound(e.target.value));
});

