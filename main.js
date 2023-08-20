let playerScore = 0;
let computerScore = 0;
let results = document.getElementById('results');

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
      results.innerHTML = ('Tie! Keep it going!');
      keepScore(0, 0);
  } else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
      results.innerHTML = ('You win! Rock beats Scissors');
      keepScore(1, 0);
  } else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
      results.innerHTML = ('You win! Paper beats Rock');
      keepScore(1, 0);
  } else if(playerSelection === 'SCISSORS' && computerSelection == 'PAPER') {
      results.innerHTML = ('You win! Scissors beats paper');
      keepScore(1, 0);
  } else if(playerSelection === 'SCISSORS' && computerSelection == 'ROCK') {
      results.innerHTML = ('You lose! Rock beats Scissors');
      keepScore(0, 1);
  } else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
      results.innerHTML = ('You lose! Scissors beats paper');
      keepScore(0, 1);
  } else if(playerSelection === 'ROCK' && computerSelection === 'PAPER') {
      results.innerHTML = ('You lose! Paper beats Rock');
      keepScore(0, 1);
  } else {
      results.innerHTML = ('Invalid choice. You lose this round')
  }
}

function keepScore(playerPoint, computerPoint) {
  playerScore += playerPoint;
  computerScore += computerPoint;
  let scores = document.createElement('p');
  scores.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`
  results.appendChild(scores);

  if (playerScore >= 5) {
    results.innerHTML = ('You win this 5 round game!');
    resetButtons();
  } else if (computerScore >= 5){
    results.innerHTML = ('The Computer won this 5 round game!');
    resetButtons();
  }
}
  
function resetButtons(){
  selections.forEach(selection => {
    selection.type = 'reset';
    console.log(selection.type);
  })
  const resetSelections = Array.from(document.querySelectorAll('[type=reset]'));
  console.log(resetSelections);
  resetSelections.forEach(selection => {
    selection.addEventListener('click', e => resetGame(e.target.value));
});
}

function resetGame(e) {
  playerScore = 0;
  computerScore = 0;
  results.innerHTML = ('');
  selections.forEach(selection => {
    selection.type = 'button';
    console.log(selection.type);
  })
}


const selections = Array.from(document.querySelectorAll("button"));
selections.forEach(selection => {
  selection.addEventListener('click', e => playRound(e.target.value));
});

