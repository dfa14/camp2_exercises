// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
const initArray = [1,2,3,4,5,6,7,8,12,14];

function filter(array) {
  // Your code here
  const arrayFinal = array.filter(number => number%2 ===0 );
  return(arrayFinal);
}

console.log(filter(initArray));



// do not remove this line, it is for tests
module.exports = filter;
