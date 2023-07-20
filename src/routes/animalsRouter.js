require("@babel/register");
const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const Animals = require("../views/Animals");
const { Animal, Image } = require("../../db/models");

route.get("/", async (req, res) => {
  const login = req.session.login;
  const animalDataDb = await Animal.findAll();
  const imagelDataDb = await Image.findAll();
  // console.log(animalDataDb);
  render(Animals, { login, animalDataDb, imagelDataDb }, res);
});

module.exports = route;
