// Magic 8 Ball Javascript File
// var answer = prompt("Ask the Magic 8 Ball whatever you want here!");
var google = "gooogle?";
function answer() {
var random = Math.floor(Math.random() * 4);
if (random === 0) {
document.getElementById("answer_field").innerHTML = "Yes";
}
else if (random === 1) {
  document.getElementById("answer_field").innerHTML = "Nahhh";
}
else if (random === 2){
  // document.getElementById("answer_field").innerHTML = "Maybe you should ask " + google.link("https://google.com",'_blank');
  document.getElementById("answer_field").innerHTML = "Maybe you should ask <a href='https://google.com' target='_blank'>google?</a>";
}
else {
  document.getElementById("answer_field").innerHTML = "You decide!";
  }
}
