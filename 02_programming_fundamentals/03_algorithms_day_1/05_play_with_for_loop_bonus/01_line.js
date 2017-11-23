// ## A simple line of 10 stars
//
// ```
// **********
// ```

const array = [];
const size = 10;

for (let i = 0; i < size; i++) {
  array.push("*");
}
console.log(array.join(""));
