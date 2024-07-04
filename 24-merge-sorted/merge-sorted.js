// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
  for (i=0; i<arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  arr1.sort((a, b) => a - b);
  console.log(arr1)
  return arr1;
};
