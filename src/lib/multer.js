const multer = require("multer");
const path = require("path");

const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Destination path:", "./public/img"); // Отладочный вывод
    cb(null, "./public/img");
  },
  filename: (req, file, cb) => {
    const extName = path.extname(file.originalname).toLowerCase();
    const uniqueFilename = `${file.originalname}${extName}`;
    console.log("File name:", uniqueFilename);
    cb(null, uniqueFilename);
  },
});
const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 10000000000000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});
const checkFileType = function (file, cb) {
  const fileTypes = /jpeg|jpg|png|gif|svg/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: You can Only Upload Images!!");
  }
};

module.exports = multer({ storageEngine, checkFileType, upload });
