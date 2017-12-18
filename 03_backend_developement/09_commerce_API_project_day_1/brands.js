const request = require("request");
const { Pool } = require("pg");
const PG = require("pg");
let arrayTemp;
const pool = new Pool();

request(
  {
    url: "https://decath-product-api.herokuapp.com/brands",
    method: "GET",
  },
  function(error, response, result) {
    arrayTemp = JSON.parse(result);
    arrayTemp.forEach(insertBrands);
  }
);

function insertBrands(brands) {
  pool.query(
    "INSERT INTO brands (id, title) VALUES ($1::uuid,$2::text)",
    [brands.id, brands.title],
    function(error)
    {
      if (error) {
        console.warn(error);
      }
    });

}
