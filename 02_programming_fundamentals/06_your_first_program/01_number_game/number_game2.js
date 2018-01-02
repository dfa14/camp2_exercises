

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


reader.question("What is your name? ", (name) => {
  console.log(`Hello ${name}!`);

  reader.close();
});



------
const readline = require("readline");
const theNumber = (Math.floor(Math.random()*100));

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("je triche, voici the Number : "+ theNumber);

function askQuestion() {
  const resultat=
  return ;
}

reader.question("What is your name? ", (name) => {
  console.log(`Hello ${name}!`);
  let flag ="KO";

  reader.question("find the number? ", (numberTested) => {
    if (theNumber === parseInt(numberTested, 10)) {
      console.log("Champion");
      flag = "OK";
      console.log("flag = " + flag);
      reader.close();
    } else {
      console.log("Retente ta chance ...");
      console.log("flag = " + flag);
    }
    reader.close();
  });

});
