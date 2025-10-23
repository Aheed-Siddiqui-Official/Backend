const path = require("path");

const express = require("express");

const hostRouter = express.Router();

const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", {pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  // new work
  console.log(
    "Home registration successful for:",
    req.body
  );

  registeredHomes.push(req.body);
  res.render("homeAdded", {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
