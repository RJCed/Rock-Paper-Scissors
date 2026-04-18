//Get Computer Choice
function getComputerChoice(){
    // randomGen VARIABLE generate number between 0 - 0.999...
    const randomGen = Math.random()
    
    if (randomGen < 1 / 3){ 
        // IF randomGen is less than 1/3 RETURN "scissors"
        return "scissors";
    } else if (randomGen < 2 / 3){
        // ELSE IF randomGen is less than 2/3 RETURN "paper"
        return "paper";
    } else if (randomGen < 1){
        // ELSE IF randomGen is less than 1 RETURN "rock"
        return "rock";
    } else {
        // ELSE RETURN "getComputerChoice error"
        return "getComputerChoice error";
    }   
}

//Get Human Choice
function getHumanChoice(){

    let reprompt = true;

    while (reprompt == true) {
        
        // User Input
        let choice = prompt("Make your choice! \nRock, Paper, or Scissors "); // (3)


        //CHECK IF EQUALS TO NULL (CLICKED CLOSE) and make it lower case
        if (choice == null){
            alert("Finish the Game")
            continue;
        } else {
            choice = choice.toLowerCase()
        }

        //Returns the User's Input
        if (choice == "rock"){ // convert this into switch in the future, but for now it works
            return "rock";
            reprompt = false
        } else if (choice == "paper"){
            return "paper";
            reprompt = false
        } else if (choice == "scissors"){
            return "scissors";
            reprompt = false
        } else { //Take into account user not choosing Rock, Paper, or Scissors (also undefined)
            alert("Invalid Choice!")
            reprompt = true
        }
    }
}

let humanScore = 0;
let computerScore = 0;

//Logic for each Round
function playRound(humanChoice, computerChoice){
    // IF humanChoice is "rock" and computer choice is "scissors"
        // add one to human score
        // Alert You Win
    // ELSE IF humanChoice is "rock" and computer choice is "paper"
        // add one to computer score
        // Alert You Lose
    // ELSE IF (DO THIS TO PAPER AND SCISSORS AS WELL)
    // ELSE (humanChoice and computerChoice are equal)
        // Alert TIE
    

    
    if (humanChoice == "rock" && computerChoice == "scissors"){ // FOR HUMAN ROCK
        humanScore = humanScore + 1;
        alert("You Win! Rock Beats Scissors")
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore = computerScore + 1;
        alert("You Lose! Paper Beats Rock")


    } else if (humanChoice == "paper" && computerChoice == "rock"){ // FOR HUMAN PAPER
        humanScore = humanScore + 1;
        alert("You Win! Paper Beats Rock")
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore = computerScore + 1;
        alert("You Lose! Scissors Beats Paper")


    } else if (humanChoice == "scissors" && computerChoice == "paper"){ // FOR HUMAN SCISSORS
        humanScore = humanScore + 1;
        alert("You Win! Scissors Beats Paper")
    } else if (humanChoice == "scissors" && computerChoice == "Rock"){
        computerScore = computerScore + 1;
        alert("You Lose! Rock Beats Scissors")
    } else {
        alert("Its a Tie!")
    }

    
    

    
    
}


//Plays round for a specific amount
function playGame(rounds) {
    // FOR each iteration (depends on how many rounds)
        //run playRound
    //Get the Total Score 

    for(let i = 0; i < rounds; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    alert("You: "+ humanScore + " Computer: " + computerScore)
}



let isInt = false;
let rounds = 0;
while (isInt == false){
    let numRound = prompt("How many rounds would you like to play? ")

    if (isNaN(numRound)){
        alert("Not A Number")
        continue;
    } else {
        rounds = numRound;
        isInt = true;
    }
    
}

playGame(rounds)