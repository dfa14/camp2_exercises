const readline = require("readline");
const theNumber = (Math.floor(Math.random()*100));

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log ("Pour info, Le nombre est : " + theNumber);

function askTheQuestion(answer) {
  if (theNumber === parseInt((answer),10)) {
    console.log("Great!");
    reader.close();
  } else {
    if (theNumber > parseInt((answer),10)) {
      console.log("Too low");
    }
    if (theNumber < parseInt((answer),10)) {
      console.log("Too high");
    }
    reader.question("No, What is the Number ? ", askTheQuestion);
  }
}

reader.question("What is the number ?", askTheQuestion);
