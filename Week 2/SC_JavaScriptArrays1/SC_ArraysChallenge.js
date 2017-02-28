function highestNumber(array) {
  array.sort(function(a, b){return b-a});
  return array[0];
}

function lowestNumber(array) {
  array.sort(function(a, b){return a-b});
  return array[0];
}

function smallestNumber(array) {
  array.sort(function(a, b){return Math.abs(a)-Math.abs(b)});
  return array[0];
}

function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
function mean(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length;
}

function indexHighestNumber(array) {
  var sortedArray = array.concat().sort(function(a, b){return b-a});
  var highNum = sortedArray[0];
  return array.lastIndexOf(highNum);
}

var siblings = ["Meredith", "Sam", "Jenn"];
var parents = ["Homer", "Vicki", "Mike", "Patricia"];
var family = siblings.concat(parents);

return sort.siblings();
return sort.siblings(function(a,b){return b-a});
return sort.family();
return sort.family(function(a,b){return b-a});

function findName(lookup) {
  function searchName(name) {
    return name = lookup;
  }
  return family.some(searchName);
}

function searchName(name) {
  return name = "Meredith";
}

function evenElements(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]%2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function oddElements(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]%2 != 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function mayArray(array, func) {
  newArray = array.forEach(func);
  return newArray;
}

mapArray([5,6], function(x) { return 5*x; })

function mapArray(array, fun) { //creates function with 2 arguments array, fun=function
  var newArray = []; //creates empty array
  array.forEach(function(element) { //cycles through each element of array
     newArray.push(fun(element));//applies function fun to current element in array and stores it in the new array
    });
  return newArray; // returns new array
}

function mapArray(array, fun) { //creates function with 2 arguments array, fun=function
  var newArray = []; //creates empty array
  for (var i = 0; i < array.length; i++) {
    newArray.push(fun(array[i]));
  }
  return newArray;
}

//filterArray([5,6,7], function(x) { return x>=6; })

function filterArray (array, fun) { //creates function with 2 arguments array and function
  var newArray = []; //creates empty array
  array.forEach(function(element) {//cycles through each element of the array
      if (fun(element)) { //starts the fun function and checks if it returns true for the current element using the specific conditions (fun(element) = true or false)
        newArray.push(element); //if true it adds to the new array. element = value in the original array
      };
    // add element to return array if fun(x) returns true
  });
  return newArray;
}
