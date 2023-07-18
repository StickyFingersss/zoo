require("@babel/register");
const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const Animal = require("../views/Animal");

route.get("/:id", (req, res) => {
  render(Animal, {}, res);
});

module.exports = route;
