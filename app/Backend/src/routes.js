//Import Module
const express = require("express");
//Import function router
const routes = express.Router();

routes.post("/users", (request, response) => {
  const body = request.body;

  console.log(body);
  return response.json({
    item: "Recebido",
    dev: "Tadeu",
  });
});

module.exports = routes;
