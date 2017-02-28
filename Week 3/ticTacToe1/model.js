var x = 1;
var o = -1;
var player = x;

var boardRows = 3;
var boardColumns = 3;
var boardSize = boardRows*boardColumns
var counter = boardSize;
var board = createMatrix(boardRows, boardColumns, 0);
// var test = [[0,0,1], [3,4,5], [6,7,8]];




//Functions
function createMatrix(rows, cols, fillChar) {
  var matrix = [];
  for (var i = 0; i < rows; i++) {
    var rowArray = [];
    for (var j = 0; j < cols; j++) {
      rowArray.push(fillChar);
    }
    matrix.push(rowArray);
  }
  return matrix;
}

function nextTurn() {
  if (counter > 0) {
    if (player === x) {
      player = o;
    } else {
      player = x;
    }
    counter--;
    return true;
  } else {
    return false;
  }
}

//test = [[0,1,2], [3,4,5], [6,7,8]]; checkWin(test);
//test = [[0,0,0], [3,4,5], [6,7,8]]; checkWin(test);
//test = [[0,1,2], [0,0,0], [6,7,8]]; checkWin(test);
//test = [[0,1,2], [3,4,5], [0,0,0]]; checkWin(test);
var test = [[1,0,1], [3,4,5], [6,7,8]];
checkWin(test);

function checkWin(matrix) {

  //check each matrix row for identical values
  for (var i = 0; i < matrix.length; i++) {
    var checks = [];
    for (var j = 1; j < matrix[i].length; j++) {
      if (matrix[i][0] === matrix[i][j]) {
        checks.push(true);
      }
    }
    if (checks.length === (matrix[i].length-1)) {
      return true
    }
  }
  return false;
}
