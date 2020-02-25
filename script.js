let moves = ["rock", "paper", "scissors"];
let handElt = document.getElementById("hand");
let rockElt = document.getElementById("rock");
let scissorsElt = document.getElementById("scissor");
let humanScore = document.getElementById("humanScore");
let machineScore = document.getElementById("machineScore");

handElt.addEventListener("click", () => { });

function computerPlay() {
    let min = 0;
    let max = moves.length;
    let random = Math.floor(Math.random() * (max - min)) + min;

    return moves[random];
};

function humanPlay() {
    return new Promise((resolve, reject) => {
        let move;
        handElt.addEventListener("click", () => {
            move = "paper";
            resolve(move)
        });
        rockElt.addEventListener("click", () => {
            move = "rock";
            resolve(move)
        });
        scissorsElt.addEventListener("click", () => {
            move = "scissors";
            resolve(move)
        });
    })
};

function playRound(playerSelection, computerSelection) {
    let message;
    let win;

    if (playerSelection == computerSelection) {
        message = "Its a tie";
        win = 0;
    } else {
        switch (playerSelection) {
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

async function game() {
    let humans = 0;
    let machine = 0;
    let humanMove;
    let machineMove;
    let nodeHuman = document.createTextNode(humans);
    let nodeMachine = document.createTextNode(machine);

    while (humans < 5 && machine < 5) {
        machineMove = computerPlay();
        humanMove = await humanPlay();
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

        humanScore.appendChild(nodeHuman);
        machineScore.appendChild(nodeMachine);

    };


};

game();