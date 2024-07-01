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



/* Initializing "currentRound" to track the current round number */
/* Setting "totalRound" to determine how many rounds will be played in total */
/* Selecting the HTML element where the current round will be displayed*/

let currentRound = 1;
const totalRound = 3; // total rounds can change with each level
const roundDisplay = document.getElementById('round');
const playerChoiceDisplay = document.getElementById('player-score');
const computerChoiceDisplay = document.getElementById('computer-choice');


function playRound(playerChoice){
  if(currentRound <= totalRound){
    roundDisplay.textContent = `Round: ${currentRound} of ${totalRound}`;
    currentRound++;
    console.log(`current round: ${currentRound}`);
    
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      
    if(playerChoice === computerChoice) {
            computerChoiceDisplay.textContent = `Computer's Choice:                             ${computerChoice}`;
              playerChoiceDisplay.textContent = `Player's choice:                             ${playerChoice}`;
    }
          
 else if (
        (playerChoice === 'rock' && computerChoice === 'scissors')  || 
             (playerChoice === 'paper' && computerChoice === 'rock') || 
             (playerChoice === 'scissors' && computerChoice === 'paper')
    ){
        computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
        playerChoiceDisplay.textContent = `Player's choice: ${playerChoice}`;
        roundWon++; //Increase player's round won total
        
    } else {
          computerChoiceDisplay.textContent = `Computer's Choice:                             ${computerChoice}`;
      playerChoiceDisplay.textContent = `Player's choice: ${playerChoice}`;
    }

       
           }
    } 
    console.log(`Player's Rounds Won ${roundWon} `)
    
  
  

  
