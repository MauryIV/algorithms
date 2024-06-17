// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
  let forwardArr = [];
  let backwardArr = [];
  for (i=0; i<str.length; i++) {
    forwardArr.push(str[i]);
  }
  for (j=str.length-1; j>=0; j--) {
    backwardArr.push(str[j]);
  }
  if (forwardArr.join('') === backwardArr.join('')) {
    return true;
  } else {
    return false;
  }
};
