require("@babel/register");
const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const CreateAnimal = require("../views/CreateAnimal");
const { Animal, Image } = require("../../db/models");

route.get("/", (req, res) => {
  render(CreateAnimal, {}, res);
});

route.post('/', async (req, res) => {
  const { name, species, description } = req.body;
  try {
    await Animal.create({
      name, species, description
    });
    res.json({ msg: 'Зверь добавлен'});
  } catch (error) {
    console.log(error);
  }
})
module.exports = route;