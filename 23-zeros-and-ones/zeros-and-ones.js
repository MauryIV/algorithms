// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zerosAndOnes = function(str) {
  let zeros = 0;
  let ones = 0;
  for (i=0; i<str.length; i++) {
    if (str[i] === '0') {
      zeros ++;
    } else if (str[i] === '1') {
      ones ++;
    }
  }
  if (zeros === ones) {
    return true;
  } else {
    return false;
  }
};
