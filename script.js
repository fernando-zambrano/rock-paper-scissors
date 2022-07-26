// Randomly generate computer's choice
// Prompt the user requesting their choice
// Make sure user's input is case insensitive
// Compare user's vs computer's choice and determine the winner
// Keep playing for 5 rounds
// Declare the winner
// Ask user whether they want to restart the game
// Restart the game or end it, based on user's choice

const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let choicePosition = Math.floor(Math.random() * 3);
  return options[choicePosition];
}

function getPlayerChoice() {
  let playerInput;
  let invalidInput = true;

  do {
    // Make sure the user enters a valid input
    playerInput = prompt("Rock, Paper or Scissors? Choose:");      
    if (!playerInput) {
      return false;
    }

    playerSelection = playerInput[0].toUpperCase() + playerInput.substring(1).toLowerCase();

    if (!(options.includes(playerSelection))) {
      alert(`${playerSelection} is not a valid input -.-`);
    } else {
      invalidInput = false;
    }

  } while (invalidInput)
  
  return playerSelection; 
}

function playRound(playerSelection, computerSelection) {
  
  if ((playerSelection === "Paper" && computerSelection === "Rock") || 
  (playerSelection === "Rock" && computerSelection === "Scissors") || 
  (playerSelection === "Scissors" && computerSelection === "Paper")) {
    return (`You win! ${playerSelection} beats ${computerSelection}.`)
  
  } else if ((computerSelection === "Paper" && playerSelection === "Rock") ||
  (computerSelection === "Rock" && playerSelection === "Scissors") || 
  (computerSelection === "Scissors" && playerSelection === "Paper")) {
    return (`You lose! ${computerSelection} beats ${playerSelection}.`)

  } else {
    return (`It's a tie! Both selected ${computerSelection}.`); 
  }
}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

if (!playerChoice) {
  alert("You didn't make any choice. Game over.")
} else {
  console.log(playRound(playerChoice, computerChoice));
}

