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

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
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

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter "rock", "paper" or "scissors".');
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    return ('If you want to play again then refresh the pager, please.')
}