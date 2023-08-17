let winCount = 0;

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
      document.getElementById('results').innerHTML = ('Tie! Keep it going!');
      return 0;
  } else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
      document.getElementById('results').innerHTML = ('You win! Rock beats Scissors');
      return 1;
  } else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
      document.getElementById('results').innerHTML = ('You win! Paper beats Rock');
      return 1;
  } else if(playerSelection === 'SCISSORS' && computerSelection == 'PAPER') {
      document.getElementById('results').innerHTML = ('You win! Scissors beats paper');
      return 1;
  } else if(playerSelection === 'SCISSORS' && computerSelection == 'ROCK') {
      document.getElementById('results').innerHTML = ('You lose! Rock beats Scissors');
      return 0;
  } else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
      document.getElementById('results').innerHTML = ('You lose! Scissors beats paper');
      return 0;
  } else if(playerSelection === 'ROCK' && computerSelection === 'PAPER') {
      document.getElementById('results').innerHTML = ('You lose! Paper beats Rock');
      return 0;
  } else {
      document.getElementById('results').innerHTML = ('Invalid choice. You lose this round')
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
    document.getElementById('results').innerHTML = ('You win this 5 round game!');
  } else {
    document.getElementById('results').innerHTML = ('You lost this 5 round game!');
  }
}


const selections = Array.from(document.querySelectorAll("button"));
selections.forEach(selection => {
  selection.addEventListener('click', e => playRound(e.target.value));
});

