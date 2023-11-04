# Odin-RockPaperScissorJS
Rock Paper Scissor webpage to practice JavaScript

## This is a very basic Rock Paper Scissor game run on the console with the help of the webpage prompt ( there is no actual webpage ).
The sole purpose of this game is to practice some extremely basic JavaScript concepts. 

Here are a few screenshots:

![image](https://github.com/MarkJuliusAbraham/Odin-RockPaperScissorJS/assets/122323456/5f9a0c45-d451-4b6d-895a-f59ca8716cf0)

Here is the basic prompt:

![image](https://github.com/MarkJuliusAbraham/Odin-RockPaperScissorJS/assets/122323456/db6f80c2-3065-4201-94bb-8b8d51a41886)

The game ends at 5 wins:

![image](https://github.com/MarkJuliusAbraham/Odin-RockPaperScissorJS/assets/122323456/710d977a-e45f-4d1c-bdca-b1c1c25335e1)

The webpage asks using a prompt with word hinting the correct syntax to be used to play the game. All inputs are sent to lower-case before usage.

Here is the code for determining the winner.

```
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
```

### The code above simply checks if the user's input is 1 index lower from the computer. This check only happens if it wasn't already a draw, thus failing this check means that the player wins without needing extra comparisons.
