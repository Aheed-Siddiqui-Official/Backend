//core module
const path = require("path");

// external module
const express = require("express");

// local module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const { default: mongoose } = require("mongoose");

const app = express();

// new work
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(errorsController.pageNotFound);

const PORT = 3000;
const DB_PATH = "mongodb+srv://mas:mas29@mas.lrkcwy5.mongodb.net/airbnb?appName=MAS";

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to mongo");

    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo", err);
  });
