const {postHandler} = require("./post");

const homeHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<title>Welcome</title>");
    res.write("<h1>Welcome to calculator</h1><hr />");
    res.write('<a href="/calculator">Calculator</a>');
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write("<title>Calculator</title>");
    res.write('<form action="/calculate-result" method="POST">');
    res.write('<input type="text" placeholder="Enter Num : 1" name="first">');
    res.write('<input type="text" placeholder="Enter Num : 2" name="second">');
    res.write('<input type="submit" value="Sum"></input>');
    res.write(" </form>");

    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return postHandler(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<title>Welcome</title>");
  res.write("<h1>404 Does not Exist</h1>");
  res.write('<a href="/">Go to Home</a>');
  return res.end();
};

exports.homeHandler = homeHandler;
