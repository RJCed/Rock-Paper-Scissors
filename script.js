// //Old Code (NO UI)
// // Get Computer Choice
// function getComputerChoice(){
//     // randomGen VARIABLE generate number between 0 - 0.999...
//     const randomGen = Math.random()
    
//     // Assign each random number from 0 - 0.999... to rock, paper, or scissors
//     // This separates them into region as follows:
//     // Region 1/3 (0.333...) below RETURN "scissors"
//     // Region 2/3 (0.666...) below (until 1/3) RETURN "paper"
//     // Region 1 and below (until 2/3) RETURN "rock"
//     // ELSE RETURN "getComputerChoice error"

//     if (randomGen < 1 / 3){ 
//         return "scissors";
//     } else if (randomGen < 2 / 3){
//         return "paper";
//     } else if (randomGen < 1){
//         return "rock";
//     } else {
//         return "getComputerChoice error";
//     }   
// }

// //Get Human Choice
// function getHumanChoice(){

//     let reprompt = true;

//     while (reprompt == true) {
        
//         // User Input
//         let choice = prompt("Make your choice! \nRock, Paper, or Scissors "); // (3)


//         //CHECK IF EQUALS TO NULL (USER CLICKED CLOSE) and if not, make input lower case
//         if (choice == null){
//             alert("Finish the Game")
//             continue;
//         } else {
//             choice = choice.toLowerCase()
//         }

//         //Returns the User's Input (Rock, Paper, Scissors)
//         if (choice == "rock"){ // convert this into switch in the future, but for now it works
//             return "rock";
//             reprompt = false
//         } else if (choice == "paper"){
//             return "paper";
//             reprompt = false
//         } else if (choice == "scissors"){
//             return "scissors";
//             reprompt = false
//         } else { //Take into account user not choosing Rock, Paper, or Scissors (also undefined)
//             alert("Invalid Choice!")
//             reprompt = true
//         }
//     }
// }

// let humanScore = 0;
// let computerScore = 0;

// //Logic for each Round
// function playRound(humanChoice, computerChoice){
//     // IF humanChoice is "rock" and computer choice is "scissors"
//         // add one to human score
//         // Alert You Win (Rock Beats Scissors)

//     // ELSE IF humanChoice is "rock" and computer choice is "paper"
//         // add one to computer score
//         // Alert You Lose (Paper Beats Rock)

//     // ELSE IF (DO THIS TO PAPER AND SCISSORS AS WELL)
//     // ELSE (humanChoice and computerChoice are equal)
//         // Alert TIE
    

    
//     if (humanChoice == "rock" && computerChoice == "scissors"){ // FOR HUMAN ROCK
//         humanScore = humanScore + 1;
//         alert("You Win! Rock Beats Scissors")
//     } else if (humanChoice == "rock" && computerChoice == "paper"){
//         computerScore = computerScore + 1;
//         alert("You Lose! Paper Beats Rock")


//     } else if (humanChoice == "paper" && computerChoice == "rock"){ // FOR HUMAN PAPER
//         humanScore = humanScore + 1;
//         alert("You Win! Paper Beats Rock")
//     } else if (humanChoice == "paper" && computerChoice == "scissors"){
//         computerScore = computerScore + 1;
//         alert("You Lose! Scissors Beats Paper")


//     } else if (humanChoice == "scissors" && computerChoice == "paper"){ // FOR HUMAN SCISSORS
//         humanScore = humanScore + 1;
//         alert("You Win! Scissors Beats Paper")
//     } else if (humanChoice == "scissors" && computerChoice == "Rock"){
//         computerScore = computerScore + 1;
//         alert("You Lose! Rock Beats Scissors")
//     } else {
//         alert("Its a Tie!")
//     }

    
    

    
    
// }


// //Plays round for a specific amount
// function playGame(rounds) {
//     // FOR each iteration (depends on how many rounds)
//         //run playRound
//     //Get the Total Score 

//     for(let i = 0; i < rounds; i++){
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
    
//     //Win or lose condition (Alert Who has the higher score Human vs Computer)
//     if (humanScore > computerScore){
//         alert("YOU WIN!\n" + "You: "+ humanScore + " Computer: " + computerScore)
//     } else if (humanScore < computerScore){
//         alert("YOU LOSE!\n" + "You: "+ humanScore + " Computer: " + computerScore)
//     } else {
//         alert("It's a tie!\n" + "You: "+ humanScore + " Computer: " + computerScore)
//     }
    
// }


// // This ask the user how many rounds are to be played
// let isInt = false;
// let rounds = 0;
// while (isInt == false){
//     let numRound = prompt("How many rounds would you like to play? ")

//     if (isNaN(numRound)){
//         alert("Not A Number")
//         continue;
//     } else if (numRound == 0 || numRound == null){
//         alert("Invalid Number")
//         continue;
//     } else {
//         rounds = numRound;
//         isInt = true;
//     }
    
// }

// playGame(rounds)


let humanScore = 0;
let computerScore = 0;


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
        changeResultDisplay("You Win! Rock Beats Scissors", humanScore, computerScore)
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore = computerScore + 1;
        changeResultDisplay("You Lose! Paper Beats Rock", humanScore, computerScore);


    }
    
    if (humanChoice === "paper" && computerChoice === "rock"){ // FOR HUMAN PAPER
        humanScore = humanScore + 1;
        changeResultDisplay("You Win! Paper Beats Rock", humanScore, computerScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore = computerScore + 1;
        changeResultDisplay("You Lose! Scissors Beats Paper", humanScore, computerScore);


    }
    
    if (humanChoice === "scissors" && computerChoice === "paper"){ // FOR HUMAN SCISSORS
        humanScore = humanScore + 1;
        changeResultDisplay("You Win! Scissors Beats Paper", humanScore, computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore = computerScore + 1;
        changeResultDisplay("You Lose! Rock Beats Scissors", humanScore, computerScore);
    }
    
    if (humanChoice === computerChoice){
        changeResultDisplay("Its a Tie!", humanScore, computerScore);
    }
   
}


// Event for What button is clicked (Uses the "lower" id as a reference)
let buttons = document.getElementById('lower');
//get click event for each button
buttons.addEventListener('click', (event) => {
    let target = event.target;

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
});




