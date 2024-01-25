
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


function gameRound(){
    let playerSelection = prompt("Pick between: Rock, Paper or Scissors").toLowerCase()
    let computerSelection = getComputerChoice().toLowerCase()

    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return "You lose! Paper beats Rock"
        }else if(computerSelection === 'scissors'){
            return "You win! Rock beats Scissors"
        }else{
            gameRound();
        }
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            return "You lose! Scissors beats Paper"
        }else if(computerSelection === 'rock'){
            return "You win! Paper beats Rock"
        }else{
            gameRound();
        }
    }else{
        if(computerSelection === 'rock'){
            return "You lose! Rock beats Scissors"
        }else if(computerSelection === 'paper'){
            return "You win! ScissorPAPERs beats Paper"
        }else{
            gameRound();
        }
    }
}

console.log(gameRound())