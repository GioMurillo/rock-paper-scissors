let playerScore = 0;
let computerScore = 0;

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
      keepScore(0, 0);
      return 0;
  } else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
      document.getElementById('results').innerHTML = ('You win! Rock beats Scissors');
      keepScore(1, 0);
      return 1;
  } else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
      document.getElementById('results').innerHTML = ('You win! Paper beats Rock');
      keepScore(1, 0);
      return 1;
  } else if(playerSelection === 'SCISSORS' && computerSelection == 'PAPER') {
      document.getElementById('results').innerHTML = ('You win! Scissors beats paper');
      keepScore(1, 0);
      return 1;
  } else if(playerSelection === 'SCISSORS' && computerSelection == 'ROCK') {
      document.getElementById('results').innerHTML = ('You lose! Rock beats Scissors');
      keepScore(0, 1);
      return 0;
  } else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
      document.getElementById('results').innerHTML = ('You lose! Scissors beats paper');
      keepScore(0, 1);
      return 0;
  } else if(playerSelection === 'ROCK' && computerSelection === 'PAPER') {
      document.getElementById('results').innerHTML = ('You lose! Paper beats Rock');
      keepScore(0, 1);
      return 0;
  } else {
      document.getElementById('results').innerHTML = ('Invalid choice. You lose this round')
    return 0;
  }
}

function keepScore(playerPoint, computerPoint) {
  playerScore += playerPoint;
  computerScore += computerPoint;
  document.getElementById('results').innerHTML += `\nPlayer score: ${playerScore} | Computer score: ${computerScore}`;

  if (playerScore >= 5) {
    document.getElementById('results').innerHTML = ('You win this 5 round game!');
    resetGame();
  } else if (computerScore >= 5){
    document.getElementById('results').innerHTML = ('The Computer won this 5 round game!');
    resetGame();
  }
}
  
function resetGame(){
  selections.forEach(selection => {
    selection.type = 'reset';
    console.log(selection.type);
  })
}


const selections = Array.from(document.querySelectorAll("button"));
selections.forEach(selection => {
  selection.addEventListener('click', e => playRound(e.target.value));
});

