/* selecting the buttons for rock, paper, and scissors choice using their IDs*/
/* Storing these elements in variables for straightforward access within our JavaScript code*/
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
/* Selecting the element where the game's result will be displayed*/
const resultDisplay = document.getElementById('result');

/* Attaching Even listeners to each choice button */
/* Calling the playRound function with the player's choice as an argument when a button is clicked*/
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));


/* In this Function:
 Randomly generating the computer's choice.
 Comparing the player's choice with the computer's to determine the outcome
 updating the resultDisplay element to show whether the player won,lost, or drew the round*/
/* Incrementing the playerScore or computerScore based on the round's outcome*/
/* Updating the score display elements with the current scores after each round*/
function playRound(playerChoice){
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determines the winner and update the resultDisplay with the outcome

  if(playerChoice === computerChoice) {
    resultDisplay.textContent = 'It\'s a draw!';
  } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors')  || 
      (playerChoice === 'paper' && computerChoice === 'rock') || 
      (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
      resultDisplay.textContent = 'You win!';
      playerScore++; //Increase player's score by 1
  } else {
      resultDisplay.textContent = 'Computer wins!';
      computerScore++; // Increase computer's score by 1
  }

    // update the score display
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

/* Innitializing playerScore and computerScore variables to track the scores.
 Selecting the HTMl elements where the player's and computer's score will be displayed*/
let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

