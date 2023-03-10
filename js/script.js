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
    default:
      return 'Not a valid choice, you lose!';
  }
}

function playRPSBestOfFive() {
  let winnerTrack = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      'What do you choose? (rock, paper, or scissors)'
    );
    let result = playRockPaperScissors(playerSelection);
    console.log(result);
    if (result.includes('win')) winnerTrack++;
    if (result.includes('lose')) winnerTrack--;
  }
  if (winnerTrack == 0) return 'The PC is your equal!';
  if (winnerTrack > 0) return 'The PC is no match for your wit!';
  if (winnerTrack < 0) return 'You bring shame to the human race!';
}
