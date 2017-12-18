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

function insertProducts(products) {
  pool.query(
    "INSERT INTO products (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating) VALUES ($1::uuid,$2::text,$3::text,$4::text,$5::text,$6::numeric,$7::numeric,$8::numeric,$9::numeric,$10::text,$11::double precision)",
    //$1::uuid,$2::text,$3::text,$4::text,$5::text,$6::numeric,$7::numeric,$8::numeric,$9::numeric,$10::text,$11::double precision
    [products.id, products.decathlon_id, products.title, products.description, products.brand_id, products.min_price, products.max_price, products.crossed_price, products.percent_reduction, products.image_path, products.rating],
    function(error)
    {
      if (error) {
        console.warn(error);
      }
    });

}

//
