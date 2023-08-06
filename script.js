const score = document.querySelector('.scores');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');

const choices = document.querySelector('.choices');
const playerChoice = document.createElement('p');
const computerChoice = document.createElement('p');
const winner = document.createElement('p');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    userMove = button.value;
    updateUI();
  });
});

let player = 0;
let computer = 0;

let userMove = '';
let computerMove = '';

playerScore.classList.add('player');
playerScore.textContent = `Player Score: ${player}`;

computerScore.classList.add('computer');
computerScore.textContent = `Computer Score: ${computer}`;

score.appendChild(playerScore);
score.appendChild(computerScore);

playerChoice.classList.add('userChoice');
playerChoice.textContent = `Player: ${userMove}`;

computerChoice.classList.add('aiChoice');
computerChoice.textContent = `Computer: ${computerMove}`;

choices.append(playerChoice);
choices.append(computerChoice);
choices.append(winner);

function checkWinner() {
  if (userMove === computerMove) {
    return 'draw';
  } else if (userMove === 'rock' && computerMove !== 'paper') {
    player++;
    return 'Player Wins!';
  } else if (userMove === 'paper' && computerMove !== 'scissors') {
    player++;
    return 'Player Wins!'
  } else if (userMove === 'scissors' && computerMove !== 'rock') {
    player++;
    return 'Player Wins!';
  } else {
    computer++;
    return 'Computer Wins!';
  }
}

function getComputerMove() {
  const choice = Math.floor(Math.random() * 3) + 1;

  if (choice == 1) {
    return 'rock';
  } else if (choice == 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function updateUI() {
  computerMove = getComputerMove();
  playerChoice.textContent = `Player: ${userMove}`;
  computerChoice.textContent = `Computer: ${computerMove}`;
  winner.textContent = checkWinner();
  playerScore.textContent = `Player Score: ${player}`;
  computerScore.textContent = `Computer Score: ${computer}`;
}

