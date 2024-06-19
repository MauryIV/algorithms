// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
  let charList = {}
  for (i=0; i<str.length; i++) {
    let char = str[i]
    // if (char === ' ') {
    //   continue
    // } (test included spaces)
    if (charList[char]) {
      charList[char]++
    }
    else {
      charList[char] = 1
    }
  }
  console.log(charList)
  return charList
};
