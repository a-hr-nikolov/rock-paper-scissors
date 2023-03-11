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
  let playerChoice = playerSelection.toLowerCase();
  if (playerChoice === computerChoice) return "It's a DRAW!";
  switch (playerChoice) {
    case 'rock':
      if (computerChoice === 'paper') return 'You lose! Paper beats Rock!';
      if (computerChoice === 'scissors') return 'You win! Rock beats Scissors!';
    case 'paper':
      if (computerChoice === 'rock') return 'You win! Paper beats Rock!';
      if (computerChoice === 'scissors')
        return 'You lose! Scissors beats Paper!';
    case 'scissors':
      if (computerChoice === 'rock') return 'You lose! Rock beats Scissors!';
      if (computerChoice === 'paper') return 'You win! Scissors beats Paper!';
    default:
      return 'Not a valid choice, you lose!';
  }
}

const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const container = document.querySelector('#container');
console.log('🚀 ~ file: script.js:37 ~ container:', container);

rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

// function playRPSBestOfFive() {
//   let winnerTrack = 0;
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt(
//       'What do you choose? (rock, paper, or scissors)'
//     );
//     let result = playRockPaperScissors(playerSelection);
//     console.log(result);
//     if (result.includes('win')) winnerTrack++;
//     if (result.includes('lose')) winnerTrack--;
//   }
//   if (winnerTrack == 0) return 'The PC is your equal!';
//   if (winnerTrack > 0) return 'The PC is no match for your wit!';
//   if (winnerTrack < 0) return 'You bring shame to the human race!';
// }
