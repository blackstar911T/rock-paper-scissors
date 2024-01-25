
function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber < 0.33){
        return 'Rock'
    }else if(randomNumber <0.66){
        return 'Paper'
    }else{
        return 'Scissors'
    }
}

let playerCount = 0;
let computerCount = 0;


function gameRound(){
    let playerSelection = prompt("Pick between: Rock, Paper or Scissors").toLowerCase()
    let computerSelection = getComputerChoice().toLowerCase()
    console.log(computerSelection);
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            computerCount++
            return "You lose! Paper beats Rock"
        }else if(computerSelection === 'scissors'){
            playerCount++
            return "You win! Rock beats Scissors"
        }else{
            return gameRound();
        }
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            computerCount++
            return "You lose! Scissors beats Paper"
        }else if(computerSelection === 'rock'){
            playerCount++
            return "You win! Paper beats Rock"
        }else{
            return gameRound();
        }
    }else{
        if(computerSelection === 'rock'){
            computerCount++
            return "You lose! Rock beats Scissors"
        }else if(computerSelection === 'paper'){
            playerCount++
            return "You win! Scissors beats Paper"
        }else{
           return gameRound();
        }
    }
}

function game(){
    while (playerCount < 5 && computerCount  < 5){
        console.log(gameRound());

    }

    (playerCount === 5) ? console.log("You win the overall match"): "You lose the overall match"
}

game();