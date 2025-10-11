console.log("MAS");

const fs = require('fs');

fs.writeFile("output.txt", "writing file", (err) => {
  if(err) console.log("error occurred");
  else console.log("file written successfully");
  
})