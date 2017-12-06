/*function greet(name) {
  let greetingName = name;

  if (!name) {
    greetingName = "World";
  }

  return `Hello ${greetingName.toUpperCase()}!`;
}

module.exports = greet; */

// test à réaliser
// input -> toto -- output -> Hello TOTO!

const greet = require("./greeting.js");

test("Return Hello + name + !", () => {
  expect(greet()).toBe("Hello WORLD!");
  expect(greet("dom")).toBe("Hello DOM!");
});
