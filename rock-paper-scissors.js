console.log("Javascript file successfully linked")

function getRandomInt (max) {
    return Math.floor(Math.random() * max);
}
let num = getRandomInt(3);

function getComputerChoice () {
    if (num == 0) {
        return "Rock";
    } else if (num == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice());

const humanChoice = prompt("Choose Rock, Paper, or Scissors by inputting 1, 2, or 3",  "type 1, 2, or 3")

function getHumanChoice () {
    if (humanChoice == 1) {
        return "Rock";
    } else if (humanChoice == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getHumanChoice());

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Logic for Rock as human choice
    if (humanChoice == 1 && computerChoice == 0) {
        console.log("Draw! Rock ties with Rock");
    } else if (humanChoice == 1 && computerChoice == 1) {
        computerScore++
        console.log("You lose! Paper beats Rock");
    } else if (humanChoice == 1 && computerChoice == 2) {
        console.log("You win! Rock beats Scissors");  
    }
    // Logic for Paper as human choice
    else if (humanChoice == 2 && computerChoice == 0) {
        console.log("You win! Paper beats Rock");
    } else if (humanChoice == 2 && computerChoice == 1) {
        console.log("Draw! Paper ties with Paper");
    } else if (humanChoice == 2 && computerChoice == 2) {
        console.log("You lose! Scissors beats Paper");
    } 
    // Logic for Scissors as human choice
    else if (humanChoice == 3 && computerChoice == 0) {
        console.log("You lose! Rock beats Scissors");
    } else if (humanChoice == 3 && computerChoice == 1) {
        console.log("You win! Scissors beats Paper");
    } else if (humanChoice == 2 && computerChoice == 0) {
        console.log("Draw! Scissors ties with Scissors");
    }    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);