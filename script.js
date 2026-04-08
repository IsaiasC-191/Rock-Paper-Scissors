function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    const computerChoice = ["rock", "paper", "scissors"]
    return computerChoice[random];
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors", "Rock");
    return choice;
}


function playRound(computerChoice, playerChoice) {
    let playerInput = playerChoice.toLowerCase();

    if (computerChoice === playerInput) {
        console.log("Draw! Nobody wins this round.");
    }

    if (computerChoice === "paper" && playerInput === "rock") {
        console.log("You Lose! Paper Beats Rock.")
        computerScore += 1;
    } else if (computerChoice === "scissors" && playerInput === "rock") {
        console.log("You Win! Rock Beats Scissors.");
        humanScore += 1;
    } else if (computerChoice === "paper" && playerInput === "scissors") {
        console.log("You Win! Scissors Beats Paper.");
        humanScored += 1;
    } else if (computerChoice === "rock" && playerInput === "scissors") {
        console.log("You Lose! Rock Beats Scissors")
        computerScore += 1;
    } else if (computerChoice === "scissors" && playerInput === "paper") {
        console.log("You Lose! Scissors Beats Paper.");
        computerScore += 1;
    } else if (computerChoice === "rock" && playerInput === "paper") {
        console.log("You Win! Paper Beats Rock.");
        humanScore += 1;
    }
}

function checkWinner() {
    if (computerScore === 5) {
        alert("Computer Wins!");
        return;
    }

    if (humanScore === 5) {
        alert("Human Wins!");
        return;
    }
    return alert(`Computer: ${computerScore} - Human: ${humanScore}`);
}


let humanScore = 0;
let computerScore = 0;

while (humanScore < 5 && computerScore < 5) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    playRound(computerChoice, playerChoice);
    checkWinner();
}