
function getComputerChoice() {
    const actions = ['rock', 'paper', 'scissors']
    let computerCalc = Math.floor(Math.random() * actions.length);
    return actions[computerCalc];
    }
    
    function getUserChoice() {
        let playerChoice = prompt("Please enter rock, paper, or scissors");
        
        if (playerChoice !== null && typeof playerChoice === "string" && ["rock", "paper", "scissors"].includes(playerChoice.toLowerCase())) {
            return playerChoice.toLowerCase();
        } else {
            console.log("Please input a valid answer (rock, paper, or scissors)");
            return getUserChoice(); // Prompt again for valid input
        }
    }
    
    
        function playRound(computerChoice, userChoice) {
        if (userChoice === computerChoice) {
            return "tie";
        }
    
        else if (
            (userChoice == "rock" && computerChoice == "scissors") ||
            (userChoice == "paper" && computerChoice == "rock") ||
            (userChoice == "scissors" && computerChoice == "paper")
        ) {
            
            return "you win!";
        } else {
            
            return "you lose";
        }
    }
    
    function playGame() {
        let userScore = 0;
        let computerScore = 0;
       const gameLimit = 6;
    
        for (let i = 1; i < gameLimit; i++) {
            let result = playRound(getComputerChoice(), getUserChoice());
            if (result == "tie") {
                console.log("It's a tie, no points for anybody");
            } else if (result == "you win!") {
                userScore++;
                console.log("You won, another point to you");
            } else {
                computerScore++;
                console.log("You lost, another point to the computer");
            }
            console.log("User score is " + userScore);
            console.log("Computer score is " + computerScore);
            console.log("Current game is " + i);
        }
    
        if (gameLimit > 5) {
    
            if(userScore === computerScore) {
                console.log("the game is a tie!")
    
            } else if(userScore > computerScore) {
                console.log("You won, congrats!")
            } else {
                console.log("You lose, unlucky!")
            }
    
        }
    }
                
        
        
    
    
    // Call playGame to start the game
    playGame()
    