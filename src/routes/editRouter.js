require("@babel/register");
const express = require("express");
const route = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/img");
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

const render = require("../lib/render");
const EditAnimal = require("../views/EditAnimal");
const { Animal, Image } = require("../../db/models");

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const animalDataDb = await Animal.findOne({ where: { id } });
  const imgDataDb = await Image.findAll({ where: { animal_id: id } });
  // console.log(animalDataDb, imgDataDb);
  render(EditAnimal, { animalDataDb, imgDataDb }, res);
});

route.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { name, description, species } = req.body;
  // console.log(req.body);
  try {
    await Animal.update(
      {
        name,
        description,
        species,
      },
      { where: { id } }
    );
    res.json({ msg: "Успешное обновление данных" });
  } catch (error) {
    console.log("Erroe", error);
  }
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Image.destroy({ where: { id } });
  res.sendStatus(200);
});

route.post("/:id", upload.single("photo"), async (req, res) => {
  const id = req.params.id;
  const img = req.file.filename;
  // const { name, email, password, description, photo } = req.body;
  try {
    const image = await Image.create({
      link: "/img/" + img,
      animal_id: id,
    });
    console.log(image);
    res.redirect(`/edit/${id}`);
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = route;
