const fetch = require("node-fetch");

fetch("https://decath-product-api.herokuapp.com/products/82830e66-b439-4fef-ade8-abb4dce54e6e")
  .then((response) => response.json())
  .then ((result) => result.brand_id)
  .then ((result) => console.log(result));
