const readline = require("readline");
const theNumber = (Math.floor(Math.random()*100));

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let nbreTentative = 1;

console.log ("Pour info, Le nombre est : " + theNumber);

function askTheQuestion(answer) {
  if (theNumber === parseInt((answer),10)) {
    console.log("Great!");
    console.log("Nombre de tentative :" + nbreTentative);
    reader.close();
  } else {
    if (theNumber > parseInt((answer),10)) {
      console.log("Too low");
      nbreTentative++;
    }
    if (theNumber < parseInt((answer),10)) {
      console.log("Too high");
      nbreTentative++;
    }
    reader.question("No, What is the Number ? ", askTheQuestion);
  }
}

reader.question("What is the number ?", askTheQuestion);
