// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
  let wordsIncluded = [];
  let magWords = magazine.split(' ');
  const flyWords = flyer.split(' ');
  for (let i=0; i<flyWords.length; i++) {
    if (magWords.includes(flyWords[i])) {
      wordsIncluded.push(flyWords[i]);
      magWords.splice(flyWords[i], 1);
    }
  }
  if (wordsIncluded.join('') === flyWords.join('')) {
    return true;
  } else {
    return false;
  }
};
