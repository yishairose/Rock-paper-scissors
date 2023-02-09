let options = ['rock', 'paper', 'scissors']; //Create array for options
function gameRound(computerSelection, playerSelection){     
let winner
let message
    if (playerSelection === computerSelection ){
        message = 'Draw! No winner'; 
        }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        message = 'You loose! Paper beats Rock';
        winner = 'comp';                                                            
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        message = 'You loose! Scissors beats Paper';
        winner = 'comp';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        message = 'You loose! Rock beats Scissors';
        winner = 'comp';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        message = 'Yay!! You Win. Scissors beats paper';
        winner = 'player';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        message = 'Yay!! You Win. Rock beats Scissors';
        winner = 'player';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        message = 'Yay!! You Win. Paper beats Rock';
        winner = 'player';
    }
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(message)
    return winner           //Return winner to calculate score
}


function game(){
    let compScore = 0;
    let playerScore = 0;
    
    
    
for(let i = 0; i < 5; i++){
    let computerSelection = options[Math.floor(Math.random()*3)];
    let playerSelection = prompt('Enter Selection:').toLowerCase() //case insensitive input
    let roundWinner = gameRound(computerSelection, playerSelection)
    if (roundWinner === 'comp'){compScore++}
    else if (roundWinner === 'player'){playerScore++}
    
    
}
console.log('Computer Scored:' + '' + compScore);
console.log('Player Scored:' + '' + playerScore);
}
game()