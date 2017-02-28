var ccNum = 4556737586899855;
var ccString = ccNum.toString(); //"4556737586899855"
var ccLength = ccString.length;
// ccEnd = ccNum[15]; --work in progress (keep CC number as integer)
// ccDrop = ccNum[0-14]; --work in progress (keep CC number as integer)

ccEnd = ccString.slice(ccLength-1, ccLength); //"5"
ccDrop = ccString.slice(0, ccLength-1); //"455673758689985"

function reversePos(str, pos) {
  var reverseDigit = 14 - pos;
  //return str[reverseDigit];
  //the number now is "reverse" from its original position
  //589986857376554

  //for reverseDigits = 1(0),3(2),5(4),7(6),9(8),11(10),13(12),15(14)


  for (var i = 0; i <= 14; i+=2) {
    var oddCheck = ccDrop[i]*2;
    if (oddCheck > 9) {
      ccDrop[i] = ccDrop[i]*2 - 9;
    }
    else {
      ccDrop[i] = ccDrop[i]*2;
    }
  }
  //10 8	18	9	16	6	16	5	14	3	14	6	10	5	8 -->multiply odds by 2
  //1	8	9	9	7	6	7	5	5	3	5	6	1	5	8  -->subtract 9 if the result is >9

  var sum = ccDrop[0];

  for (var i = 1; i <= 14; i+=1) {
    sum = sum + ccDrop[i];
    //should equal 85
  }
  return sum;
}
