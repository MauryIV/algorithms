// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
  let arrSquares = [];
  for (let i=0; i<arr.length; i++) {
    arrSquares.push(arr[i] * arr[i]);
  }
  return arrSquares.sort((a, b) => a - b);
};
