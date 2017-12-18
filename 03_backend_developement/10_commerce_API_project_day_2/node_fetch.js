const fetch = require("node-fetch");

fetch("https://decath-product-api.herokuapp.com/brands")
  .then(response => response.json())
  .then (function (result) {

    console.log(result);
  });
