// In this activity, you will create a function that takes in an array and returns the sum of the maximum continuous, or contiguous, subarray.

// Note: Contiguous refers to items that are next to each other in sequence. In the array [1, 2, 3, -27, 5], for example, [1, 2, 3] is a contiguous subarray while [1, 2, 3, 5] is not, since 5 is not directly next to 3 in the sequence.

const maxSumArray = function(numbers) {
  let maxSum = -Infinity;
  let tempSum = 0;
  for (let i=0; i<numbers.length; i++) {
    tempSum += numbers[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    } else if (tempSum < 0) {
      tempSum = 0;
    }
  }
  return maxSum;
};
