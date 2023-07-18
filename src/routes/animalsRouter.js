require("@babel/register");
const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const Animals = require("../views/Animals");

route.get("/", (req, res) => {
  render(Animals, {}, res);
});

module.exports = route;
