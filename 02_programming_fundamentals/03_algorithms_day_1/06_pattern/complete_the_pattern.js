// Modify this value to test with other values
const numberOfLine = 5;
// Your code here ⬇
let i = numberOfLine;
let arrayTemp = [];
let compteur = 0;

for (let z = 0; z < numberOfLine; z++) {
  for (let j = 0; j < numberOfLine-compteur; j++) {
    arrayTemp.push(i);
    i--;
  }
  //console.log(arrayTemp);
  console.log(arrayTemp.join(""));
  arrayTemp = [];
  compteur++;
  i=numberOfLine;
}
