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
  } else {
      resultDisplay.textContent = 'Computer wins!';
  }
}

