// Your task is to create a function that will sort every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()

function sort(unsortedArray) {
// Your code here
// A priori trouver le chiffre le plus petit
// le pusher dans un Array et le deleter de l'array d'origine
//boucle pour tester tous les éléments de l'array

  const arrayMaitre = [10,12,3,22];
  const arrayTemp =[];
  let minNumber = arrayMaitre[0];
  let maxNumber = arrayMaitre[0];
  const nbreOccurence =arrayMaitre.length;
  console.log(nbreOccurence);
  console.log(arrayMaitre[0]);

  for (let j = 0; j < nbreOccurence; j++) {
    for (let i = 0; i < arrayMaitre.length; i++) {
      if (arrayMaitre[i]<minNumber && arrayMaitre[i] !==" " && arrayMaitre[i]>minNumber) {
        minNumber = arrayMaitre[i];
        maxNumber = arrayTemp[arrayMaitre.length-1];
        arrayMaitre[i]=" ";
      }
      console.log("Mini actuel" + minNumber);

    //console.log(arrayMaitre[i]);
    }
    arrayTemp.push(minNumber);
    //minNumber = arrayMaitre[arrayMaitre.length-1];
    console.log(arrayMaitre);

  }
  console.log("Resultat");
  console.log(arrayTemp);
}
sort();


// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
