const choices = ['rock', 'paper', 'scissors'];
let winCount = 0;
let lossCount = 0;
let tieCount = 0;

function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  return computerChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt('Choose Your Weapon.'); //.toLowerCase();
  while (playerChoice === null || playerChoice === ' ' || playerChoice === '') {
    alert('Please type rock, paper, or scissors.');
    playerChoice = prompt('Choose Your Weapon.'); //.toLowerCase();
  }

  console.log(playerChoice.toLowerCase());
  return playerChoice.toLowerCase();
}
function playRound() {
  let player = getPlayerChoice();
  let computer = getComputerChoice();

  const winMessage = `*You win! ${player} beats ${computer}!*`;
  const lossMessage = `*You lose! ${computer} beats ${player}!*`;

  if (
    (player === 'rock' && computer === 'rock') ||
    (player === 'paper' && computer === 'paper') ||
    (player === 'scissors' && computer === 'scissors')
  ) {
    tieCount++;
    console.log('*Tie Game!*');
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    winCount++;
    console.log(winMessage);
  } else {
    console.log(lossMessage);
    lossCount++;
  }
  console.log(`Wins ${winCount}`);
  console.log(`Ties ${tieCount}`);
  console.log(`Losses ${lossCount}`);
}

function game() {
  for (let matches = 0; matches <= 4; matches++) {
    playRound();

    if (matches === 4 && winCount > lossCount) {
      console.log('*YOU HAVE WON THE GAME!*');
    } else if (matches === 4 && lossCount > winCount) {
      console.log('*YOU HAVE LOST THE GAME!*');
    } else if (matches === 4 && tieCount == 5) console.log('*TIE?!?!?!?!?!?!*');
  }
}

game();
