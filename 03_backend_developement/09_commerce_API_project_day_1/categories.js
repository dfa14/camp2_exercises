const request = require("request");
const { Pool } = require("pg");
const PG = require("pg");
let arrayTemp;
const pool = new Pool();

request(
  {
    url: "https://decath-product-api.herokuapp.com/categories",
    method: "GET",
  },
  function(error, response, result) {
    arrayTemp = JSON.parse(result);
    arrayTemp.forEach(insertCategories);
  }
);

function insertCategories(categories) {
  pool.query(
    "INSERT INTO categories (id, decathlon_id, label) VALUES ($1::uuid,$2::text,$3::text)",
    [categories.id, categories.decathlon_id, categories.label],
    function(error)
    {
      if (error) {
        console.warn(error);
      }
    });

}
