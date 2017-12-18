const express = require("express");
const retrieve_data = require("./retrieve_data");
const app = express();
const port = process.env.PORT || 3000;
const PG = require("pg");

app.get("/", function (request, result) {
  result.send("Hello World!");
});


app.get("/brands", function (error, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * from brands",
    [],
    function (error, resultQuery) {
      if (error) {
        result.send(error);
      } else {
        result.json(resultQuery.rows);
      }
      client.end();
    }
  );
});

app.get("/categories", function (error, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * from categories",
    [],
    function (error, resultQuery) {
      if (error) {
        result.send(error);
      } else {
        result.json(resultQuery.rows);
      }
      client.end();
    }
  );
});

app.get("/admin/retrieve/brands", function (request, response) {
  retrieve_data.fetchbrands(function(error) {
    if (error) {
      response.json("Error");
    }
    else {
      response.json("brands refreshed");
    }
  });
});


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
