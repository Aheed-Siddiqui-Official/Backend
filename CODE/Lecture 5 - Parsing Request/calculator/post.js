postHandler = (req, res) => {
  console.log("In sum request handler", req.url);

  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);

    const bodyObject = Object.fromEntries(params);

    const result = Number(bodyObject.first) + Number(bodyObject.second);
    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write("<title>Welcome</title>");
    res.write(`<h1>Your sum is ${result} </h1>`);

    return res.end();
  });
};

exports.postHandler = postHandler;
