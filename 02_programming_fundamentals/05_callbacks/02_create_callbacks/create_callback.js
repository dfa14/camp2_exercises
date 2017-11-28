const log = (text) => console.log(text);
const uppercase = (text2) => console.log(text2.toUpperCase());
// A function that takes two parameters, this first one being an object like below
// and the second one being a callback function.

const getInput = (object, callback) => {
  // When finished, we want to log the key params...
  callback(object.key);
  callback(object.user);
};


getInput({user: "Lorem", key: "arrow_up"}, log);
getInput({user: "Lorem", key: "arrow_up", test:"toto"}, log);
getInput({user: "Lorem", key: "arrow_up"}, uppercase);
getInput({user: "Dom", key: "FIRI"}, uppercase);
