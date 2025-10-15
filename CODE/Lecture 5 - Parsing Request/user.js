const fs = require("fs");

const userRequestHandler = ((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>");
    res.write("<h1>Enter your details</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Username"><br><br>'
    );
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  // Redirecting Requests
  else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    // New Work Start **************

    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);

      // Hard Work

      // const bodyObject = {};
      // for(const [key, value] of params.entries()) {
      //   bodyObject[key] = value;
      // }

      // Easy Work

      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });

    // New Work End ***************

    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like/Share/Subscribe</h1></body>");
  res.write("</html>");
  // return optional
  res.end();

  // process.exit();
});

module.exports = userRequestHandler;