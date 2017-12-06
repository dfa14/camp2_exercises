/*function toWords(sentence) {
  const allWords = sentence.split(/[.?!, :]+/);

  return allWords.filter(word => word !== "");
}

module.exports = toWords; */

const toWords = require("./to_words.js");

test("Test delete special char and split in array", () => {
  //expect(toWords()).toBeUndefined;
  expect(toWords("Hello !!! ça va ..!!??")).toBe(["Hello", "ça","va"]);
});
