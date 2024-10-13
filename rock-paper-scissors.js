console.log("Javascript file successfully linked")

function getComputerChoice () {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
console.log(getComputerChoice());

function getHumanChoice () {
    let humanChoice = prompt("Enter Rock, Paper, or Scissors",  "Rock, Paper, or Scissors");
    return(humanChoice);    
    }

console.log(getHumanChoice());

   let humanScore = 0;
   let computerScore = 0; 


function playRound(humanChoice, computerChoice) {
    //Normalize inputs
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    // Logic for Rock as human choice
    if (humanChoice == "1" && computerChoice == 0) {
        console.log("Draw! Rock ties with Rock");
    } else if (humanChoice == 1 && computerChoice == 1) {
        gameScore.computerScore++;
        console.log("You lose! Paper beats Rock");
    } else if (humanChoice == 1 && computerChoice == 2) {
        gameScore.humanScore++;
        console.log("You win! Rock beats Scissors");  
    }
    // Logic for Paper as human choice
    else if (humanChoice == 2 && computerChoice == 0) {
        gameScore.humanScore++;
        console.log("You win! Paper beats Rock");
    } else if (humanChoice == 2 && computerChoice == 1) {
        console.log("Draw! Paper ties with Paper");
    } else if (humanChoice == 2 && computerChoice == 2) {
        gameScore.computerScore++;
        console.log("You lose! Scissors beats Paper");
    } 
    // Logic for Scissors as human choice
    else if (humanChoice == 3 && computerChoice == 0) {
        gameScore.computerScore++;
        console.log("You lose! Rock beats Scissors");
    } else if (humanChoice == 3 && computerChoice == 1) {
        gameScore.humanScore++;
        console.log("You win! Scissors beats Paper");
    } else if (humanChoice == 2 && computerChoice == 0) {
        console.log("Draw! Scissors ties with Scissors");
    }    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);