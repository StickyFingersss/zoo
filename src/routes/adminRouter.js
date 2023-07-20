const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const AdminButton = require("../views/AdminButton");
const ChangeTarif = require("../views/ChangeTarif");

const { Rate } = require("../../db/models");

route.get("/", (req, res) => {
  render(AdminButton, {}, res);
});
route.get("/Change", async (req, res) => {
  const rate = await Rate.findAll({ raw: true });

  render(ChangeTarif, { rate }, res);
});

route.put("/Change", async (req, res) => {
  const { oldBud, oldWeek, youngBud, youngWeek } = req.body;
  console.log(req.body);
  console.log("------------------>");
  await Rate.update({ price: Number(oldBud) }, { where: { id: 3 } });
  await Rate.update({ price: Number(oldWeek) }, { where: { id: 4 } });
  await Rate.update({ price: Number(youngBud) }, { where: { id: 1 } });
  await Rate.update({ price: Number(youngWeek) }, { where: { id: 2 } });
  res.sendStatus(200);
});

route.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("ZooCookie");
  res.redirect("/");
});

module.exports = route;
