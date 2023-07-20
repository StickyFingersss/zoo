require("@babel/register");
const express = require("express");
const route = express.Router();

const { Animal, Image } = require("../../db/models");

route.delete("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await Image.destroy({ where: { animal_id: id } });
  await Animal.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = route;
