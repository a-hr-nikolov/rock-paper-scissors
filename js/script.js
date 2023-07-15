/* 

This is my first practice project that actually amounts to something. I've only
refactored small pieces here and there, mainly to make it easier to read.

*/

const gameContainer = document.querySelector('.game');
const choiceButtonsRPS = document.querySelectorAll('.choice');
const startGameButton = document.querySelector('.start-game');
const reloadGameButton = document.querySelector('.reload');
const title = document.querySelector('.title');

choiceButtonsRPS.forEach(button =>
  button.addEventListener('click', playRockPaperScissors)
);
startGameButton.addEventListener('click', startGame);
reloadGameButton.addEventListener('click', reloadGame);

function startGame(event) {
  event.target.classList.toggle('off');
  gameContainer.classList.toggle('off');
  title.classList.toggle('off');
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}

function playRockPaperScissors(event) {
  let computerChoice = getComputerChoice();
  let playerChoice = event.target.value;
  let result;

  document
    .querySelectorAll('.pc-choice')
    .forEach(item => item.classList.remove('select'));

  document.querySelector(`#pc-${computerChoice}`).classList.add('select');

  if (playerChoice === computerChoice) {
    result = 'The round is a DRAW, go again!';
  } else
    switch (playerChoice) {
      case 'rock':
        if (computerChoice === 'paper')
          result = 'You lose the round! Paper beats Rock!';
        if (computerChoice === 'scissors')
          result = 'You win! Rock beats Scissors!';
        break;
      case 'paper':
        if (computerChoice === 'rock')
          result = 'You win the round! Paper beats Rock!';
        if (computerChoice === 'scissors')
          result = 'You lose! Scissors beat Paper!';
        break;
      case 'scissors':
        if (computerChoice === 'rock')
          result = 'You lose! Rock beats Scissors!';
        if (computerChoice === 'paper')
          result = 'You win! Scissors beat Paper!';
        break;
    }
  document.querySelector('#result').textContent = result;
  keepScore(result);
  endGame();
}

function keepScore(result) {
  let playerScore = Number(document.querySelector('#player-score').innerText);
  let computerScore = Number(
    document.querySelector('#computer-score').innerText
  );
  if (result.includes('win')) {
    playerScore++;
    document.querySelector('#player-score').innerText = `${playerScore}`;
  }
  if (result.includes('lose')) {
    computerScore++;
    document.querySelector('#computer-score').innerText = `${computerScore}`;
  }
}

function endGame() {
  if (document.querySelector('#player-score').innerText == 5) {
    document.querySelector('#result').innerText =
      'THE GAME IS YOURS! No computer can match your wit!';
    choiceButtonsRPS.forEach(button => button.classList.toggle('off'));
    reloadGameButton.classList.toggle('off');
  }
  if (document.querySelector('#computer-score').innerText == 5) {
    document.querySelector('#result').innerText =
      'YOU LOST... You bring shame to the human race!';
    choiceButtonsRPS.forEach(button => button.classList.toggle('off'));
    reloadGameButton.classList.toggle('off');
  }
}

function reloadGame() {
  document
    .querySelectorAll('.pc-choice')
    .forEach(item => item.classList.remove('select'));
  choiceButtonsRPS.forEach(button => button.classList.toggle('off'));
  reloadGameButton.classList.toggle('off');
  document.querySelector('#result').innerText = 'So you dare try again? Brave!';
  document.querySelector('#player-score').innerText = '0';
  document.querySelector('#computer-score').innerText = '0';
}
