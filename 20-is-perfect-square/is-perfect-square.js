// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
  let high = 0
  if (num > 1) {
    high = Math.floor(num/2);
  } else {
    high = num + 1;
  }
  for (i=0; i<high; i++) {
    if (i * i === num) {
      return true;
    }
  } 
  return false;
};
