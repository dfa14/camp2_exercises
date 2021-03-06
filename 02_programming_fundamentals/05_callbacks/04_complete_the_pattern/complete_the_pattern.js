// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) up to n number of rows.
//
// *Note: Returning the pattern is not the same as Printing the pattern.*
//
// If n < 1 then it should return "" i.e. empty string.
//
// There are no whitespaces in the pattern other than the line breaks.
//
// * Hint: Use `\n` in string to jump to next line
// * Hint: `" abc\n ".trim()` will return `"abc"`
//
// ## Examples
//
// ```
// pattern(5)
// 1
// 22
// 333
// 4444
// 55555
//
// pattern(11)
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111
// ```

function pattern(size) {
  let chaineAttendu =[];
  let resultat;
  for (let i = 1; i < size+1; i++) {
    for (let j = 0; j < i; j++) {
      chaineAttendu=chaineAttendu.concat(i);
    }
    chaineAttendu=chaineAttendu.concat("\n");

    //console.log(chaineAttendu);
    //j=j+1;
  }
  //console.log(chaineAttendu.trim());
  resultat = chaineAttendu.join("");
  return (resultat.trim());
}

/*
var first_name = "peter";
var last_name = "jones";
var name=first_name.concat(last_name)
*/

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = pattern;
