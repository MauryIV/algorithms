// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  let vowels = 0;
  const vowelArr = ["a", "e", "i", "o", "u"];
  for (i=0; i<str.length; i++) {
    let letter = str[i].toLowerCase();
    if (vowelArr.includes(letter)) {
        vowels++;
    }
  }
  console.log(vowels)
  return vowels;
};
