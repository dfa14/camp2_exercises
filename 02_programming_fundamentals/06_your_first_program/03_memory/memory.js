// This function will clear the terminal when called
const clear = require("cli-clear");
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];
const cardsHidden = Array(6).fill("X");


function askTheQuestion(answer) {
  let temp = 2; // définition du nombre de coups
  for (let i = 0; i < temp; i++) {
    reader.question("which cards you want to discover ? from 1 to 6", askTheQuestion);
    //console.log(choice);
    console.log("test");
  }
  reader.close(); // sortie du jeu
  return;
}


console.log(cards);

console.log(cardsHidden);
askTheQuestion(2);



//
