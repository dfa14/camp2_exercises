// Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a decoded human-readable string.
//
// For example:
//
// decodeMorse(".... . -.--   .--- ..- -.. .") === "HEY JUDE";

// Here is the array of each letter in morse code
const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9"
};

function decodeMorse(morse) {
  let sentenceDecoded="";
  let sentenceDecoded2="";
  let sentenceDecodedFinal="";

  sentenceDecoded = morse.split("   "); // isolation des mots

  for (let j = 0; j < sentenceDecoded.length; j++) { // boucle pour gestion mot par mot
    sentenceDecoded2 = sentenceDecoded[j].split(" ");
    for (let i = 0; i < sentenceDecoded2.length; i++) { // boucle gestion lettre par lettre
      sentenceDecodedFinal = sentenceDecodedFinal + MORSE_CODE[sentenceDecoded2[i]];
    }
    if (j !== sentenceDecoded.length-1) {
      sentenceDecodedFinal = sentenceDecodedFinal + " ";
    }
  }
  console.log(sentenceDecodedFinal);
  return sentenceDecodedFinal;
}
decodeMorse(".... . -.--   .--- ..- -.. .");

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = decodeMorse;
