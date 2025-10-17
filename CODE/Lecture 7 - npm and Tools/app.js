const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

//call this port no on browser
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
