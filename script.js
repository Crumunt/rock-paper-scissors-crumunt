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
  const playerChoice = document.createElement('div');
  const computerChoice = document.createElement('div');

  let userMove = '';
  let computerMove = '';

  playerChoice.classList.add('userChoice');
  playerChoice.textContent = `Player: ${userMove}`;

  computerChoice.classList.add('aiChoice');
  computerChoice.textContent = `Computer: ${computerMove}`;

  const gameStartImageSrc = './images/rock-paper-scissors.png';

  const playerImage = document.createElement('img');
  playerImage.src = gameStartImageSrc;

  playerChoice.appendChild(playerImage);

  const computerImage = document.createElement('img');
  computerImage.src = gameStartImageSrc;

  computerChoice.appendChild(computerImage);

  const gameWinner = document.createElement('p');
  gameWinner.textContent = '';

  appendToHTML();

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

    displayImage(userMove, computerMove);

    gameWinner.textContent = checkWinner();

    playerScore.textContent = `Player Score: ${currentPlayerScore}`;
    computerScore.textContent = `Computer Score: ${currentComputerScore}`;

    if (currentPlayerScore === 5 || currentComputerScore === 5) {

      const winnderDiv = document.querySelector('.gw');

      showWinner();

      winnderDiv.append(resetButton);

      moveButtons.forEach((button) => {
        button.disabled = true;
      });

    }
  }

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

  function displayImage(userSrc, computerSrc) {

    playerImage.src = `./images/${userSrc}.png`;

    computerImage.src = `./images/${computerSrc}.png`;

  }

  function showWinner() {

    const gameWinner = document.createElement('img');

    gameWinner.classList = 'winnerImage';

    if(currentPlayerScore === 5) {
      gameWinner.src = './images/winner.png';
    }else {
      gameWinner.src = './images/winner-computer.png';
    }

    const winnderDiv = document.querySelector('.gw');

    winnderDiv.appendChild(gameWinner);
  }

  const resetButton = document.createElement('button');

  resetButton.textContent = 'Reset';

  resetButton.addEventListener('click', resetGame);

  function resetGame() {
    currentPlayerScore = 0;
    currentComputerScore = 0;

    userMove = '';
    computerMove = '';

    playerScore.textContent = `Player Score: ${currentPlayerScore}`;
    computerScore.textContent = `Computer Score: ${currentComputerScore}`;

    playerChoice.textContent = `Player: ${userMove}`;
    computerChoice.textContent = `Computer: ${computerMove}`;

    playerImage.src = gameStartImageSrc;
    computerImage.src = gameStartImageSrc;

    playerChoice.appendChild(playerImage);
    computerChoice.appendChild(computerImage);

    gameWinner.textContent = '';

    const winnerDiv = document.querySelector('.gw');

    const toRemove = document.querySelector('.winnerImage');

    winnerDiv.removeChild(toRemove);
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