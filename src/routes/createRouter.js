require("@babel/register");
const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const CreateAnimal = require("../views/CreateAnimal");
const { Animal, Image } = require("../../db/models");

route.get("/", (req, res) => {
  render(CreateAnimal, {}, res);
});

route.post("/", async (req, res) => {
  const { name, species, description } = req.body;
  try {
    await Animal.create({
      name,
      species,
      description,
    });
    res.json({ msg: "Зверь добавлен" });
  } catch (error) {
    console.log(error);
  }
});

// route.post("/newImage", async (req, res) => {
//   const img = req.file.filename;
//   // const { name, email, password, description, photo } = req.body;
//   try {
//     const image = await Image.create({
//       link: "/img/" + img,
//       animal_id: id,
//     });
//     console.log(image);
//     res.redirect(`/edit/${id}`);
//   } catch (error) {
//     console.log("error", error);
//   }
// })
module.exports = route;
