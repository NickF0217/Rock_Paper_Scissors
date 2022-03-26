console.log('Discipline equals freedom');

function computerPlay() {
    let compRandom = Math.random();
    let compMove;
    if (compRandom <= 0.335) {
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
    //playerSelection = prompt("Make your move:");
    //playerSelection = playerSelection.toLowerCase();
    compSelection = computerPlay();
    switch (playerSelection) {
        case 'rock':
            switch (compSelection) {
                case 'Rock': 
                    result = "Tie";
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
                    result = "Tie";
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
                    result = "Tie";
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
    //return result;
    //console.log(result);
    const winnerSection = document.createElement('div');
    winnerSection.textContent = result;
    results.appendChild(winnerSection);
    winLoseTieNew();
    overallNew();
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
//Second version to track differently. Inspired by another RPS project
function winLoseTieNew() {
    if (result == 'You win.') {
        win += 2;
    } else if (result == 'You lose.') {
        lose += 2;
    } else {
        win++
        lose++;
    }
    //console.log(`SCORE: ${win} to ${lose}`);
    const scoreBoard = document.createElement('div');
    scoreBoard.textContent = `SCORE: ${win} to ${lose}`;
    scoreBoard.style.marginBottom = '8px';
    results.appendChild(scoreBoard);
}

/*function game() {
    for (let i = 0; i < 5; i++) {
            playRound(playerSelection, compSelection);
            console.log(result);
            winLoseTie();
    } console.log(`You have ${win} wins, ${lose} losses, and ${tie} ties.`); 
    //alert(`You have ${win} wins, ${lose} losses, and ${tie} ties.`)
    console.log(overall());
}*/

//console.log(game());

/*function gameNew() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, compSelection);
    }
}*/

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
    //alert(victory);
}

function overallNew() {
    let victor;
    if (win >= 10) {
        victor = "You're the shit";
    } else if (lose >= 10) {
        victor = "Sucks to suck";
    } else return;
    //console.log(victor);
    const final = document.createElement('div');
    final.textContent = victor;
    final.style.fontSize = '30px';
    final.style.color = '#FFCC00'
    results.appendChild(final);
}

/* USER INTERFACE */
const chooseRock = document.querySelector('#rock');
const chooseScissors = document.querySelector('#scissors');
const choosePaper = document.querySelector('#paper');

const buttons = document.querySelectorAll('button');


chooseRock.addEventListener('click', () => {
    playerSelection = 'rock'
    //console.log(playerSelection);
    playRound(playerSelection, compSelection);
});

choosePaper.addEventListener('click', () => {
    playerSelection = 'paper'
    //console.log(playerSelection);
    playRound(playerSelection, compSelection);
});

chooseScissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    //console.log(playerSelection);
    playRound(playerSelection, compSelection);
});

