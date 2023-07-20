const express = require("express");
const route = express.Router();

const multer = require("multer");
const upload = require("../lib/multer");
// const upload = multer({ storageEngine, checkFileType }).single("image");

const render = require("../lib/render");
const Upload = require("../views/Upload");

route.get("/", (req, res) => {
  render(Upload, {}, res);
});

route.post("/", (req, res) => {
  console.log(req.file);
  // Проверка наличия файла перед запуском Multer
  if (!req.file) {
    return res.status(400).send("Пожалуйста, загрузите допустимое изображение");
  }

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // Multer error occurred during parsing the form data
      console.error(err);
      return res.status(500).send("Ошибка при загрузке файла");
    } else if (err) {
      // Other non-Multer errors occurred
      console.error(err);
      return res.status(500).send("Произошла непредвиденная ошибка");
    }

    // Process the file and form data here
    res.send("Изображение успешно загружено");
  });
});

module.exports = route;
