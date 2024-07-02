// In this activity, you will be writing code to create a function that takes an array of unique numbers and returns true if the product of any two numbers is 20; else returns false.
const multiplyInto20 = function(arr) {
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length; j++) {
      if (arr[i] * arr[j] === 20) {
        return true;
      }
    }
  }
  return false;
};
