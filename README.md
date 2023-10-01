# Odin-RockPaperScissorJS
Rock Paper Scissor webpage to practice JavaScript

## This is a very basic Rock Paper Scissor game run on the console with the help of the webpage prompt ( there is no actual webpage ).
The sole purpose of this game is to practice some extremely basic JavaScript concepts. 

Here are a few screenshots:

![image](https://github.com/MarkJuliusAbraham/Odin-RockPaperScissorJS/assets/122323456/5f9a0c45-d451-4b6d-895a-f59ca8716cf0)

The game ends at 5 wins:

![image](https://github.com/MarkJuliusAbraham/Odin-RockPaperScissorJS/assets/122323456/710d977a-e45f-4d1c-bdca-b1c1c25335e1)

The webpage asks using a prompt with word hinting the correct syntax to be used to play the game. All inputs are sent to lower-case before usage.

Here is the code for determining the winner.

```
function StartRound(playerChoice){

    let computerChoice = GetComputerChoice();
    let draw = false;

    console.log("Computer's choice is: " + computerChoice);
    console.log("Player's choice is: " +  playerChoice);


    if(playerChoice==computerChoice){
        draw = true;
    }
    //if playerChoice is rock or paper, then they lose
    //if computerChoice is rock + 1 = paper, or paper + 1 = scissor respectively
    else if(playerChoice == arr[0] || playerChoice == arr[1]){
        computerWins = arr.indexOf(playerChoice) + 1 == arr.indexOf(computerChoice);
    }

    //if playerChoice is scissor, then they lose
    //if computerChoice is index 0
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
```

### The code above simply checks if the user's input is 1 index lower from the computer. This check happens only happens if it wasn't already a draw, thus failing this check means that the player wins without needing extra comparisons.
