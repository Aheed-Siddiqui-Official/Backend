//core module
const path = require("path");

// external module
const express = require("express");
const cors = require("cors");
const DB_PATH =
  "mongodb+srv://mas:mas29@mas.lrkcwy5.mongodb.net/airbnb?appName=MAS";
const { default: mongoose } = require("mongoose");

// local module
const app = express();

const errorsController = require("./controllers/error"); 
const todoItemsRouter = require("./routes/todoItemsRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemsRouter)



app.use(errorsController.pageNotFound);

// Connect to MongoDB and start server
const PORT = 3000;

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