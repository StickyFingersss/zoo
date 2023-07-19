require("@babel/register");
const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const Rates = require("../views/Rates");
const { Rate } = require('../../db/models');

route.get("/", async (req, res) => {
  const rates = await Rate.findAll({ raw: true });
  render(Rates, { rates }, res);
});

module.exports = route;
