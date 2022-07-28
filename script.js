const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  // Randomly generate computer's choice
  let choicePosition = Math.floor(Math.random() * 3);
  return options[choicePosition];
}

function getPlayerChoice() {
  // Prompt the user requesting their choice
  let playerInput;
  let invalidInput = true;

  do {
    // Make sure the user enters a valid input
    playerInput = prompt("Rock, Paper or Scissors? Choose:");      
    if (!playerInput) {
      return false;
    }

    // Make sure user's input is case insensitive
    playerSelection = playerInput[0].toUpperCase() + playerInput.substring(1).toLowerCase();

    if (!(options.includes(playerSelection))) {
      alert(`${playerSelection} is not a valid input -.-`);
    } else {
      invalidInput = false;
    }

  } while (invalidInput);
  
  return playerSelection; 
}

function playRound(playerSelection, computerSelection) {
  // Compare user's vs computer's choice and determine the winner
  
  if ((playerSelection === "Paper" && computerSelection === "Rock") || 
  (playerSelection === "Rock" && computerSelection === "Scissors") || 
  (playerSelection === "Scissors" && computerSelection === "Paper")) {
    alert(`You win! ${playerSelection} beats ${computerSelection}.`)
    return "player";
  
  } else if ((computerSelection === "Paper" && playerSelection === "Rock") ||
  (computerSelection === "Rock" && playerSelection === "Scissors") || 
  (computerSelection === "Scissors" && playerSelection === "Paper")) {
    alert(`You lose! ${computerSelection} beats ${playerSelection}.`)
    return "computer";

  } else if (!playerSelection) {
    return "No input";
  }
    else {
    alert(`It's a tie! Both selected ${computerSelection}.`); 
  }
  
}

function game() {
  // Keep playing for 5 rounds

  let playerChoice;
  let computerChoice ;
  let playerScore = 0;
  let computerScore = 0;
  let result;
  let keepGoing = true;

  for (let i = 0; i < 5; i++) {

    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();

    result = playRound(playerChoice, computerChoice);

    if (result === "player") {
      playerScore += 1;
    } else if (result === "computer") {
      computerScore += 1;
    } else if (result === "No input") {
      alert("You didn't make any choice and broke the game.\n\nGame over.");
      keepGoing = false;
      break
    } else {
      i -= 1;
    }

    alert(`Current score\nPlayer: ${playerScore}\nComputer: ${computerScore}`);

  } 

  if(keepGoing) {
    // Declare the winner
    if (playerScore > computerScore) {
      alert("You won the game! :D");
    } else {
      alert("You lost the game :(")
    } 
  }

}

function restartGame() {
  // Restart the game or end it, based on user's choice

  let playAgainOptions = ["y", "n"];
  let playAgainInput;
  let invalidInput = true;

  do { 
    let playAgain = prompt("Do you want to play again? Y/N");

    if(!playAgain) {
      alert("You didn't make any choice and broke the game.\n\nGame over.");
      break
    } else {
      playAgainInput = playAgain.toLowerCase();
    }

    if(!playAgainOptions.includes(playAgainInput)) {
      alert(`${playAgainInput} is not a valid input -.-`);
    } else {
      invalidInput = false;
    }

    if(playAgainInput === "y") {
      game();
      invalidInput = true;
    } else {
      alert("Goodbye!");
    }

  } while(invalidInput);
}

game();
restartGame();

