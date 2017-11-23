// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

const array = [];
const size = 4;
const middle = size/2;

for (let i = 0; i < size-1; i++) {
  array.push(" ");
}
array.push("*"); //middle init

for (let i = 0; i < size; i++) {
  array.push(" ");
}
console.log(array.join(""));

for (let j = 0; j < 1; j++) {
  console.log(array.join("")); // 1 seul passage init pyramide
  for (let i = 0; i < size-1; i++) { // boucle sous la pyramide
    array[Math.trunc(middle)-i]="*";
    array[Math.trunc(middle)+2+i]="*";
    console.log(array.join(""));
  }
}
