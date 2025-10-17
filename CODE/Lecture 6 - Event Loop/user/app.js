const http = require("http");
const requestHandler = require('./user');

const server = http.createServer(requestHandler);

//call this port no on browser
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
