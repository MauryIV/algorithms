// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

var caesarCipher = function(str, offset) {
  const uppAlph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const lowAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let offsetStr = [];
  while (offset < 0) {
    offset += 26;
  }
  for (let i=0; i<str.length; i++) {
    if (str[i] === ' ') {
      offsetStr.push(' ');
    }
    if (lowAlph.includes(str[i])) {
      let offIndex = (lowAlph.indexOf(str[i]) + offset) % 26;
      offsetStr.push(lowAlph[offIndex]);
    } if (uppAlph.includes(str[i])) {
      let offIndex = (uppAlph.indexOf(str[i]) + offset) % 26;
      offsetStr.push(uppAlph[offIndex]);
    }
  }
  return offsetStr.join('');
};
