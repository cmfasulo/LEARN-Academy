// purpose: function named reverse; returns string with all words in reverse if the words are greater than five characters, spaces included;
//signature: ("this is a string") ---> "this is a gnirts"
//examples:
var input = prompt("Please input a string containing only words and spaces");
  reverse(input);

function reverse(str) {
  var strArray = str.split (" ");
  var output = "";
  for (var i=0; i < strArray.length; i++) {
    if (strArray[i].length >= 5) {
      var word = strArray[i];
      var o = '';
        for (var k = word.length - 1; k >= 0; k--)
          o += word[k];
          strArray[i] = o;
    }
   output = output + " " + strArray[i];
  }
  alert(output);
}
