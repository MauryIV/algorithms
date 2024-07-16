// Write a function that takes in an absolute file path and simplifies it

var simplifyPath = function(path) {
  let thePath = [];
  const parts = path.split('/');
  for (let part of parts) {
    if (part === '..') {
      thePath.pop();
    }
    else if (part !== '.' && part !== '') {
      thePath.push(part);
    }
  }
  return '/' + thePath.join('/');
};
