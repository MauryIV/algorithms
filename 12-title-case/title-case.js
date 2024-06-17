// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  let strArr = [];
  strArr.push(str[0].toUpperCase());
  for (i=0; i<str.length; i++) {
    if (str[i] === ' ') {
      strArr.push(str[i+1].toUpperCase());
    } else {
    strArr.push(str[i+1]);
    }
  }
  return strArr.join('');
};
