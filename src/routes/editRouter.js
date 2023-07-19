require("@babel/register");
const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const EditAnimal = require("../views/EditAnimal");
const { Animal, Image } = require("../../db/models");

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const animalDataDb = await Animal.findOne({ where: { id } });
  const imgDataDb = await Image.findAll({ where: { animal_id: id } });
  console.log(animalDataDb, imgDataDb);
  render(EditAnimal, { animalDataDb, imgDataDb }, res);
});

route.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { name, description } = req.body;
  console.log(req.body);
  try {
    await Animal.update(
      {
        name,
        description,
      },
      { where: { id } }
    );
    res.status(200);
  } catch (error) {
    console.log("Erroe", error);
  }
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Image.destroy({ where: { id } });
  res.status(200);
});

module.exports = route;
