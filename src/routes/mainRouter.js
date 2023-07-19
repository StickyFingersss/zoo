require("@babel/register");
const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const Main = require("../views/Main");
const { Admin } = require("../../db/models");

route.get("/", (req, res) => {
  render(Main, {}, res);
});

route.post("/", async (req, res) => {
  const { login, password } = req.body;
  console.log(login, password);

  try {
    const admin = await Admin.findOne({ where: { login } });

    if (admin) {
      if (admin.password === password) {
        req.session.login = admin.login;
        req.session.save(() => {
          res.json({ msg: "Ok" });
        });
      } else {
        res.json({ err: "Neverny parol" });
      }
    } else {
      res.json({ err: "Neverny" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
