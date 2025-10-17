const http = require("http");
const {homeHandler} = require('./home')

const server = http.createServer(homeHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
