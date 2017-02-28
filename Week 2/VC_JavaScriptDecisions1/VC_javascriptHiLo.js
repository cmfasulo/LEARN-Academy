// purpose: function named hiLo; asks user to guess random number set by computer;
//signature: () ---> prompt string (asks user for guesses, responds with higher or lower)
//examples:
function hiLo() {
  var userName = prompt("Please Input Your Name Below");
  var rand = Math.floor(Math.random() * (100 - 1)) + 1;;
  alert("The random number is: " + rand);
  var counter = 7;
  do {
    var user = prompt("Guess a Integer Between 1 and 100!")
    if (isNaN(user)) {
      alert("Hey! This isn't a number ya dummy!");
    }
    else {
      if (user != rand) {
        alert("Sorry! Wrong Guess! You have " + counter-1 + " guesses left!");
      }
      else {
        alert("Congrats! You guessed the correct number of: " + user + " = " + rand);
      }
      counter--;
      if (counter === 0) {
        alert("Uh Oh, you've ran out of guesses!");
        break;
      }
    }
  } while (user != rand);

  if (parseInt(user) === rand) {
  alert ("Congrats " + userName + "! You Won!");
  }
  else {
    alert("Sorry, You Lose!")
  }
}
