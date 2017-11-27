// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
const param = [1, 2, 3, 4, 5];
const pairOuImpair = "odd";
// odd = impair // even = pair

function filter(tempArray, str) {
  let listFiltered = [];
  for (let i = 0; i < tempArray.length; i++) {
    if ((str === "even") && (tempArray[i]%2===0))
    {
      listFiltered.push (tempArray[i]);
    } else {
      if ((str === "odd") && (tempArray[i]%2!==0))
      {
        listFiltered.push (tempArray[i]);
      }
    }
  }

  return listFiltered;
}

filter(param);

// do not remove this line, it is for tests
module.exports = filter;
