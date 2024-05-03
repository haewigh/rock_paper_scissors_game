let humanScore = 0;
let computerScore = 0;

//COMPUTER CHOICE
function getComputerChoice(){
    let options = ['scissors', 'rock', 'paper'];
    const computerchoice = options[Math.floor(Math.random()*3)];
    return computerchoice;
}

// HUMAN CHOICE
function getHumanChoice(){
    const humanchoice = (prompt('ROCK, PAPER OR SCISSORS:')).toLowerCase();
    return humanchoice;
}


function playRound(humanchoice, computerchoice){
    if (humanchoice == computerchoice) {
        console.log(`DRAW, YOU BOTH SHOWED ${computerchoice}`)
    }
    else if (humanchoice=='scissors' && computerchoice=='rock'){
        console.log(`COMPUTER WON, ${computerchoice} crushes ${humanchoice}`);
        computerScore++;
    }
    else if (humanchoice=='rock' && computerchoice=='scissors'){
        console.log(`YOU WON, ${humanchoice} crushes ${computerchoice}`)
        humanScore++;
    }
    else if (humanchoice=='paper' && computerchoice=='scissors'){
        console.log(`COMPUTER WON, ${computerchoice} cuts ${humanchoice}`);
        computerScore++;
    }
    else if (humanchoice=='scissors' && computerchoice=='paper'){
        console.log(`YOU WON, ${humanchoice} cuts ${computerchoice}`)
        humanScore++;
    }
    else if (humanchoice=='rock' && computerchoice=='paper'){
        console.log(`COMPUTER WON, ${computerchoice} wrap ${humanchoice}`)
        computerScore++;
    }
    else{
        console.log(`YOU WON, ${humanchoice} wrap ${computerchoice}`)
        humanScore++;
    }
}


function playGame(){
    for (let i = 0; i < 5; i++){
        computerchoice = getComputerChoice();
        humanchoice = getHumanChoice();
        playRound(humanchoice, computerchoice);
    }
    if (computerScore == humanScore){
        console.log(`WOW! ${computerScore} -- ${humanScore} DRAW`)
    }
    else if (computerScore > humanScore){
        console.log(`YOU LOST, COMPUTER WON ${computerScore} -- ${humanScore}`)
    }
    else{
        console.log(`YOU WON, CONGRATS! ${humanScore} -- ${computerScore}`)
    }
}

playGame()