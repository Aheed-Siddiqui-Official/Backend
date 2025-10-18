const logical = () => {
  let x = 10;
  if ((x = 5)) {
    console.log("x = 5");
  } else {
    console.log("num is not 10");
  }
};

module.exports = logical;
