let moves = ["rock","paper","scissors"];


function computerPlay(){
    let min = 0;
    let max = moves.length();
    let random =Math.floor(Math.random() * (max - min)) +min;

    return moves[random];
};

function playRound(playerSelection, computerSelection) {
    let playerSelectionUni = playerSelection.toLowerCase();
    let message;

    if(playerSelection == computerSelection){
        message = "Its a tie";
    }else{
        
    }

}
