// # The sea with some whirlpools (30 by 9)
// And to spice things up, add an X at the positions 25:2 and 7:9 and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```
//



const arrayTemp = [];
const hauteur = 9;
const longueur = 30;
let ligne ="";

//intégration dans l'array
//for (let i = 1; i < hauteur; i++) {
for (let i = 0; i < hauteur; i++) {
  ligne="";
  for (let j = 1; j < longueur; j++) {
    if (((j === 25) && (i === 2)) || ((j === 9) && (i === 7))) {
      ligne = ligne + "X";
    } else if ((((j === 4) && (i === 6)) || ((j === 18) && (i === 7)))) {
      ligne = ligne + "0";
    } else {
      ligne = ligne + "~";
    }

  }
  console.log(ligne);
}
//console.log(arrayTemp[i]);
//}
