const arr = ["rock","paper","scissors"]

const targetWinCount = 5;

let playerScore = 0;
let computerScore = 0;

function ResetScore(){
    playerScore = 0;
    computerScore = 0;
}

function GetRandomInteger(inclusiveMinimum, exclusiveMaximum){
    return Math.floor(Math.random() * (exclusiveMaximum - inclusiveMinimum) ) + inclusiveMinimum;
}

function GetComputerChoice(){

    return arr[GetRandomInteger(0, arr.length)];
}

function GetPlayerChoice(){

    let answer = prompt("Type either \"rock\", \"paper\", or \"scissors\".", "rock")

    if(answer != null){
        answer.toLowerCase();
    }

    return answer;
}

function StartRound(playerChoice){

    let computerChoice = GetComputerChoice();
    let draw = false;

    console.log("Computer's choice is: " + computerChoice);
    console.log("Player's choice is: " +  playerChoice);


    if(playerChoice==computerChoice){
        draw = true;
    }
    /*
        If the playerChoice is rock or paper, then they lose whenever computerChoice is
        a 1 index higher than them. Since rock is at index 0 and paper is at index 1, paper beats rock.
    */

    else if(playerChoice == arr[0] || playerChoice == arr[1]){
        computerWins = arr.indexOf(playerChoice) + 1 == arr.indexOf(computerChoice);
    }

    /*
        However, this only applies for the first 2 items, as such if the playerChoice is the final
        index, which is the scissors, then we do a simple comparison if the computerChoice is a rock.

    */
    else if(playerChoice == arr[2])
    {
        computerWins = (arr[0] == arr.indexOf(computerChoice))
    }

    if(draw){
        console.log("The round resulted in a draw")
    }
    else{
        if(computerWins){
            computerScore += 1;
            console.log("The round resulted in a win for the computer.")
        }
        else{
            playerScore += 1;
            console.log("The round resulted in a win for the player.")
        }
    }
    console.log("\n\tComputer: " + computerScore + "\n\tPlayer :" + playerScore)
}

function StartGame(){
    
    while( (playerScore < 5) && (computerScore < 5)){
        let playerChoice = GetPlayerChoice()

        if(playerChoice == null){
            break;
        }
        else if(!arr.includes(playerChoice))
        {
            alert("Invalid input. Please follow the instructions")
        }else{
            StartRound(playerChoice);
        }
    }

}

StartGame()


