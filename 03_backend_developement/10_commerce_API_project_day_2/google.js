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
    return result;
  })
  .then (function(result) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${result.lat}&lon=${result.lng}&APPID=${API_KEY}&units=metric`)
      .then ((response) => response.json())
      .then ((result) => console.log(result));
  });
