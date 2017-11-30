// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"


const arrayTemp = ["zero", "one", "two"];

function joinArray(array, stringSeparateur) {
  let stringFinal = "";
  for (let i = 0; i < array.length; i++) {
    if (i === array.length-1) {
      stringFinal = stringFinal + array[i];
    } else {
      stringFinal = stringFinal + array[i] + stringSeparateur;
    }

  }
  //stringFinal = stringFinal + array[i];
  return stringFinal;
}

joinArray(arrayTemp,"-");


// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;
