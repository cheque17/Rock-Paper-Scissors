function getComputerChoice() {
    let computerChoiceRock = "rock";
    let computerChoicePaper = "paper";
    let computerChoiceScissors = "scissors";

    let decisionMaker = Math.floor(Math.random() * 100);

    if (decisionMaker >= 0 && decisionMaker <= 33) {
        return computerChoiceRock;
    } else if (decisionMaker >= 34 && decisionMaker <= 66) {
        return computerChoicePaper;
    } else {
        return computerChoiceScissors;
    }


}

function playRound (playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    /*console.log(computerSelection);
    console.log(playerSelection);*/
    
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return ('You need to enter "rock", "paper", or "scissors".')
    }
    else {
        if (playerSelection === computerSelection) {
            return ('It\'s a draw')
        } else if ( playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper" ) { 
                return (`You won, ${playerSelection} beats ${computerSelection}.`)
            }
            else {
                return (`You lost, ${computerSelection} beats ${playerSelection}.`)
            }
    }
}

let userScore = 0;
let computerScore = 0;

const results = document.querySelector('#results');


const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
	results.textContent = (playRound("rock"));
    if (playRound('rock').substring(0,7) === "You won"){
        userScore += 1;
    } else if ( playRound('rock').substring(0,8) === "You lost"){
        computerScore += 1;
    } else{
        userScore+=0;
        computerScore+=0;
    }
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
	results.textContent = playRound('paper');
    if (playRound('paper').substring(0,7) === "You won"){
        userScore += 1;
    } else if ( playRound('paper').substring(0,8) === "You lost"){
        computerScore += 1;
    } else{
        userScore+=0;
        computerScore+=0;
    }
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){
	results.textContent = playRound('scissors');
    if (playRound('scissors').substring(0,7) === "You won"){
        userScore += 1;
    } else if ( playRound('scissors').substring(0,8) === "You lost"){
        computerScore += 1;
    } else{
        userScore+=0;
        computerScore+=0;
    }
})


/*const scoreEvaluation = document.querySelectorAll('button');
const goal = 5;
scoreEvaluation.addEventListener('click', function() {
    if (userScore === goal){
        results.textContent = "YOU WON!";
    } else if (computerScore === goal){
        results.textContent = "YOU LOST";
    } else{}
})*/

/*
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter "rock", "paper" or "scissors".');
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    return ('If you want to play again then refresh the pager, please.')
}
*/

