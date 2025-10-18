const http = require("http");
const testingSyntax = require('./syntax');
const runTime = require('./runTime');
const logical = require('./logical');
const requestHandler = require('./user');
const practiceSet = require('./practiceSet');

// const server = http.createServer(requestHandler);

const server = http.createServer(practiceSet);

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   // testingSyntax();
//   // runTime();
//   logical();
// });

//call this port no on browser
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
