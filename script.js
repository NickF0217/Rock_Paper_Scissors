console.log('Discipline equals freedom');

function computerPlay() {
    let compRandom = Math.random();
    let compMove;
    if (compRandom < 0.33) {
        compMove = "Rock";
    } else if (compRandom > 0.665) {
        compMove = "Paper";
    } else {
        compMove = "Scissors";
    }
    return compMove;
}

let compSelection; // = computerPlay();
let playerSelection; //= prompt("Make your move:");
/*Selection variable assignments moved into playRound 
so they are decided for every round played.*/
let result; //to give access to result outside of local scope

function playRound(playerSelection, compSelection) {
    playerSelection = prompt("Make your move:");
    playerSelection = playerSelection.toLowerCase();
    compSelection = computerPlay();
    switch (playerSelection) {
        case 'rock':
            switch (compSelection) {
                case 'Rock': 
                    result = "tie";
                    break;
                case 'Scissors':
                    result = "You win.";
                    break;
                case 'Paper':
                    result = "You lose.";
                    break;
                default:
                    result = "error";
            }
            break;
        
        case 'scissors':
            switch (compSelection) {
                case 'Scissors': 
                    result = "tie";
                    break;
                case 'Paper':
                    result = "You win.";
                    break;
                case 'Rock':
                    result = "You lose.";
                    break;
                default:
                    result = "error";
            }
            break;

        case 'paper':
            switch (compSelection) {
                case 'Paper': 
                    result = "tie";
                    break;
                case 'Rock':
                    result = "You win.";
                    break;
                case 'Scissors':
                    result = "You lose.";
                    break;
                default:
                    result = "error";
            }
            break;
    }
    //para.textContent = result;
    return result;
} 

let win = 0;
let lose = 0;
let tie = 0;

function winLoseTie() {
    if (result == "You win.") {
        win++;
    } else if (result == "You lose.") {
        lose++;
    } else {
        tie++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            playRound(playerSelection, compSelection);
            console.log(result);
            winLoseTie();
        } 
    } console.log(`You have ${win} wins, ${lose} losses, and ${tie} ties.`); //alert(`You have ${win} wins, ${lose} losses, and ${tie} ties.`)
    console.log(overall());
}

console.log(game());

function overall() {
    let victory;
    if (win > lose) {
        victory = "You're the shit";
    } else if (lose > win) {
        victory = "Sucks to suck";
    } else {
        victory = "idk man"; //If the player and computer tie
    }
    return victory;
}

