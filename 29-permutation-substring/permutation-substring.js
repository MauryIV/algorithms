// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
  let copySub = [];
  for (let i=0; i<sub.length; i++) {
    if (str.includes(sub[i])) {
      copySub.push(sub[i]);
    }
  }
  if (sub === copySub.join('')) {
    return true;
  } else {
    return false;
  }
};
