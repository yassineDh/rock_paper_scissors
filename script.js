let moves = ["rock","paper","scissors"];


function computerPlay(){
    let min = 0;
    let max = moves.length;
    let random =Math.floor(Math.random() * (max - min)) +min;

    return moves[random];
};

function playRound(playerSelection, computerSelection) {
    let playerSelectionUni = playerSelection.toLowerCase();
    let message;

    if(playerSelectionUni == computerSelection){
        message = "Its a tie";
    }else{
        switch(playerSelectionUni){
            case "rock":
                if(computerSelection == "paper"){
                    message = "You Lose! Paper beats Rock";
                }else{
                    message = "You Win! Rock beats Scissors";
                };
                break;
            case "paper":
                if(computerSelection == "scissors"){
                    message = "You Lose! Scissors beats Paper";
                }else{
                    message = "You Win! Paper beats Rock";
                };
                break;
            case "scissors":
                if(computerSelection == "rock"){
                    message = "You Lose! Rock beats Scissors";
                }else{
                    message = "You Win! Scissors beats Paper";
                };
                break;
        }
    }
    return message;
};
