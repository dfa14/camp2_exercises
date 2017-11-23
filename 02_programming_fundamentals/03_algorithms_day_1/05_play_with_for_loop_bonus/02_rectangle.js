// ## A Rectangle of 10 by 10
//
// ```
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// ```
const array = [];
const size = 10;

for (let i = 0; i < size; i++) {
  array.push("*");
}
for (let j = 0; j < size; j++) {
  console.log(array.join(""));
}
