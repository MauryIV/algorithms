// Write code to return a new string with all of the characters in `arr` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
  let temp = 0;
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start ++;
    end --;
  }
  return arr;
};
