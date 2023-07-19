require("@babel/register");
const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const EditAnimal = require("../views/EditAnimal");
const { Animal, Image } = require("../../db/models");

route.get("/", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const animalDataDb = await Animal.findOne({ where: { id } });
  const imgDataDb = await Image.findAll({ where: { animal_id: id } });
  console.log(animalDataDb, imgDataDb);
  render(EditAnimal, { animalDataDb, imgDataDb }, res);
});

// route.put("/", async (req, res) => {
//     const { id } = req.params;
//     console.log(id);
//     const animalDataDb = await Animal.findOne({ where: { id } });
//     const imagelDataDb = await Image.findAll({ where: { animal_id: id } });
//     console.log(animalDataDb, imagelDataDb);
//     render(EditAnimal, { animalDataDb, imagelDataDb }, res);
//   });

// route.delete("/", async (req, res) => {
//     const { id } = req.params;
//     console.log(id);
//     const animalDataDb = await Animal.findOne({ where: { id } });
//     const imagelDataDb = await Image.findAll({ where: { animal_id: id } });
//     console.log(animalDataDb, imagelDataDb);
//     render(EditAnimal, { animalDataDb, imagelDataDb }, res);
//   });

module.exports = route;
