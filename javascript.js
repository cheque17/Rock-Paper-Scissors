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
    playerSelection.toLowerCase;

}