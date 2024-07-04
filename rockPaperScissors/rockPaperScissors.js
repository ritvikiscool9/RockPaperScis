    let humanScore = 0;
    let computerScore = 0;

    const container = document.querySelector("#container");
    const content = document.createElement("div");
    const btns = document.querySelectorAll("button");
    const humanScorePara = document.createElement("p");
    const computerScorePara = document.createElement("p");
    const humanSelection = document.createElement("p");
    const computerSelection = document.createElement("p");
    const winner = document.createElement("h4");
    const winnerAnncouement = document.createElement("h3");



    function getComputerChoice(){
        let choice = (Math.random()*4)
        
        if(choice >= 0 && choice < 1){
            return "Rock";
        }else if(choice >= 1 && choice < 2){
            return "Paper";
        }else{
            return "Scissors";
        }
    }

    function playRound(humanChoice, computerPick){
        humanChoice = humanChoice.toLowerCase();
        computerPick = computerPick.toLowerCase();
        
        if(humanChoice === computerPick){
            return "tie game"
        }else if(humanChoice === "rock" && computerPick === "scissors") {
            humanScore++;
            return "human!"
        }else if(humanChoice === "paper" && computerPick === "rock") {
            humanScore++;
            return "human!"
        }else if(humanChoice === "scissors" && computerPick === "paper") {
            humanScore++;
            return "human!"
        }else{
            computerScore++;
            return "computer!"
        }
    }

    function annouceWinner(winner){
        winnerAnncouement.textContent = `${winner} wins the game!`;
        content.append(winnerAnncouement);
    }

    function resetGame(){
        humanScore = 0;
        computerScore = 0;

        humanSelection.textContent = '';
        winner.textContent = '';
        humanScorePara.textContent = 'Human score is 0';
        computerScorePara.textContent = 'Computer score is 0';
        winnerAnncouement.textContent = '';
    }
    

    function playGame(playerSelection){
        const computerChoice = getComputerChoice();
       
        
        computerSelection.textContent = "Computer picked: " + computerChoice;
        content.append(computerSelection);
        humanSelection.textContent = "Human picked: " + playerSelection;
        content.append(humanSelection);

    
        const roundWinner = playRound(playerSelection,computerChoice);

        winner.textContent = "The winner is: " + roundWinner;
        content.append(winner);
        
        humanScorePara.textContent = "Human score is "+ humanScore;
        content.append(humanScorePara);

        computerScorePara.textContent = "Computer score is " + computerScore;
        content.append(computerScorePara) 

        if(humanScore == 5 || computerScore == 5){
            const winner = humanScore == 5 ? "Human" : "Computer";
            annouceWinner(winner);

            setTimeout(resetGame, 1250);

            
        }

        container.append(content);

    }

    
    function handleButtonClick(event){
        const playerSelection = event.target.textContent;
        playGame(playerSelection);
    }

    btns.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
        });


    


    
