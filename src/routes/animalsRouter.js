require("@babel/register");
const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const Animals = require("../views/Animals");
const { Animal, Image } = require("../../db/models");

route.get("/", async (req, res) => {
  const login = req.session.login;
  const animalDataDb = await Animal.findAll();
  const imageDataDb = await Image.findAll();
  function mergeData(animalDataDb, imageDataDb) {
    const tempObj = {};

    imageDataDb.forEach((data) => {
      if (!tempObj[data.animal_id]) {
        tempObj[data.animal_id] = [];
      }
      tempObj[data.animal_id].push(data.link);
    });

    // Создаем результирующий массив с объединенными данными
    const mergedArray = animalDataDb.map((animal) => ({
      id: animal.id,
      link: tempObj[animal.id] || [], // Если нет изображений, вернем пустой массив
      species: animal.species,
      name: animal.name,
    }));

    return mergedArray;
  }

  const mergedDataArray = mergeData(animalDataDb, imageDataDb);
  console.log(mergedDataArray);
  render(Animals, { login, mergedDataArray }, res);
});

module.exports = route;
