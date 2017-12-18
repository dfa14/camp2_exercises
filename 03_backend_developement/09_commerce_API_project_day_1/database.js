const PG = require("pg");

function storeBrand(brand) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "INSERT INTO brands (id, title) VALUES ($1::uuid,$2::text)",
    [brand.id, brand.title],
    function(error, result) {
      if (error) {
        console.warn(error);
        client.end();
      } else {
        // do something with result
        console.log(result);
        client.end();
      }

    }
  );
}



module.exports ={
  storeBrand: storeBrand
};
