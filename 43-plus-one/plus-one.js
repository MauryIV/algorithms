// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function(digits) {
  if (digits.length === 0) {
    digits.push(1);
    return digits;
  }
  for (let i=digits.length-1; i>=0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
      continue;
    }
    digits[i] = digits[i]+1;
    return digits;
  }
};
