require("@babel/register");
const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const AnimalView = require("../views/Animal");
const { Animal, Image } = require("../../db/models");

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const animal = await Animal.findOne({ where: {id}});
  const images = await Image.findAll({ where: { animal_id: req.params.id }});
  render(AnimalView, { animal, images }, res);
});

module.exports = route;
