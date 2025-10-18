const practiceSet = () => {
  let width = 10;
  let height = 5;

  const calculateArea = (width, height) => {
    return width * height;
  };

  console.log(calculateArea(width, height));

  let area;

  if (area > 100) {
    console.log("the area is large");
  } else if (calculateArea > 100) {
    console.log("area is greater than or equal to 100");
  } else {
    console.log("the area is small");
  }
};

module.exports = practiceSet;
