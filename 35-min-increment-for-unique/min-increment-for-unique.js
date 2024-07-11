// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function(nums) {
  let increments = 0;
  let tempArr = [];
  let sortedArr = nums.sort((a, b) => a - b);
  for (let i=0; i<sortedArr.length; i++) {
    for (let j=0; j<tempArr.length; j++) {
      if (sortedArr[i] === tempArr[j]) {
        sortedArr[i] = sortedArr[i] + 1;
        increments++;
      }
    }
    tempArr.push(sortedArr[i]);
  }
  return increments;
};
