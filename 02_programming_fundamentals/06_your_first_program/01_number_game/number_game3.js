const readline = require("readline");
const theNumber = (Math.floor(Math.random()*100));

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("je triche, voici the Number : "+ theNumber);
let flag ="KO";
reader.question("What is your name? ", (name) => {
  console.log(`Hello ${name}!`);
}

function askQuestion(theNumber, numberTested) {
    reader.question("find the number? ", (numberTested) => {
      if (theNumber === parseInt(numberTested, 10)) {
        console.log("Champion");
        flag = "OK";
        console.log("flag = " + flag);
        return;
      } else {
        console.log("Retente ta chance ...");
        console.log("flag = " + flag);
        askQuestion(theNumber, numberTested);
      }
  }
    reader.close();
}

  reader.question("find the number? ", (numberTested) => {
    asQuestion(theNumber, numberTested);
    reader.close();
  });

});
