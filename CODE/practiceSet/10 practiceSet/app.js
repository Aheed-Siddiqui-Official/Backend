const express = require("express");
const homeRouter = require("./routes/homeRoute");
const contactRouter = require("./routes/contactRoute");
const app = express();
const rootDir = require("./utils/pathUtil");
const path = require("path");

app.use(express.urlencoded());
app.use(homeRouter);
app.use("/contact", contactRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
