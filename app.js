const express = require("express");
require("@babel/register");
const app = express();
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
// const multer = require("multer");

const session = require("express-session");
const FileStore = require("session-file-store")(session);

const { PORT } = process.env;

const sessionConfig = {
  name: "ZooCookie",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Секретное слово",
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

// импорт роутов
const mainRouter = require("./src/routes/mainRouter");
const ratesRouter = require("./src/routes/ratesRouter");
const animalsRouter = require("./src/routes/animalsRouter");
const animalRouter = require("./src/routes/animalRouter");
const editRouter = require("./src/routes/editRouter");
const adminRouter = require("./src/routes/adminRouter");
const createRouter = require("./src/routes/createRouter");
const { checkUser } = require("./src/middlwares/checkUser");
const uploadRouter = require("./src/routes/uploadRouter");
const deleteRouter = require("./src/routes/deleteRouter");

// app.use(multer({ dest: "./public/img" }).single("filedata"));

// const upload = multer({ storage: storage });

app.use(express.static(path.resolve("public")));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use("/uploads", express.static("uploads"));

//роутеры
app.use("/", mainRouter);
app.use("/rates", ratesRouter);
app.use("/animals", animalsRouter);
app.use("/animal", animalRouter);
app.use("/edit", checkUser, editRouter);
app.use("/admin", checkUser, adminRouter);
app.use("/create", checkUser, createRouter);
// app.use("/imgupload", uploadRouter);
app.use("/delete", checkUser, deleteRouter);

// изменить ковычки на бектики
app.listen(PORT, () => {
  console.log("Сервер крутится на  порту!");
});
