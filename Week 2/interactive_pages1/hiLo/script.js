var someObj = {
  currentRand: 0,
  currentGuess: 0,
  counter: 7,

  randomNum: function() {
    document.getElementById("guessesLeft").innerHTML = 7;
    this.currentRand = Math.floor(Math.random() * 100 + 1);
    document.getElementById("currentRand").innerHTML = this.currentRand;
    document.getElementById("guessesLeft").innerHTML = this.counter;
    this.counter = 7;
  },

  game: function() {
    this.currentGuess = document.getElementById("guess").value;

    if (this.counter != 0) {
      if (this.currentGuess > this.currentRand) {
        document.getElementById("feedback").innerHTML = "Your guess is too high.";
        this.counter--;
        document.getElementById('guessesLeft').innerHTML = this.counter;
      } else if (this.currentGuess < this.currentRand){
        document.getElementById("feedback").innerHTML = "Your guess is too low.";
        this.counter--;
        document.getElementById('guessesLeft').innerHTML = this.counter;
      } else if (parseInt(this.currentGuess) === this.currentRand) {
        document.getElementById("feedback").innerHTML = "You guessed right! You Win!";
      }
    }
  }
}
