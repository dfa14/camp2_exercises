const fetch = require("node-fetch");
const API_KEY = process.env.OPENWEATHER_API_KEY;

const cityToTest = "Bogota";
const countryOfCity = "CO";


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityToTest},${countryOfCity}&APPID=${API_KEY}&units=metric`)
  .then ((response) => response.json())
  .then ((result) => result.main.temp)
  .then ((result) => console.log("la température de "+ cityToTest + " est de " + result +"°C actuellement"));
