/* selecting the buttons for rock, paper, and scissors choice using their IDs*/
/* Storing these elements in variables for straightforward access within our JavaScript code*/
const rockButton = document.getElementById('ROCK');
const paperButton = document.getElementById('PAPER');
const scissorsButton = document.getElementById('SCISSORS');

/* Attaching Event listeners to each choice button */
/* Calling the playRound function with the player's choice as an argument when a button is clicked*/
rockButton.addEventListener('click', () => playRound('ROCK') );
paperButton.addEventListener('click', () => playRound('PAPER') );
scissorsButton.addEventListener('click', () => playRound('SCISSORS') );

/* Innitializing playerScore and computerScore variables to track the scores.
 Selecting the HTMl elements where the player's and computer's score will be displayed*/
let roundWon = 0;
let finalMessage = '';


/* Initializing "currentRound" to track the current round number */
/* Setting "totalRound" to determine how many rounds will be played in total */
/* Selecting the HTML element where the current round will be displayed*/

let currentRound = 1;
const totalRound = 7; // total rounds can change with each level
const roundDisplay = document.getElementById('round');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const roundsWonDisplay = document.getElementById('rounds-won');
const finalMessageDisplay = document.getElementById('final-message')

// determines what counts as a point to the player
// then after each round the round counter goes up, and the COmputer and player's choice is displayed and the amount of player victories is also displayed
function playRound(playerChoice){
  if(currentRound <= totalRound){
    roundDisplay.textContent = `Round: ${currentRound} of ${totalRound}`;
    
    console.log(`current round: ${currentRound}`);
    
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      
    if(playerChoice === computerChoice) {
            computerChoiceDisplay.textContent = `Computer's Choice:${computerChoice}`;
              playerChoiceDisplay.textContent = `Player's choice: ${playerChoice}`;
              }
          
     else if (
        (playerChoice === 'ROCK' && computerChoice === 'SCISSORS')  || 
             (playerChoice === 'PAPER' && computerChoice === 'ROCK') || 
             (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')
          ){
        computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
        playerChoiceDisplay.textContent = `Player's choice: ${playerChoice}`;
        roundsWonDisplay.textContent = `Rounds Won: ${roundWon}`;
          roundWon++; //Increase player's round won total
       roundsWonDisplay.textContent = `Rounds Won: ${roundWon}`;
       currentRound++;
     } 
        else {
          computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
          playerChoiceDisplay.textContent = `Player's choice: ${playerChoice}`;
          roundsWonDisplay.textContent = `Rounds Won: ${roundWon}`;
          currentRound++;
          // finalMessage = `Congratulations, you won ${roundWon} out of ${totalRound} so you can move one`;
          // finalMessageDisplay.textContent = `${finalMessage} `;
          console.log(`Player's Rounds Won ${roundWon} `)
 }
       
    if(roundWon >= 1){
      finalMessage = `Congratulations, you won at ${roundWon} out of ${totalRound} so you can move one`;
      finalMessageDisplay.textContent = `${finalMessage} `;
      buttonfunction();

      } else {
      finalMessage = `Try Again `;
      // RestartFunction();
  }
  
    
  
    
  } 
  
  // if rounds won is greater than 1 then activate message and moveButton()
  // else if activate message and restartButton
    } 
    
function buttonfunction(){
  document.getElementById("button-appear").innerHTML = '<a href = "secondlevel.html"> <button> Move on </button> </a>'
}  

function restartGame(){
  currentRound = 1;
  roundWon = 0;
  
}
  

  
