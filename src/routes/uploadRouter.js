const express = require("express");
const route = express.Router();

// const multer = require("multer");
// const upload = require("../lib/multer");
// const upload = multer({ storageEngine, checkFileType }).single("image");

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
const Upload = require("../views/Upload");

route.get("/", (req, res) => {
  render(Upload, {}, res);
});

route.post("/", upload.single("photo"), async (req, res) => {
  console.log("sssssssssssssssssss", req.body, req.file);
  const img = req.file.filename;
  const { name, email, password, description, photo } = req.body;
  // const { login } = req.session;
  // const user = await User.findOne({ where: { name: login } });
  // try {
  //   await user.update({
  //     name,
  //     email,
  //     password,
  //     description,
  //     photo: /uploads/${img}
  //   })
  //     res.sendStatus(200);
  //   } catch (error) {
  //     console.error(error);
  //     res.sendStatus(500);
  //   }
});

module.exports = route;
