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

console.log(getComputerChoice())

function getHumanChoice(){
    
    // (1) reprompt- VARIABLE equal to true
    // (2) WHILE reprompt is equal to true
        // (3) choice-VARIABLE is equal to prompt of user "rock", "paper", "scissors"
        // (4) IF choice(Lower Case) is equal to "rock"
            // RETURN "rock"
            // reprompt is equal to false
        // (5) ELSE IF choice(Lower Case) is equal to "paper" 
            // RETURN "paper"
            // reprompt is equal to false
        // (6) ELSE IF choice(Lower Case) is equal to "scissors" 
            // RETURN "scissors"
            // reprompt is equal to false
        // (7) ELSE 
            // ALERT INVALID CHOICE
            // reprompt equal to true

    let reprompt = true; // (1)

    while (reprompt == true) { // (2)
        const choice = prompt("Make your choice! \nRock, Paper, or Scissors "); // (3)
        if (choice.toLowerCase() == "rock"){ // (4)
            return "rock";
            reprompt = false
        } else if (choice.toLowerCase() == "paper"){ //(5)
            return "paper";
            reprompt = false
        } else if (choice.toLowerCase() == "scissors"){ // (6)
            return "scissors";
            reprompt = false
        } else { //(7)
            alert("Invalid Choice!")
            reprompt = true
        }
    }
}

console.log("Human: " + getHumanChoice())
