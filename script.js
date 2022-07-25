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
  let playerChoice;
  let invalidInput = true;

  do {
    // Make sure the user enters a valid input
    playerInput = prompt("Rock, Paper or Scissors? Choose:");      
      
    if (!playerInput) {
      alert("You didn't make any choice. Game over.")

      return false;
    }

    playerSelection = playerInput[0].toUpperCase() + playerInput.substring(1).toLowerCase();

    if (!(options.includes(playerSelection))) {
      alert("That's not a valid input -.-");
    } else {
      invalidInput = false;
    }

  } while (invalidInput)
  
  return playerSelection;
  
}

function playRound(playerSelection, computerSelection) {

  if (!playerSelection) {
    return false;
  }

  console.log("The player selected " + playerSelection + " and the computer selected " + computerSelection + ".");
}

playRound(getPlayerChoice(), getComputerChoice());