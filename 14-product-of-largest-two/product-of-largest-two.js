// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (i=0; i<arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return first * second;
};
