
function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber < 0.33){
        return 'rock'
    }else if(randomNumber <0.66){
        return 'paper'
    }else{
        return 'scissors'
    }
}

let playerCount = 0;
let computerCount = 0;

const para = document.createElement("p")
const div = document.querySelector("#part")
const count = document.getElementById("heading")

function gameRound(playerSelection){
    let computerSelection = getComputerChoice()
    
    function win(computerSelection){
        para.textContent = `You win! ${playerSelection}  beats ${computerSelection}`
        div.appendChild(para)
        playerCount++
        updateCountDisplay()}

    function lose(computerSelection){
        para.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        div.appendChild(para)
        computerCount++
        updateCountDisplay()}
    
    
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return lose(computerSelection)
        }else if(computerSelection === 'scissors'){
            return win(computerSelection)
        }else{
            return gameRound(playerSelection);
        }
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            return lose(computerSelection)
        }else if(computerSelection === 'rock'){
            return win(computerSelection)
        }else{
            return gameRound(playerSelection);
        }
    }else{
        if(computerSelection === 'rock'){
            return  lose(computerSelection)
        }else if(computerSelection === 'paper'){
            return win(computerSelection)
        }else{
           return gameRound(playerSelection);
        }
    }
}
function updateCountDisplay() {
    count.textContent = `Player ${playerCount} and Computer:${computerCount}`;
    if(playerCount === 5){
        para.textContent = "The player wins!"
        count.appendChild(para)
    }else if(computerCount === 5){
        para.textContent = "The computer wins!"
        count.appendChild(para)
    }
}


const buttonRock = document.getElementById("rock")
const buttonPaper = document.getElementById("paper")
const buttonScissors = document.getElementById("scissors")

buttonRock.addEventListener("click",() =>{ 
                                if(playerCount < 5 && computerCount  < 5 ){ 
                                    gameRound("rock")}})
buttonPaper.addEventListener("click",() =>{if(playerCount < 5 && computerCount  < 5)
                                            {gameRound("paper")}})
buttonScissors.addEventListener("click",() =>{if(playerCount < 5 && computerCount  < 5){gameRound("scissors")}})



