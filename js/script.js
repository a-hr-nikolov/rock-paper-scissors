// function getComputerChoice() {
//   return Math.floor(Math.random() * 3) + 1;
// }

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
console.log(
  '🚀 ~ file: script.js:6 ~ getComputerChoice ~ getComputerChoice():',
  getComputerChoice()
);

// function roundRockPaperScissors(playerSelection, computerSelection) {
//   let computerChoice = "";
//   switch (computerSelection) {
//     case 1:
//   }
// }
