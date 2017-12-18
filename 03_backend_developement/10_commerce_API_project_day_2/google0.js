const fetch = require("node-fetch");
const API_KEY = process.env.OPENWEATHER_API_KEY;
const API_GOOGLE = process.env.GOOGLE_API_KEY;
const query = "DECATHLON CAMPUS";


fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${API_GOOGLE}`)
  .then ((response) => response.json())
  .then ((result) => result.results[0])
  .then ((result) => result.geometry)
  .then ((result) => result.location)
  //.then ((result) => result.geometry)
  .then (function(result) {
    console.log(result);
    const mavariablep1 = result.lat;
    const mavariablep2 = result.lng;
    return result;
  })
  .then (function(result) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${result.lat}&lon=${result.lng}&APPID=${API_KEY}&units=metric`)
      .then ((response) => response.json())
      .then (function(result) {
        console.log("Input :" + query);
        console.log("Les coordonnées sont associées à la ville de " + result.city.name);
        console.log("Voici le temps prévu by OpenWeather.com à " + result.list[0].dt_txt);
        console.log(new Date(result.list[0].dt_txt));
        return result.list[0];
      })
      .then (function(result) {
        console.log(result);
      });
  });
