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

function getHumanChoice () {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors by inputting 1, 2, or 3",  "type 1, 2, or 3")
    if (humanChoice == 1) {
        return "Rock";
    } else if (humanChoice == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getHumanChoice());