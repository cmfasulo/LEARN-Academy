//user to input question
//output defined answers based on random number generator + question

function magicEightBall() {
  do {
    var question = prompt("What's you're question?");
    if (question.toUpperCase() === "STOP") {
      break
    }
    var randomNum = Math.floor(Math.random()*10);
    var responses = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Your answer here.","Nope","Sure, why not?", "57", "2 Chainz"];
    alert(question + ": " + responses[randomNum]);
  } while (question.toUpperCase() != "STOP");
}
