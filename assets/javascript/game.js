var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"];

var userChoices = [];

var wins = 1;
var losses = 1; 
var guessLeft = 9;
var computerGuess = computerChoices[
     Math.floor(Math.random() * computerChoices.length)];
     console.log(computerGuess);


document.onkeyup = function(event) {
    var key = event.key;
    console.log(key);
    userChoices.push(key);
    document.getElementById("left").innerHTML = guessLeft--;
    document.getElementById("letters").innerHTML = userChoices;

    if (key === computerGuess) {
        document.getElementById("wins").innerHTML = wins++, 
        userChoices.splice(0,userChoices.length);
        alert("YOU ARE PSYCHIC!");
        guessLeft = 9;
        }
    

    if (guessLeft < 0) {
        document.getElementById("losses").innerHTML = losses++,
        userChoices.splice(0,userChoices.length);
        alert("YOU ARE NOT PSYCHIC!");
        guessLeft = 9; 
        }
}