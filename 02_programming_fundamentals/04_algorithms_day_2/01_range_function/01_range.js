// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.
function range(param1, param2) {
  const suite = [];

  if (param2>param1) {
    for (let i = 0; i < param2-param1+1; i++) {
      suite.push(param1+i);
    }
  } else {
    for (let j = 0; j < param1-param2+1; j++) {
      suite.push(param1-j);
    }
    //console.log("todo");
  }
  return (suite);
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
