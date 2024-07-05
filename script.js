/* selecting the buttons for rock, paper, and scissors choice using their IDs*/
/* Storing these elements in variables for straightforward access within our JavaScript code*/
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
/* Selecting the element where the game's result will be displayed*/
const resultDisplay = document.getElementById('result');

/* Attaching Event listeners to each choice button */
/* Calling the playRound function with the player's choice as an argument when a button is clicked*/
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

/* Innitializing playerScore and computerScore variables to track the scores.
 Selecting the HTMl elements where the player's and computer's score will be displayed*/
let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

/* Initializing "currentRound" to track the current round number */
/* Setting "totalRound" to determine how many rounds will be played in total */
/* Selecting the HTML element where the current round will be displayed*/
let currentRound = 1;
const totalRounds = 5;
const roundDisplay = document.getElementById('round');

/* In this Function:
 Randomly generating the computer's choice.
 Comparing the player's choice with the computer's to determine the outcome
 updating the resultDisplay element to show whether the player won,lost, or drew the round*/
/* Incrementing the playerScore or computerScore based on the round's outcome*/
/* Updating the score display elements with the current scores after each round*/
/*Checking if the current round is within the total rounds allowed */
/* Updating the round information display after each round. */
/* Incrementing the "currentRound" variable to progress through the game */
/* Calling a "concludeGame" function to handle the end of the game*/
function playRound(playerChoice) {

    if (currentRound <= totalRounds) {
        // Existing playRouind Logic...
        // (Determining the winner of the round and updating scores)
        roundDisplay.textContent = `Round: ${currentRound} of ${totalRounds}`;
        currentRound++;
        console.log(` Current Round: ${currentRound}`);

        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Determines the winner and update the resultDisplay with the outcome

        if (playerChoice === computerChoice) {
            resultDisplay.textContent = 'It\'s a draw!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            resultDisplay.textContent = 'You win!';
            playerScore++; //Increase player's score by 1
            console.log(`Player's Score ${playerScore}`);
        } else {
            resultDisplay.textContent = 'Computer wins!';
            computerScore++; // Increase computer's score by 1
        }

        // update the score display
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }

    if (currentRound > totalRounds) {
        concludeGame(); // call this function when all rounds are completed
    }
}



/* Compating the final scores to determine the winner */
/* Updating the resultDisplay with the final result message*/

/* Creating a new div element to display the game's conclusion, including a final message and the final scores*/
/* Hiding the round results, choice buttons, and game info elements for a cleaner look*/
/* Providing a "Restart Game" button within this div that allows the player to start a new game*/

function concludeGame() {
    //Reference to the main game container
    const gameContainer = document.getElementById('rps-game');

    // Hide the choices to clear the game area

    const choices = document.getElementById('choices');
    const gameInfo = document.getElementById('game-info');
    const roundRes = document.getElementById('result');
    if (choices) {
        choices.style.display = 'none';
    }
    if (gameInfo) {
        gameInfo.style.display = 'none';
    }
    if (roundRes) {
        roundRes.style.display = 'none';
    }
    // Create the game conclusion element
    const gameConclusion = document.createElement('div');
    gameConclusion.setAttribute('id', 'game-conclusion');

    let finalMessage = '';
    if (playerScore > computerScore) {
        finalMessage = 'Congratualation you, won the game!';
    } else if (playerScore < computerScore) {
        finalMessage = 'Game over, the computer wins!';
    } else {
        finalMessage = 'The game ends in a draw!';
    }

    gameConclusion.innerHTML = `
    <h2> Game Over </h2>
    <p> ${finalMessage} </p>
    <p> Final Score - You: ${playerScore} | Computer: ${computerScore}</p>
    <button id="restart-btn"> Restart Game </button>`;

    // Append the conclusion to the main game container
    gameContainer.appendChild(gameConclusion);

    // Add event listener to restart the button

    document.getElementById('restart-btn').addEventListener('click', restartGame);
}

// resetting the Scores and current round to their initial values
// Updating the UI to reflect the reset state.
// Resetting the display style for the elements we hid in the "concludeGame" function
// Removing the game conclusion display from the previous game
// Making sure the choice buttons and initial game instructions are visible again
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 1;

    // Reset score and round displays

    playerScoreDisplay.textContent = 'Player Score: 0';
    computerScoreDisplay.textContent = 'Computer Score: 0';
    roundDisplay.textContent = `Round: 1 of ${totalRounds}`;

    const choices = document.getElementById('choices');
    const gameInfo = document.getElementById('game-info');
    const roundRes = document.getElementById('result');
    if (choices) {
        choices.style.display = '';
    }

    if (gameInfo) {
        gameInfo.style.display = '';
    }

    if (roundRes) {
        roundRes.style.display = '';
    }
    // Remove the game conclusion display
    const gameConclusion = document.getElementById('game-conclusion');
    if (gameConclusion) {
        gameConclusion.remove();
    }

    // Ensure the game components are visible again if they were hidden
    document.getElementById('choices').style.display = '';
    resultDisplay.textContent = 'Choose your weapon!';
}