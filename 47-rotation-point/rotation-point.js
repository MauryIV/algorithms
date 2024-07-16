// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

var rotationPoint = function(words) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let letterIndex = 0
  let prevWord = '';
  let currentWord = '';
  for (let i=0; i<words.length; i++) {
    prevWord = currentWord;
    currentWord = words[i];
    let prevLetter = prevWord[letterIndex];
    let currentLetter = currentWord[letterIndex];
    while (alphabet.indexOf(prevLetter) === alphabet.indexOf(currentLetter)) {
      letterIndex++;
      if (letterIndex >= prevWord.length || letterIndex >= currentWord.length) break;
      prevLetter = prevWord[letterIndex];
      currentLetter = currentWord[letterIndex];
    }
    if (alphabet.indexOf(prevLetter) > alphabet.indexOf(currentLetter)) {
      return i;
    }
  }
  return -1;
};
