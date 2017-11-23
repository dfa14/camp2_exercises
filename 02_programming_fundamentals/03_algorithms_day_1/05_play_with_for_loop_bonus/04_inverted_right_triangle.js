// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```

const array = ["*","*","*","*","*"];
const size = 5;


for (let i = 0; i < size; i++) {
  console.log(array.join(""));
  array.pop();
}
