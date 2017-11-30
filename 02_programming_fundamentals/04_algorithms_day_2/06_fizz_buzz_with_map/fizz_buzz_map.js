/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:
   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.

   YOU MUST USE array.map
*/

const listTemp = [1,2,3,4,5,6,7,8,9,10,11];

function fizzBuzz1(list) {
  const arrayResult = list.map(function(x) {
    if (x % 15 === 0){return "FizzBuzz";}
    if (x % 3 === 0){return "Fizz";}
    if (x % 5 === 0){return "Buzz";}
    return x;
  }); // fin du map
  return arrayResult;
}


module.exports = fizzBuzz;
