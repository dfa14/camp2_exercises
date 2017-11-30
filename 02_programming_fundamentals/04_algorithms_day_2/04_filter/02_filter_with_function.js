// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
const initArray = [1,2,3,4,5]


function filter(initArray, fn) {
  // Your code here
  //const arrayTemp = [];
  let arrayFinal = [];
  for (let i = 0; i < initArray.length; i++) {
    if (fn(initArray[i]) !== undefined) {
      arrayFinal.push(fn(initArray[i]));
    }
  }
  return(arrayFinal);
}

function pickEvenNumbers(param) {
  if (param%2 === 0) {
    return param;
  }
}

for (let i = 0; i < initArray.length; i++) {
  arrayFinal.push(pickEvenNumbers(initArray[i]));
}

filter(initArray, pickEvenNumbers);

// il passe l'array à filtrer et la fonction pickEvenNumbers

// do not remove this line, it is for tests
module.exports = filter;

-----------------------

const param = [1, 2, 3, 4, 5];
const pairOuImpair = "even";
// odd = impair // even = pair
/*
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
  console.log(listFiltered);
  return listFiltered;

}

filter(param,pairOuImpair);
