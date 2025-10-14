const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Home</h1>");
    res.write('<a href="/" target="_blank">Home</a><br>');
    res.write('<a href="/men" target="_blank">Men</a><br>');
    res.write('<a href="/women" target="_blank">Women</a><br>');
    res.write('<a href="/kids" target="_blank">Kids</a><br>');
    res.write('<a href="/cart" target="_blank">Cart</a><br>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Men</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Women</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Kids</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Cart</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
