
window.onload = function() {
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var guessedString = ""; 
var winText = "Wins: ";
var lossText = "Losses: ";
var guessText = "Guesses Remaining: ";
var lettersGuessedText = "Letters Guessed: ";

function runGame( ) {
document.getElementById("winCount").innerHTML = winText + wins;
document.getElementById("lossCount").innerHTML = lossText + losses;
document.getElementById("guessesLeft").innerHTML =guessText + guesses;
document.getElementById("lettersGuessed").innerHTML = lettersGuessedText + "None yet. Press a key to start!";
//playGame(){
 //initiate wins and losses
 var pickedLetter = letters[Math.floor(Math.random()*letters.length)];

document.onkeyup = function(event){
 //initiate/reset guess counter

   var userGuess = event.key.toLowerCase();
   console.log("Letter: " + pickedLetter);
    guessedString = guessedString + userGuess;
 // {
  if (userGuess == pickedLetter) {
  //player wins
    wins++;
    document.getElementById("winCount").innerHTML = winText + wins;
    document.getElementById("lossCount").innerHTML = lossText + losses;
    document.getElementById("guessesLeft").innerHTML =guessText + guesses;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessedText + guessedString;
    guesses = 10;
    guessedString = "";
    var pickedLetter = letters[Math.floor(Math.random()*letters.length)];
    runGame();
  }
  else  if (userGuess != pickedLetter && guesses > 0){
    //player fails but can try again
    guesses-- ;
    document.getElementById("winCount").innerHTML = winText + wins;
    document.getElementById("lossCount").innerHTML = lossText + losses;
    document.getElementById("guessesLeft").innerHTML =guessText + guesses;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessedText + guessedString;
    
  }
  else if (userGuess != pickedLetter && guesses == 0){
   //whole thing resets 
    losses++;
    document.getElementById("winCount").innerHTML = winText + wins;
    document.getElementById("lossCount").innerHTML = lossText + losses;
    document.getElementById("guessesLeft").innerHTML =guessText + guesses;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessedText + guessedString;
    guesses = 10;
    guessedString = "";
    var pickedLetter = letters[Math.floor(Math.random()*letters.length)];
    runGame();
  }
} 
}
runGame();
}






