const request = require ("request");


const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByLatitudeAndLongitude(lat, long) {
  request({
    url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=${API_KEY}&units=metric`,
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result);
    const tempArray = json.list.map(x => x);
    const arrayFinal =[];
    console.log("weatherByLatitudeAndLongitude --> ");
    for (let i = 0; i < tempArray.length; i++) {
      let dateTemp = new Date(Date(tempArray[i].dt))
      let dateFr = dateTemp.toLocaleDateString();
      let objectTemp = {
        date: dateFr,
        temperature:tempArray[i].main.temp,
        weather:tempArray[i].weather
      };
      arrayFinal.push(objectTemp);
    }
    console.log(arrayFinal);
  });
}


function weatherByZipcode(zipcode) {
  request({
    url: `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},fr&APPID=${API_KEY}&units=metric`,
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result);
    const tempArray2 = json.list.map(x => x);
    const arrayFinal2 =[];
    console.log("weatherByZipcode --> ");

    for (let i = 0; i < tempArray2.length; i++) {
      let dateTemp = new Date(Date(tempArray2[i].dt))
      let dateFr = dateTemp.toLocaleDateString();
      let objectTemp = {
        date: dateFr,
        temperature:tempArray2[i].main.temp,
        weather:tempArray2[i].weather
      };
      arrayFinal2.push(objectTemp);
    }
    console.log(arrayFinal2);


  });
}

weatherByLatitudeAndLongitude(32.661343, 51.680374);
weatherByZipcode(59830);

module.exports = {
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude,
  weatherByZipcode: weatherByZipcode
};
