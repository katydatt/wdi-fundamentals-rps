////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === x) {
    console.log(x);}
    else if (move === null) {
    console.log('getInput()');
    }
    return 'getInput()'; 
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
  
   if (move === x) {
       console.log(x);}
  else if (move === null) {
      console.log('randomPlay()');
    } 
    return 'randomPlay()'; 
}

function getWinner(playerMove,computerMove) {
    var winner;
    
    
    if (playerMove === computerMove) {
    console.log("It's a tie!");
    }
    else if (playerMove === 'rock' && computerMove === 'scissors') {
    console.log("Player wins!");
    }
    else if (playerMove === 'paper' && computerMove === 'rock') {
    console.log("Player wins!");
    }
    else if (playerMove === 'scissors' && computerMove === 'paper') {
    console.log("Player wins!");
    }
 else if (playerMove === 'scissors' && computerMove === 'rock') {
    console.log("Computer wins!");
    }
     else if (playerMove === 'paper' && computerMove === 'scissors') {
    console.log("Computer wins!");
    }
     else if (playerMove === 'rock' && computerMove === 'paper') {
    console.log("Computer wins!");
    }
     
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
     while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
         var computerMove = getComputerMove();
         var winner = getWinner(playerMove, computerMove);
         if (winner === 'player') {playerWins++}
         else {computerWins++}
         console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
         console.log("The score is " + playerWins + " to " + computerWins + "\n");
     }
     return [playerWins, computerWins];
 
};


