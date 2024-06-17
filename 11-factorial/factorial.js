// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  let sum = 1;
  for (i=1; i<num+1; i++) {
    sum *= i;
  }
  return sum;
};
