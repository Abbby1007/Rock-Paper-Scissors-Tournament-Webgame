/* selecting the buttons for rock, paper, and scissors choice using their IDs*/
/* Storing these elements in variables for straightforward access within our JavaScript code*/
const rockButton = document.getElementById('Rock');
const paperButton = document.getElementByID('Paper');
const scissorsButton = document.getElementById('Scissors');
/* Selecting the element where the game's result will be displayed*/
const resultDisplay = document.getElementById('result');
/* Attaching Even listeners to each choice button */
/* Calling the playRound function with the player's choice as an argument when a button is clicked*/
rockButton.addEventListener('click', () => playRound('Rock'));
paperButton.addEventListener('click', () => playRound('Paper'));
scissorsButton.addEventListener('click', () => playRound('Scissors'));

