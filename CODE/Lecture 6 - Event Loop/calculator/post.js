postHandler = (req, res) => {
  // No:1
  console.log("In sum request handler", req.url);

  const body = [];

  // 2:when data comes then execute
  req.on("data", (chunk) => body.push(chunk));

  // 3:when data ends then execute
  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);

    const bodyObject = Object.fromEntries(params);

    const result = Number(bodyObject.first) + Number(bodyObject.second);
    console.log(result);

    // 4:Runs before 2 and 3 thats we write in res.end b/c when the data ends then we want to run the code otherwise if we write outside it will run first before data end and give undefined
    res.setHeader("Content-Type", "text/html");
    res.write("<title>Welcome</title>");
    res.write(`<h1>Your sum is ${result} </h1>`);

    return res.end();
  });
};

exports.postHandler = postHandler;
