// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function(str) {
  let tempArr = [];
  const leftBrackets = ["(", "{", "["];
  const rightBrackets = [")", "}", "]"];
  for (let i=0; i<str.length; i++) {
    if (leftBrackets.includes(str[i])) {
      tempArr.push(str[i]);
    } else if ((tempArr[tempArr.length - 1] === leftBrackets[0]) && (str[i] === rightBrackets[0])) {
      tempArr.pop();
    } else if ((tempArr[tempArr.length - 1] === leftBrackets[1]) && (str[i] === rightBrackets[1])) {
      tempArr.pop();
    } else if ((tempArr[tempArr.length - 1] === leftBrackets[2]) && (str[i] === rightBrackets[2])) {
      tempArr.pop();
    }
  }
  if (tempArr.length === 0) {
    return true;
  } else {
    return false;
  }
};
