const moveButtons = document.querySelectorAll('button');

moveButtons.forEach((button) => {
  button.addEventListener('click', () => {
    userMove = button.value;
    computerMove = getComputerMove();
    updateUI();
  });
});

const scoreDiv = document.querySelector('.scores');

const playerScore = document.createElement('p');

let currentPlayerScore = 0;
playerScore.classList.add('player');
playerScore.textContent = `Player Score: ${currentPlayerScore}`;

const computerScore = document.createElement('p');

let currentComputerScore = 0;
computerScore.classList.add('computer');
computerScore.textContent = `Computer Score: ${currentComputerScore}`;

const choicesDiv = document.querySelector('.choices');
const playerChoice = document.createElement('p');
const computerChoice = document.createElement('p');

let userMove = '';
let computerMove = '';

playerChoice.classList.add('userChoice');
playerChoice.textContent = `Player: ${userMove}`;

computerChoice.classList.add('aiChoice');
computerChoice.textContent = `Computer: ${computerMove}`;

const gameWinner = document.createElement('p');
gameWinner.textContent = '';

appendToHTML();

function checkWinner() {

  if (userMove === computerMove) {
    return 'draw';
  } else if (userMove === 'rock' && computerMove !== 'paper') {
    currentPlayerScore++;
    return 'Player Wins!';
  } else if (userMove === 'paper' && computerMove !== 'scissors') {
    currentPlayerScore++;
    return 'Player Wins!'
  } else if (userMove === 'scissors' && computerMove !== 'rock') {
    currentPlayerScore++;
    return 'Player Wins!';
  } else {
    currentComputerScore++;
    return 'Computer Wins!';
  }
}

function getComputerMove() {
  const generateRandomNumber = Math.floor(Math.random() * 3) + 1;

  switch(generateRandomNumber) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}

function updateUI() {

  playerChoice.textContent = `Player: ${userMove}`;
  computerChoice.textContent = `Computer: ${computerMove}`;

  gameWinner.textContent = checkWinner();

  playerScore.textContent = `Player Score: ${currentPlayerScore}`;
  computerScore.textContent = `Computer Score: ${currentComputerScore}`;

  if (currentPlayerScore === 5 || currentComputerScore === 5) {

    const winnderDiv = document.querySelector('.gw');

    winnderDiv.append(resetButton);

    moveButtons.forEach((button) => {
      button.disabled = true;
    });

    showWinner();
  }
}

const resetButton = document.createElement('button');

resetButton.textContent = 'Reset';

resetButton.addEventListener('click', resetGame);

function resetGame() {
  currentPlayerScore = 0;
  currentComputerScore = 0

  userMove = '';
  computerMove = '';

  playerScore.textContent = `Player Score: ${currentPlayerScore}`;
  computerScore.textContent = `Computer Score: ${currentComputerScore}`;

  playerChoice.textContent = `Player: ${userMove}`;
  computerChoice.textContent = `Computer: ${computerMove}`;

  gameWinner.textContent = '';

  const winnerDiv = document.querySelector('.gw');

  winnerDiv.removeChild(resetButton);

  moveButtons.forEach((button) => {
    button.disabled = false;
  });
}

function appendToHTML() {

  const winnerDiv = document.querySelector('.gw');

  winnerDiv.append(gameWinner);

  scoreDiv.appendChild(playerScore);
  scoreDiv.appendChild(computerScore);

  choicesDiv.append(playerChoice);
  choicesDiv.append(computerChoice);
}

function showWinner() {
  if(currentPlayerScore === 5) {
    gameWinner.textContent = 'Player has won the match!';
  }else {
    gameWinner.textContent = 'Computer has won the match :<';
  }
}