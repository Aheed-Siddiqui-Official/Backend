//core module
const path = require("path");

// external module
const express = require("express");

// local module
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

const app = express();

// new work
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(errorsController.pageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
