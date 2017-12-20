const request = require ("request");


const API_KEY = process.env.OPENWEATHER_API_KEY;
//const town = "Bogota";
const country= "CO";
//console.log(API_KEY);

function weatherByCity (town) {
  request({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${town},${country}&APPID=${API_KEY}&units=metric`,
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result);
    //console.log(json.city.name);
<<<<<<< HEAD
    console.log(json);
=======
    console.log(json);
>>>>>>> Commit du lundi matin 11/12
    //console.log(json.main.temp);
    //return (`${json.main.temp} °C`);
  });
}


weatherByCity("Bogota");

module.exports = weatherByCity
