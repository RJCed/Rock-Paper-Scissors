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

console.log("Computer: " + getComputerChoice())

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

console.log("Human: " + getHumanChoice())
