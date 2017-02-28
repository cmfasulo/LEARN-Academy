// purpose: function named greaterNum; two arg; determine larger;
//signature: (int1, int2) ---> greater int
//examples:
//greaterNum(0,1)---->1
//greaterNum(0,2)---->2
//greaterNum(5,4)---->5
function greaterNum(int1, int2) {
  if (int1 > int2) {
    return int1;
  }
  else {
    return int2;
  }
}

// purpose: function named assignGrade; arg; determine letter;
//signature: (integer) ---> corresponding grade (string)
//examples:
//assignGrade(99)-----> "A"
//assignGrade(88)-----> "B"
//assignGrade(71)-----> "C"

function assignGrade(integer) {
  if (integer >= 90) {
    return "A";
  }
  else if (80 <= integer && integer < 90) {
    return "B";
  }
  else if (70 <= integer && integer  < 80) {
    return "C";
  }
  else if (60 <= integer && integer  < 70) {
    return "D";
  }
  else {
    return "Failure go study please";
  }
}

// purpose: function named pluralize; 2 args; returns pluralize form of input;
//signature: (str, int) ---> pluralized form (string)
//examples:
//pluralize("dog", 5)-----> "5 dogs"
//pluralize("cat", 1)-----> "1 cat"
//pluralize("goose", 4)-----> "4 geese"
//pluralize("panda", 100)---->"a panda embarassment"
function pluralize(str, int) {
  if (int === 1) {
    return int + " " + str;
  }
  else if (str.toUpperCase() === "PANDA") {
    return "you have a panda embarassment";
  }
  else {
    str = str + "s";
    return int + " " + str;
  }
}

// purpose: function named oddEven; returns even or odd between 0 & 15;
//signature: () --->  print even or odd
//examples:
//oddEven() int= 1-----> odd
//oddEven() int= 2-----> even
function oddEven() {
  var count = 0;
  while (count<=15) {
    var half = count/2;

    if (count === 0) {
      alert(count + " is zero!");
    }
    else if (Number.isInteger(half)) {
      alert(count + " is an even number!");
    }
    else {
      alert(count + " is an odd number!");
    }
    count++;
  }
}

// purpose: function named fizzBuzz; returns number 1-100; Fizz (3), Buzz (5), FizzBuzz (3 and 5)
//signature: () --->  print number, [ Fizz (3), Buzz (5), FizzBuzz (3 and 5)]
//examples:
// 1 output 1
// 3 output FIZZ
// 5 output BUZZ
// 15 output FIZZBUZZ
function fizzBuzz() {
  var count = 0;
  while (count<=100) {
    var mult3 = count/3;
    var mult5 = count/5;
    if (Number.isInteger(mult3) && !Number.isInteger(mult5)) {
      alert("Fizz!");
    }
    else if (!Number.isInteger(mult3) && Number.isInteger(mult5)) {
      alert("Buzz!");
    }
    else if (Number.isInteger(mult3) && Number.isInteger(mult5)) {
      alert("FizzBuzz!");
    }
    else {
      alert(count);
    }
    count++;
  }
}
