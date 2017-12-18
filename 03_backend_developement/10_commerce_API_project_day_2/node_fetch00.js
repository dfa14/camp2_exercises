const fetch = require("node-fetch");

fetch("https://decath-product-api.herokuapp.com/products/82830e66-b439-4fef-ade8-abb4dce54e6e")
  .then((response) => response.json())
  .then ((result) => console.log("id --> " + result.id + "  ---- Brand Id --> " + result.brand_id ));



//efe288cb-fb63-4b23-b8df-529f04b8b02b
