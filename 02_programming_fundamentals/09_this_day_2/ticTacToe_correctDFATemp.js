const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

let currentPlayer;

function handleInput(input) {
  const coordinate = getCoordinate(input);
  if (coordinate) {
    updateState(coordinate);
    nextPlayer();
  }
  playTurn();
}

function getCoordinate(input) {
  const letter = input[0];
  const digit = input[1] - 1;

  if ((state[letter] && state[letter][digit] !== undefined) && (state[letter][digit] === null)) {
    /// ctrl déjà joué
    return { letter: letter, digit: digit };
  } else {
    console.log("Merci de rejouer -> déjà utilisé ou hors grille");
    return null;
  }
}

function updateState(coordinate) {
  const line = state[coordinate.letter];

  line[coordinate.digit] = currentPlayer;
}

function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function playTurn() {
  console.log(renderBoard());
  if (victoireStop()) {
    console.log(`${currentPlayer} a gagné la partie BRAVOOOO`);
    reader.question(`Taper sur une touche pour sortir  by by by`, hasard);
    reader.close();
  }

  reader.question(`${currentPlayer}: What is your move? e.g: a1\n`, handleInput);
}

function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];

  playTurn();
}

function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

function renderRow(letter) {
  const cells = state[letter];
  const row = cells.map(renderCell).join(" | ");

  return `${letter} ${row}`;
}

function renderBoard() {
  const letters = Object.keys(state);
  const rows = letters.map(renderRow).join("\n");
  const header = "  1   2   3";

  return `${header}\n${rows}`;
}

function victoireStop() {
  let succeed = false;

  //if (true) {
    // condition de succès du morpion les fameux 8 cas
    //return false; // donc stop
  //} else {
    return true; // donc tu continues à jouer
  }

//}

start();
