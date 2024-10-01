console.log("Javascript file successfully linked")

function getRandomInt () {
    return Math.floor(Math.random() * 100);
}
let num = getRandomInt();

function getComputerChoice () {
    if (num <= 33) {
        console.log("Rock");
    } else if (num >= 34 && num <= 66) {
        console.log("Paper");
    } else if (num >= 67) {
        console.log("Scissors");
    }
}

let cpuChoice = getComputerChoice();

function getHumanChoice () {
    prompt("Choose Rock, Paper, or Scissors by inputting 1, 2, or 3", "type 1, 2, or 3")
}
