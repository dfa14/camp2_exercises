const request = require ("request");


const API_KEY = process.env.OPENWEATHER_API_KEY;
//const town = "Bogota";
const country= "CO";
//console.log(API_KEY);
const temp="";

function weatherByCity (town) {
  request({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${town},${country}&APPID=${API_KEY}&units=metric`,
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result);
    //console.log(json.city.name);
    //console.log(json);
    console.log(json.name);
    console.log(json.main.temp);
    console.log(`${json.main.temp} °C`);
    return (`${json.main.temp} °C`);
  });
}


weatherByCity("Bogota");

module.exports = weatherByCity
