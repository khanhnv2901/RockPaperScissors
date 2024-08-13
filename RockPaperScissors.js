let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

// Get machine choice by random returning: rock, paper, scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length);

    return choices[choice];
}

// Get human choice by input
function getHumanChoice() {
    let userInput = prompt("What's your choice (rock, paper, scissors): ").toLowerCase();
    while(!["rock", "paper", "scissors"].includes(userInput)) {
        choice = prompt("Invalid choice. Please enter rock, paper or scissors: ").toLowerCase();
    }
    return userInput;
}

// play a single round
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "It's a tie!"
    }
    
    if ((humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")||
    (humanChoice === "scissors" && computerChoice === "rock"))
    {
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${humanChoice}.`
    } else {
        humanScore +=1;
        return `You win! ${humanChoice} beats ${computerChoice}.`
    }
}

function playGame(roundNumber){
    for(let i = 0; i < roundNumber; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("You chose: ", humanSelection);
        console.log("Computer chose: ", computerSelection);
        console.log(playRound(humanSelection, computerSelection));
    }

    console.log(`Final Results: Human ${humanScore} | Computer ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame(5);





