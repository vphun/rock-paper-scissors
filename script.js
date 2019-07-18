let playerScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;

const playerChoicehtml = document.querySelector("#player-choice");
const computerChoicehtml = document.querySelector("#computer-choice");

const playerScorehtml = document.querySelector("#player-score");
const computerScorehtml = document.querySelector("#computer-score");

const gameWinner = document.querySelector("#game-winner");
const scoreWinner = document.querySelector("#score-winner");

function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    playerChoicehtml.textContent = "You chose: " + playerSelection;
    computerChoicehtml.textContent = "Computer chose: " + computerSelection;

    let win = playerSelection + " beats " + computerSelection + "! You get a point!";
    let lose = computerSelection + " beats " + playerSelection + "! Computer gets a point!";

    if (playerSelection == computerSelection) {
    console.log("You tie!");
    gameWinner.textContent = "You tie!";
    return "tie";
    }
    else if (computerSelection == "Rock" && playerSelection == "Paper" ||
    computerSelection == "Paper" && playerSelection == "Scissors" ||
    computerSelection == "Scissors" && playerSelection == "Rock") {
        console.log(win);
        gameWinner.textContent = win;
        return "win";
    }
    else {
        console.log(lose);
        gameWinner.textContent = lose;
        return "lose";
    }
}

function game(playerChoice) {
    if (playerScore == WINNING_SCORE) {
        scoreWinner.textContent = "You win!"
    }
    else if (computerScore == WINNING_SCORE) {
        scoreWinner.textContent = "You lose!"
    }
    
    let result = playRound(playerChoice);
    if (result == "win") {
    playerScore++;
    playerScorehtml.textContent = "Your score: " + playerScore;
    return;
    }
    else if (result == "lose") {
    computerScore++;
    computerScorehtml.textContent = "Computer score: " + computerScore; 
    return;
    }
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener("click", e=>game(e.target.id)));
