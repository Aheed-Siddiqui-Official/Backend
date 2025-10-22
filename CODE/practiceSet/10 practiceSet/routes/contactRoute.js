const path = require("path");

const express = require("express");

const contactRouter = express.Router();

const rootDir = require("../utils/pathUtil");

contactRouter.get("/us", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact.html'))
});

contactRouter.post("/us", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'thanks.html'))
});

module.exports = contactRouter;