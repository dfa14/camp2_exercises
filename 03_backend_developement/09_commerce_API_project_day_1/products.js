const request = require("request");
const { Pool } = require("pg");
const PG = require("pg");
let arrayTemp;
const pool = new Pool();

request(
  {
    url: "https://decath-product-api.herokuapp.com/products",
    method: "GET",
  },
  function(error, response, result) {
    arrayTemp = JSON.parse(result);
    arrayTemp.forEach(insertProducts);
  }
);
