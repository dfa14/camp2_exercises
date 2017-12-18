const fetch = require("node-fetch");
const API_KEY = process.env.OPENWEATHER_API_KEY;

const cityToTest = "Bogota";
const countryOfCity = "CO";
const lat = 32.661343;
const long = 51.680374;


fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=${API_KEY}&units=metric`)
  .then ((response) => response.json())
  .then (function(result) {
    console.log("Les coordonnées sont associées à la ville de " + result.city.name);
    console.log("Voici le temps prévu by OpenWeather.com à " + result.list[0].dt_txt);

    return result.list[0];
  })
  .then (function(result) {
    console.log(result);
  });
