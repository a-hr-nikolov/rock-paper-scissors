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

function playRockPaperScissors(
  playerSelection,
  computerSelection = getComputerChoice()
) {
  let playerChoice = playerSelection.toLowerCase();
  if (playerChoice === computerSelection) return "It's a DRAW!";
  switch (playerChoice) {
    case 'rock':
      if (computerSelection === 'paper') return 'You lose! Paper beats Rock!';
      if (computerSelection === 'scissors')
        return 'You win! Rock beats Scissors!';
    case 'paper':
      if (computerSelection === 'rock') return 'You win! Paper beats Rock!';
      if (computerSelection === 'scissors')
        return 'You lose! Scissors beats Paper!';
    case 'scissors':
      if (computerSelection === 'rock') return 'You lose! Rock beats Scissors!';
      if (computerSelection === 'paper')
        return 'You win! Scissors beats Paper!';
  }
}
