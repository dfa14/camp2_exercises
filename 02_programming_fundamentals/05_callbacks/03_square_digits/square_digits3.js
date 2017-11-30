// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

const numberToSquared= 9;

function squareDigits(numberToTreat) {
  let numberTemp = numberToTreat.toString();
  for (let i = 0; i < numberTemp.length; i++) {
    console.log(numberTemp.charAt(i));
  }
  console.log(numberTemp);
  return;
}

squareDigits(numberToSquared);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
