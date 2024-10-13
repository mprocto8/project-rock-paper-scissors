console.log("Javascript file successfully linked")

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
console.log(getComputerChoice());

function getHumanChoice() {
    const humanChoice = prompt("Enter Rock, Paper, or Scissors",  "Rock, Paper, or Scissors");
    return humanChoice.toLowerCase();
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0; 


function playRound(humanChoice, computerChoice) {
    //Normalize inputs
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Decide winner
    if (humanChoice === computerChoice) {
        console.log(`Tie! Both participants selected ${humanChoice}.`);
    } else if (
    // Human wins
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else if (
        //Computer wins
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'scissors' && computerChoice === 'rock') ||
        (humanChoice === 'paper' && computerChoice === 'scissors')
    ) { 
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++; 
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);