const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Home List",
      currentPage: "host-home",
    })
  );
};

exports.postAddHome = (req, res, next) => {
  // new work
  console.log("Home registration successful for:", req.body);
  const { houseName, price, location, rating, photoUrl } = req.body;

  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render("host/home-Added", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
};

