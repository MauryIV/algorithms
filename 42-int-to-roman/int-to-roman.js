// Write a function that takes in an integer and returns it as a Roman numeral string

var intToRoman = function(num) {
  let roman = [];
  while (num >= 1000) {
    roman.push('M');
    num = num - 1000;
  } if (num >= 900) {
    roman.push('CM');
    num = num - 900;
  } if (num >= 500) {
    roman.push('D');
    num = num - 500;
  } if (num >= 400) {
    roman.push('CD');
    num = num - 400;
  } while (num >= 100) {
    roman.push('C');
    num = num - 100;
  } if (num >= 90) {
    roman.push('XC');
    num = num - 90;
  } if (num >= 50) {
    roman.push('L');
    num = num - 50;
  } if (num >= 40) {
    roman.push('XL');
    num = num - 40;
  } while (num >= 10) {
    roman.push('X');
    num = num - 10;
  } if (num >= 9) {
    roman.push('IX');
    num = num - 9;
  } if (num >= 5) {
    roman.push('V');
    num = num - 5;
  } if (num >= 4) {
    roman.push('IV');
    num = num - 4;
  } while (num >= 1) {
    roman.push('I');
    num = num - 1;
  }
  return(roman.join(''))
};
