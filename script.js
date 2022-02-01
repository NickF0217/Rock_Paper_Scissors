console.log('Discipline equals freedom');

//let select = document.querySelector('select');
//let para = document.querySelector('p');

function computerPlay() {
    let compRandom = Math.random();
    let compMove;
    if (compRandom < 0.33) {
        compMove = "Rock";
    } else if (compRandom > 0.67) {
        compMove = "Paper";
    } else {
        compMove = "Scissors";
    }
    return compMove;
}


function playRound(playerSelection, compSelection) {
    let result;
    switch (playerSelection) {
        case 'Rock':
            switch (compSelection) {
                case 'Rock': 
                    result = "tie";
                    break;
                case 'Scissors':
                    result = "You win, rock beats scissors.";
                    break;
                case 'Paper':
                    result = "You lose, paper beats rock.";
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
                    result = "You win, scissors beats paper.";
                    break;
                case 'Rock':
                    result = "You lose, rock beats scissors.";
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
                    result = "You win, paper beats rock.";
                    break;
                case 'Scissors':
                    result = "You lose, scissors beats paper.";
                    break;
                default:
                    result = "error";
            }
            break;
    }
    //para.textContent = result;
    return result;
} 


let compSelection = computerPlay();
//let playerSelection = select;
//select.addEventListener('change', playRound(playerSelection, compSelection)); 
let playerSelection = "Scissors";

console.log(playRound(playerSelection, compSelection));

let roundWin = playRound(playerSelection, compSelection);

function game() {
    /*for (let i = 0; i <= 5; i++) {
        playRound(playerSelection, compSelection);
    }*/

}
//console.log(game());