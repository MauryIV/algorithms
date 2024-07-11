// Write a function that takes in two sorted arrays and returns a pair of numbers
// (one from each array) with the smallest difference.

// TODO: Solve the function below:

var smallestDifference = function (arr1, arr2) {
  let arrSolution = [];
  let difference = Infinity;
  for (let i=0; i<arr1.length; i++) {
    for (let j=0; j<arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) < difference) {
        difference = Math.abs(arr1[i] - arr2[j]);
        arrSolution = [];
        arrSolution.push(arr1[i]);
        arrSolution.push(arr2[j]);
      } 
    }
  }
  return arrSolution;
};
