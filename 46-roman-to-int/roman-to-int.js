// Write a function that takes in a Roman Numeral string and returns its integer form

var romanToInt = function(str) {
  let num = 0;
  let strArr = str.split('')
  console.log(strArr)
  while (strArr[0] === 'M') {
    strArr.shift();
    num += 1000;
  } if (strArr[0] === 'C' && strArr[1] === 'M') {
    strArr.shift();
    strArr.shift();
    num += 900;
  } if (strArr[0] === 'D') {
    strArr.shift();
    num += 500;
  } if (strArr[0] === 'C' && strArr[1] === 'D') {
    strArr.shift();
    strArr.shift();
    num += 400;
  } while (strArr[0] === 'C') {
    strArr.shift();
    num += 100;
  } if (strArr[0] === 'X' && strArr[1] === 'C') {
    strArr.shift();
    strArr.shift();
    num += 90;
  } if (strArr[0] === 'L') {
    strArr.shift();
    num += 50;
  } if (strArr[0] === 'X' && strArr[1] === 'L') {
    strArr.shift();
    strArr.shift();
    num += 40;
  } while (strArr[0] === 'X') {
    strArr.shift();
    num += 10;
  } if (strArr[0] === 'I' && strArr[1] === 'X') {
    strArr.shift();
    strArr.shift();
    num += 9;
  } if (strArr[0] === 'V') {
    strArr.shift();
    num += 5;
  } if (strArr[0] === 'I' && strArr[1] === 'V') {
    strArr.shift();
    strArr.shift();
    num += 4;
  } while (strArr[0] === 'I') {
    strArr.shift();
    num += 1;
  }
  return num;
};
