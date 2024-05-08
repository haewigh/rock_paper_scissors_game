let humanScore = 0;
let computerScore = 0;
let count = 0;

const buttons = document.querySelectorAll('button');

// HUMAN CHOICE
function handleClick(event){
    const humanchoice = event.target.id;
    playRound(humanchoice);
    count++
    if (count == 5){
        playGame()
    }
}

buttons.forEach(button=> {
    button.addEventListener('click', handleClick);
});

function playRound(humanchoice){
    let options = ['scissors', 'rock', 'paper'];
    const computerchoice = options[Math.floor(Math.random()*3)];
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