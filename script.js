let moves = ["rock", "paper", "scissors"];


function computerPlay() {
    let min = 0;
    let max = moves.length;
    let random = Math.floor(Math.random() * (max - min)) + min;

    return moves[random];
};

function playRound(playerSelection, computerSelection) {
    let playerSelectionUni = playerSelection.toLowerCase();
    let message;
    let win;

    if (playerSelectionUni == computerSelection) {
        message = "Its a tie";
        win = 0;
    } else {
        switch (playerSelectionUni) {
            case "rock":
                if (computerSelection == "paper") {
                    message = "You Lose! Paper beats Rock";
                    win = -1;
                } else {
                    message = "You Win! Rock beats Scissors";
                    win = 1;
                };
                break;
            case "paper":
                if (computerSelection == "scissors") {
                    message = "You Lose! Scissors beats Paper";
                    win = -1;
                } else {
                    message = "You Win! Paper beats Rock";
                    win = 1;
                };
                break;
            case "scissors":
                if (computerSelection == "rock") {
                    message = "You Lose! Rock beats Scissors";
                    win = -1;
                } else {
                    message = "You Win! Scissors beats Paper";
                    win = 1;
                };
                break;
        }
    }
    return {
        "message": message,
        "win": win
    };
};

function game() {
    let humans = 0;
    let machine = 0;
    let humanMove;
    let machineMove;

    for (let i = 0; i < 5; i++) {
        machineMove = computerPlay();
        humanMove = prompt("Choose one the following rock,paper or scissors");
        let score = playRound(humanMove, machineMove)
        switch (score.win) {
            case 1:
                humans++;
                break;
            case -1:
                machine++;
                break;
        };
        console.log(score.message);
        console.log("Humans : " + humans + " | Machines : " + machine);
    };
};

game();