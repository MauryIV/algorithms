// Write code to return the largest number in the given array

var maxNum = function(arr) {
  let largestNum = 0
  for (i=0; i<arr.length; i++) {
    let num = arr[i];
    if (num > largestNum) {
      largestNum = num
    }
  }
  return largestNum
};
