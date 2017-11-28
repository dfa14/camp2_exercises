// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(paramNumber) {
  let result = [];
  let number = paramNumber;

  while (number > 0) {
    result.push(number%10 * number%10);
    number = Math.floor(number/10);
  }
  console.log();(result);
}

const toBeSquared = 44;

squareDigits(toBeSquared);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
