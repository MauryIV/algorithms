// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  for (i=0; i<strA.length; i++) {
    const letterA = strA[i];
    if (!strB.includes(letterA)) {
      return false;
    }
  }
  for (i=0; i<strB.length; i++) {
    const letterB = strB[i];
    if (!strA.includes(letterB)) {
      return false;
    }
  }
  return true;
};
