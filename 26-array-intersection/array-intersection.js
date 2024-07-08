// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
  let arrIntersect = [];
  for (let i=0; i<arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arrIntersect.push(arr1[i]);
    }
  }
  return arrIntersect;
};
