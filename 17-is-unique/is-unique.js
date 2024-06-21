// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
  let newArr = [];
  for (i=0; i<arr.length; i++) {
    if (newArr.includes(arr[i])) {
      return false;
    } else {
      newArr.push(arr[i]);
    }
  }
  return true;
};
