// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(number) {
  let stringNum=number.toString();
  let tempArray = [];




  for (let i = 0; i < stringNum.length; i++) {
    tempArray.push[stringNum.charAt(i)];
  }
  //console.log(tempArray);
  //console.log(number);
  //console.log(stringNum);
  console.log(stringNum.charAt(2));
}

const toBeSquared = 43;
squareDigits(toBeSquared);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
