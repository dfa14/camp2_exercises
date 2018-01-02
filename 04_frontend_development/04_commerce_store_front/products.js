const request = require("request");
let arrayTemp;


request(
  {
    url: "https://decath-product-api.herokuapp.com/products",
    method: "GET",
  },
  function(error, response, result) {
    arrayTemp = JSON.parse(result);
  }
);

module.exports {
  api_products = api_products
}
