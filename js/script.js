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
          result = 'You lose! Scissors beats Paper!';
        break;
      case 'scissors':
        if (computerChoice === 'rock')
          result = 'You lose! Rock beats Scissors!';
        if (computerChoice === 'paper')
          result = 'You win! Scissors beats Paper!';
        break;
      default:
        result = 'Not a valid choice, you lose!';
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
    buttonsRPS.forEach(button => (button.style.display = 'none'));
  }
  if (document.querySelector('#computer-score').innerText == 5) {
    document.querySelector('#result').innerText =
      'YOU LOST... PATHETIC! You bring shame to the human race!';
    buttonsRPS.forEach(button => (button.style.display = 'none'));
  }
}

const buttonsRPS = document.querySelectorAll('.choice');
buttonsRPS.forEach(button =>
  button.addEventListener('click', playRockPaperScissors)
);
