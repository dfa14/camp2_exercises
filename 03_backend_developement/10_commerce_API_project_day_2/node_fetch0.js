const fetch = require("node-fetch");

fetch("https://decath-product-api.herokuapp.com/brands")
  .then((response) => response.json())
  .then ((result) => console.log(result[0]))



//efe288cb-fb63-4b23-b8df-529f04b8b02b
