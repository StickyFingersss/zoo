require("@babel/register");
const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const Rates = require("../views/Rates");

route.get("/", (req, res) => {
  render(Rates, {}, res);
});

module.exports = route;
