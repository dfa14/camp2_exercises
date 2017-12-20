// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
const param = [1, 2, 3, 4, 5];
<<<<<<< HEAD
const pairOuImpair = "even";
=======
const pairOuImpair = "odd";
>>>>>>> test commit du lundi matin
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
<<<<<<< HEAD
  console.log(listFiltered);
  return listFiltered;

}

filter(param,pairOuImpair);
=======

  return listFiltered;
}

filter(param);
>>>>>>> test commit du lundi matin

// do not remove this line, it is for tests
module.exports = filter;
