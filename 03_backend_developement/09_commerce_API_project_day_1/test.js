const request = require("request");
//const database = require("./database");
const PG = require("pg");
let arrayTemp=[];

request(
  {
    url: "https://decath-product-api.herokuapp.com/brands",
    method: "GET",
  },
  function(error, response, result) {
    //console.log("error:", error); // Print the error if one occurred
    //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    //console.log("result:", result); // Print the HTML for the Google homepage.
    arrayTemp = JSON.parse(result);

    //console.log(arrayTemp);

    for (let i = 0; i < arrayTemp.length; i++) {
      console.log("arrayTemp -----------");
      console.log(arrayTemp[i].id);
      console.log(arrayTemp[i].title);

      const client = new PG.Client();
      client.connect();
      client.query(
        "INSERT INTO brands (id, title) VALUES ($1::uuid,$2::text)",
        [arrayTemp[i].id, arrayTemp[i].title],
        function(error, result)
        {
          if (error) {
            console.warn(error);

          } else {
            // do something with result
            console.log(result);
          }
          client.end();
        });

    }
  });
//console.log(arrayTemp.length);


// résultat retourner 287 résultats en base / 547
