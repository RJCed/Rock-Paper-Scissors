let humanScore = 0;
let computerScore = 0;
let rounds = 1; //In this case rounds means Winning Score


//Get Computer Choice
const getComputerChoice = function(){
    // randomGen VARIABLE generate number between 0 - 0.999...
    const randomGen = Math.random()
    
    // Assign each random number from 0 - 0.999... to rock, paper, or scissors
    // This separates them into region as follows:
    // Region 1/3 (0.333...) below RETURN "scissors"
    // Region 2/3 (0.666...) below (until 1/3) RETURN "paper"
    // Region 1 and below (until 2/3) RETURN "rock"
    // ELSE RETURN "getComputerChoice error"

    if (randomGen < 1 / 3){ 
        return "scissors";
    } else if (randomGen < 2 / 3){
        return "paper";
    } else if (randomGen < 1){
        return "rock";
    } else {
        return "getComputerChoice error";
    }   
}

// Change the Display of 'User' or 'Computer' choices on 'upper'
const changeChoiceDisplay = function(humanChoice, computerChoice){
    let humanDisplay = document.querySelector("#humanChoice");
    let computerDisplay = document.querySelector("#computerChoice");

    // For humanChoice
    switch (humanChoice) {
        case "paper":
            humanDisplay.textContent = "🫱";
            break;
        case "scissors":
            humanDisplay.textContent = "✌️";
            break;
        default:
            humanDisplay.textContent = "🤜";
    }

    //for computerChoice
    switch (computerChoice) {
        case "paper":
            computerDisplay.textContent = "🫲";
            break;
        case "scissors":
            computerDisplay.textContent = "✌️";
            break;
        default:
            computerDisplay.textContent = "🤛";
    }
}

//Change the center texts in upper
const changeResultDisplay = function(result, humanScore, computerScore){
    const upperResultText = document.querySelector("#upperResultText")
    const lowerResultText = document.querySelector("#lowerResultText")
    
    //change the upperResultText to the result. Default - "Rock Paper Scissors"
    upperResultText.textContent = result;
    
    //change the lowerResultText to the current score/
    lowerResultText.textContent = 'You: ' + humanScore + " Computer: " + computerScore;
}

//Logic for each Round (also run the function changeResultDisplay)
const playRound = function(humanChoice, computerChoice){
    
    if (humanChoice === "rock" && computerChoice === "scissors"){ // FOR HUMAN ROCK
        humanScore = humanScore + 1;
        changeResultDisplay("You Win! Rock\nBeats Scissors", humanScore, computerScore)
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore = computerScore + 1;
        changeResultDisplay("You Lose! Paper\nBeats Rock", humanScore, computerScore);


    }
    
    if (humanChoice === "paper" && computerChoice === "rock"){ // FOR HUMAN PAPER
        humanScore = humanScore + 1;
        changeResultDisplay("You Win! Paper\nBeats Rock", humanScore, computerScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore = computerScore + 1;
        changeResultDisplay("You Lose! Scissors\nBeats Paper", humanScore, computerScore);


    }
    
    if (humanChoice === "scissors" && computerChoice === "paper"){ // FOR HUMAN SCISSORS
        humanScore = humanScore + 1;
        changeResultDisplay("You Win! Scissors\nBeats Paper", humanScore, computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore = computerScore + 1;
        changeResultDisplay("You Lose! Rock\nBeats Scissors", humanScore, computerScore);
    }
    
    if (humanChoice === computerChoice){
        changeResultDisplay("Same Choice\nIt's a Tie!", humanScore, computerScore);
    }

}

//blur background
const blurBackground = function(){
    const screen = document.getElementById("screen");
    screen.classList.toggle('active');
}

//reset game / for play again

const resetGame = function(){
    humanScore = 0;
    computerScore = 0;
    rounds = 1;
    changeChoiceDisplay("rock", "rock");
    changeResultDisplay("Rock Paper Scissors", humanScore, computerScore);
    inputPopup();
}

// Input for Winning Score (modal pop-up)
const inputPopup = function(){
    //Show the Dialog
    const dialog = document.querySelector("#inputRounds");
    dialog.showModal()
    // console.log("inputPopup: " + dialog.open);
    blurBackground();
    console.log("1 add")

    const submit = document.querySelector("#submitScore");
    submit.onclick = () => {

        rounds = document.querySelector("#inputScore").value;

        //Check if greater than 0
        if (Number.isInteger(Number(rounds)) && rounds > 0){
            console.log("Number of Rounds = " + rounds)
            dialog.close();
            blurBackground(); // remove blur
            console.log("2 remove")
        }
    }
}

//Outcome who is the winner (model pop-up)
const outcome = function(outcome, humanScore, computerScore){
    blurBackground();
    console.log("3 add")

    const dialog = document.querySelector("#outcome");
    dialog.showModal();

    //For the h1 (final Result)
    const result = document.querySelector("#finalResult");
    result.textContent = outcome;

    //For the h2 (final Score)
    const score = document.querySelector("#finalScore");
    score.textContent = "You: " + humanScore + " Computer: " + computerScore;

    //For Play Again

    const playAgain = document.querySelector("#playAgain");
    playAgain.onclick = () => {
        blurBackground();
        console.log("4 remove")
        resetGame()
        dialog.close()
    }

}

//Get the user input (from buttons) and run playRound, changeChoiceDisplay
let currentRound = 0;
const playGame = function(){
    let buttons = document.getElementById('lower');

    //get click event for each button / User Choice
    buttons.addEventListener('click', (event) => {
        let target = event.target.closest('[id]');

        if (!target) return;

        //run the getComputerChoice to be used for different functions below
        let computerValue = getComputerChoice();


        //
        switch(target.id) {
            case 'rock':
                playRound("rock", computerValue)
                changeChoiceDisplay("rock", computerValue);
                break;
            case 'paper':
                playRound("paper", computerValue);
                changeChoiceDisplay("paper", computerValue);
                break;
            case 'scissors':
                playRound("scissors", computerValue);
                changeChoiceDisplay("scissors", computerValue);
                break;
        }
        
        currentRound++;

        //Check winner based on the number of rounds
        // if (currentRound >= rounds){
        //     if (humanScore > computerScore) {
        //     alert("You Win!");
        //     } else if (humanScore < computerScore) {
        //         alert("You Lose!");
        //     } else {
        //         alert("Its A Tie!");
        //     }
        // }

        //Check winner based on who makes it to winning score first
        if (humanScore >= rounds){
            outcome("You Win!", humanScore, computerScore)
        } else if (computerScore >= rounds){
            outcome("You Lose!", humanScore, computerScore)
        }

    });
    

}



inputPopup();
playGame();








