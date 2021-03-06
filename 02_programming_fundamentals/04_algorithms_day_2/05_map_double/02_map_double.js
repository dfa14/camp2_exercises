// Create a function double which take an integer and return the double of the integer.
// Then, try to create a function called map. This function should take two parameters:
//
// - an array
// - a function
//
// this function apply the function passed as a parameter on each values of the array (also passed as a parameter).
//
// Finally, test map with an array of your choice and the double function.
//
// WARNING: You're not allowed to use `Array.map`!

// Your code here...

const initArray = [1,2,3,4,5,6,7,8,12,14];

function double(number) {
  return number*2;
}

function map(array,fn) {
  const arrayFinal = [];
  for (let i = 0; i < array.length; i++) {
    arrayFinal.push(fn(array[i]));
  }
  return arrayFinal;
}

console.log(map(initArray,double));

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = { double: double, map: map };
