let choices = ["Rock", "Paper", "Scissors"];
let gameStats = {wins: 0, losses: 0, ties: 0};
let player = {choice: null};

let computerChoiceEl = document.getElementById("computer-choice")
let playerChoiceEl = document.getElementById("player-choice")

function playRock() {
    player.choice = "Rock"
    playGame()
}

function playPaper() {
    player.choice = "Paper"
    playGame()
}

function playScissors() {
    player.choice = "Scissors"
    playGame()
}

function playGame() {
    let isAlive = true
    if (isAlive) {
        let computerChoice = getComputerChoice();
        computerChoiceEl.innerText =
        "Computer's Choice: " + computerChoice;
        playerChoiceEl.innerText =
        "Your Choice: " + player.choice;
        compareChoices(player.choice, computerChoice);
    }
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        gameStats.ties++;
        displayMessage("It's a tie!");
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        gameStats.wins++;
        displayMessage("You win! " + playerChoice + " beats " + computerChoice + ".");
    } else {
        gameStats.losses++;
        displayMessage("You lose! " + computerChoice + " beats " + playerChoice + ".");
    }
    updateGameStats();
}

function displayMessage(msg) {
    document.getElementById("message").innerText = msg
}

function updateGameStats() {
    document.getElementById("game-stats").innerText =
    "Wins: " +
    gameStats.wins +
    " | Ties: " +
    gameStats.ties +
    " | Losses: " +
    gameStats.losses;
}