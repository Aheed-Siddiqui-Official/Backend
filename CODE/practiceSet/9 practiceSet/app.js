const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("First mid", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second mid", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("third mid", req.url, req.method);
//   res.send('<p>Practice Set</p>');
// })

app.get("/", (req, res, next) => {
  console.log("fourth mid", req.url, req.method);
  res.send(`<p>Fourth Mid</p>`);
  next();
});

app.get("/contact-us", (req, res, next) => {
  console.log("fifth mid", req.url, req.method);
  res.send(`<p>Please give your details</p>
    <form action="/contact-us" method="POST">
    <input type="text" name="Name" placeholder="name">
    <input type="text" name="Email" placeholder="email">
    <input type="Submit">
  </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("sixth mid", req.url, req.method);
  res.send(`<p>Thanks for your details</p>`)
})

PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
