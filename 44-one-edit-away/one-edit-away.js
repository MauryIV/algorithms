// TODO: Write function that takes in two strings and returns true if one character away, otherwise false
const oneEditAway = function(str1, str2) {
  let offBy = 0;
  for (let i=0; i<str1.length; i++) {
    if (str1[i] !== str2[i]) {
      offBy += 1;
    }
  }
  if (offBy === 1) {
    return true;
  } else {
    return false;
  }
}
