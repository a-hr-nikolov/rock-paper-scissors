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
  let playerChoice = event.target.innerText.toLowerCase();
  let result;
  if (playerChoice === computerChoice) {
    result = "It's a DRAW!";
    return (document.querySelector('#result').textContent = result);
  } else
    switch (playerChoice) {
      case 'rock':
        if (computerChoice === 'paper') result = 'You lose! Paper beats Rock!';
        if (computerChoice === 'scissors')
          result = 'You win! Rock beats Scissors!';
        break;
      case 'paper':
        if (computerChoice === 'rock') result = 'You win! Paper beats Rock!';
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
  return (document.querySelector('#result').textContent = result);
}

function keepScore() {}

const buttonsRPS = document.querySelectorAll('.choice');
buttonsRPS.forEach(button =>
  button.addEventListener('click', playRockPaperScissors)
);

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
