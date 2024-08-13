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

    let resultText = "";

    // Display what the human chose
    document.getElementById('human-chose').textContent = `You chose: ${humanChoice}`;
    document.getElementById('computer-chose').textContent = `Computer chose: ${computerChoice}`;



    if (humanChoice === computerChoice){
        resultText = "It's a tie!"
    } else if ((humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")||
    (humanChoice === "scissors" && computerChoice === "rock"))
    {
        computerScore += 1;
        resultText = `You lose! ${computerChoice} beats ${humanChoice}.`
    } else {
        humanScore +=1;
        resultText = `You win! ${humanChoice} beats ${computerChoice}.`
    }

    document.getElementById('round-result').textContent = resultText;
    document.getElementById('scoreboard').textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    // Check if someone won the game
    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

function declareWinner() {
    const gameWinnerText = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
    document.getElementById('game-winner').textContent = gameWinnerText;

    // Disable buttons after game is won
    document.querySelectorAll('button').forEach(button => {
        button.disabled = true;
    });
}

function playGame(){

    const rockBtn = document.getElementById("rock-btn");
    const paperBtn = document.getElementById("paper-btn");
    const scissorsBtn = document.getElementById("scissors-btn");

    rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

}



playGame();


