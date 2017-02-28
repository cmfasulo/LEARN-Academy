function ccChecker() {
  var ccNum = parseInt("4556737586899855");
  //var ccNum = parseInt(prompt("Please Enter Your Credit Card Number for Verification"));

  var ccArray = intArray(ccNum); //turns CC input to array of integers values
  var lastNum = ccArray[ccArray.length-1]; //stores last digit for later comparison
  var cc15 = ccArray.slice(0,ccArray.length - 1); //drops last digit from array
  var cc15Rev = reverseCC15(cc15); //reverses numbers/positions in array
  var ccOdd9 = odd9(cc15Rev); //applies changes to odd position digits
  var sum = arraySum(ccOdd9); //finds sum of all resulting digits

  if (sum%10 === lastNum) {
    alert("Your Credit Card Has Been Successfully Verified!");
  }
  else {
    alert("Sorry, The Credit Card You Entered Is INVALID");
  }

//Credit Card Array Manipulation Functions--------------------------------------
  function intArray(str) { //turns CC from String to single-digit index Array
    var array = (""+str).split("");
    for (var i = 0; i < array.length; i++) {
      array[i] = parseInt(array[i]);
    }
    return  array;
  }

  function reverseCC15 (array) { //revereses truncated CC number array
    var revArray = [];
    for (var i = 0; i < array.length; i++) {
      revArray.push(array[(array.length - 1) - i]);
    }
    return revArray;
  }

  function odd9(array) { //multiplies odd number array positions by 2, subtracts 9 if the result is greater than 9
    var arrayOdd9 = [];
    for (var i = 0; i < array.length; i++) {
      if (i%2 === 0) {
        var double = array[i]*2;
        if (double > 9) {
          double -= 9;
          arrayOdd9.push(double);
        }
        else {
          arrayOdd9.push(double);
        }
      }
      else {
        arrayOdd9.push(array[i]);
      }
    }
    return arrayOdd9;
  }

  function arraySum(array) { //finds sum of all array positions
    var sumArray = 0;
    for (var i = 0; i < array.length; i++) {
      sumArray += array[i];
    }
    return sumArray;
  }
}
