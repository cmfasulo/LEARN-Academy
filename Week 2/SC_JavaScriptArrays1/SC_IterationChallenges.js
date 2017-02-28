for (var i=0; i<10; i++) {
  console.log(i);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

var a = 10;
while (a > 0) {
  console.log(a);
  a = a - 1;
}

for (var a = 10; a > 0; a--) {
  console.log(a);
}

a = [];
b = [];

function mergeArray(a, b) {
  var merge = a.concat(b);
  merge = merge.sort();

  for (var i = 0; i < merge.length; i++) {
    if (merge[i] === merge[i+1]) {
      merge = merge.slice(0, i).concat(merge.slice(i+1, merge.length));
    }
  }
  return merge;
}

function fillArray(a, b) {
  var array = [];
  for (var i = 0; i <= a; i++) {
     array.push(b);
   }
   return array;
}

function cleanFunction(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === false || array[i] == 0 || array[i] == "" || array[i] == null) {
      console.log(array = array.slice(0, i).concat(array.slice(i+1, array.length-1)));
    }
  }
  return array;
}


function cleanFunction(array) {
  return array.filter(removeFalses);
}

function removeFalses(element) {
  return element !== false && element !== 0 && element !== "" && element !== null;
}

function findPair(sum, array) {
  var arrayArray = [];
  for (var i = 0; i < array.length; i++) {//this is the outter loop that holds the first index
    for (var j = 0; j < array.length; j++) {//inner loop that holds the second index
      if (array[i] + array[j] === sum && i != j) {//if statement checks if the first number at the i index and the number at the j index equal the inputted sum
        var arrayTest = [i, j];//this creates the array with the numbers that add to the sum
        arrayTest.sort(function(a,b) {return a-b});//this sorts the array so the smallest number is first
        arrayArray.push(arrayTest);//this pushes each pair array to a larger array of all of our pairs
      }
    }
  }
  var sortedArray = arrayArray.concat().sort();//this sorts the larger array... use concat so that it creates a new array


  for (var k = 0; k < sortedArray.length; k++) {//this loop sets up our check that each array pair is unique
    if (sortedArray[k][0] == sortedArray[k+1][0] && sortedArray[k][1] == sortedArray[k+1][1]) {//this checks the first index of the current array against the first index of the next array, and the second index of the current array against the secnd indext of the next array
      sortedArray = sortedArray.slice(0, k).concat(sortedArray.slice(k+1, sortedArray.length));//this cuts out redundant arrays
    }
  }
  return sortedArray;//returns the array with unique arrays
}
