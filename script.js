let playerScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;

const choices = document.querySelector("#choices");
const scores = document.querySelector("#scores");
const results = document.querySelector("#results");

const buttons = document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener("click", e=>playRound(e.target.id)));

// Generate computer's random choice.
function computerPlay() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// Play a round of rock, paper, scissors.
function playRound(playerSelection, computerSelection = computerPlay()) {
    let choiceStrings = `You chose: <b>${playerSelection}</b> <br> Computer chose: <b>${computerSelection}</b><br>`
    let win = playerSelection + " beats " + computerSelection + "! You get a point!";
    let lose = computerSelection + " beats " + playerSelection + "! Computer gets a point!";

    if (playerSelection == computerSelection) {
        choices.innerHTML = choiceStrings + "You tie!"
    }
    else if (computerSelection == "Rock" && playerSelection == "Paper" ||
    computerSelection == "Paper" && playerSelection == "Scissors" ||
    computerSelection == "Scissors" && playerSelection == "Rock") {
        choices.innerHTML = choiceStrings + win;
        playerScore++;
    }
    else {
        choices.innerHTML = choiceStrings + lose;
        computerScore++;
    }
    scores.innerHTML = `Your score: <b>${playerScore}</b> <br> Computer score: <b>${computerScore}</b>`;
    if (playerScore == WINNING_SCORE) {
        endGame("win")
    }
    else if (computerScore == WINNING_SCORE) {
        endGame("lose")
    }
}

// Check if the game has ended and asks if player wants to play again.
function endGame(winner) {
    if (winner == "win") {
        results.innerHTML = "You win!<br>"
    }
    else if (winner == "lose") {
        results.innerHTML = "You lose!<br>"
    }

    buttons.forEach(button=>button.disabled = true);
    
    let resetBtn = document.createElement("button");
    resetBtn.textContent = "Play again";
    resetBtn.addEventListener("click", reset);
    document.querySelector("#results").appendChild(resetBtn);
}

// Reset variables and divs.
function reset() {
    playerScore = 0;
    computerScore = 0;
    buttons.forEach(button=>button.disabled = false);
    choices.textContent = "";
    scores.textContent = "";
    results.textContent = "";
}