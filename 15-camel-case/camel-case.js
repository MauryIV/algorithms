// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
  const camelStr = [];
  const lowStr = str.toLowerCase();
  for (i=0; i<lowStr.length; i++) {
    if (lowStr[i] === ' ') {
      const cap = (lowStr[i+1]).toUpperCase();
      camelStr.push(cap);
      i++;
    } else {
      camelStr.push(lowStr[i]);
    }
  }
  return camelStr.join('');
};
