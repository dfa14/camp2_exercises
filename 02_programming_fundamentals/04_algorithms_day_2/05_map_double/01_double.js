// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!
// Your code here...

const initArray = [1,2,3,4,5,6,7,8,12,14];

function double(array) {
  const arrayFinal =[];
  for (let i = 0; i < array.length; i++) {
    arrayFinal.push(array[i]*2);
  }

  return arrayFinal;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
