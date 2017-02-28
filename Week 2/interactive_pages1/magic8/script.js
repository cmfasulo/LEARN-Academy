function submit() {
  var arr = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Your answer here."];
  var rand = Math.floor((Math.random() * arr.length));
  document.getElementById("user-question").innerHTML = document.getElementById("question").value;
  document.getElementById("response").innerHTML= arr[rand];
}
