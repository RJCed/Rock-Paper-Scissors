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
