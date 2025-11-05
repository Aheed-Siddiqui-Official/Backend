const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found for editing.");
      return res.redirect("/host/host-home-list");
    }
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit your Home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("host/host-home", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Home List",
      currentPage: "host-home",
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } =
    req.body;
  const home = new Home({
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description,
  });
  home.save().then(() => {
    console.log("Home saved Successfully");
  });

  res.redirect("/host/host-home-list");
};

exports.postEditHome = (req, res, next) => {
  // new work
  console.log("Home registration successful for:", req.body);
  const { id, houseName, price, location, rating, photoUrl, description } =
    req.body;

  Home.findById(id)
    .then((home) => {
      (home.houseName = houseName),
        (home.price = price),
        (home.location = location),
        (home.rating = rating),
        (home.photoUrl = photoUrl),
        (home.description = description),
        home
          .save()
          .then((result) => {
            console.log("Home updated", result);
          })
          .catch((err) => {
            console.log("Error while updating", err);
          });
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error while finding home", err);
    });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("thi sis homeid", homeId);

  Home.findByIdAndDelete(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("Error while deleting", error);
    });
};
