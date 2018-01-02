const request = require("request");
let arrayTemp;

function api_categories(){
  return fetch (
    {url: "https://decath-product-api.herokuapp.com/categories",
    method: "GET",
    }
  )
  .then((response) => response.json())
  .then((result) => result)
}

module.exports {
  api_categories = api_categories
}
