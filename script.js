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

let compSelection = computerPlay();
let playerSelection; //= prompt("Make your move:");
let result; //to give access to result outside of local scope

function playRound(playerSelection, compSelection) {
    playerSelection = prompt("Make your move:");
    switch (playerSelection) {
        case 'Rock':
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
        
        case 'Scissors':
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

        case 'Paper':
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

//let playerSelection = "Scissors";

//console.log(playRound(playerSelection, compSelection));

/*function game() {
    playRound(playerSelection, compSelection);
    winLoseTie();
    playRound(playerSelection, compSelection);
    winLoseTie();
    playRound(playerSelection, compSelection);
    winLoseTie();
    playRound(playerSelection, compSelection);
    winLoseTie();
    playRound(playerSelection, compSelection);
    winLoseTie();
    return win, lose;
    //return result;
}*/

function game() {
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            playRound(playerSelection, compSelection);
            console.log(result);
            winLoseTie();
        } 
    } console.log(win, lose, tie); //alert(`You have ${win} wins, ${lose} losses, and ${tie} ties.`)
}
console.log(game());

function overall() {
    let victory;
    if (win > lose) {
        victory = "You're the shit";
    } else if (lose > win) {
        victory = "Sucks to suck";
    } else {
        victory = "idk man";
    }
    return victory;
}

