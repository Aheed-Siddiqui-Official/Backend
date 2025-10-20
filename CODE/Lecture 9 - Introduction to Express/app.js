// External Modules
const express = require('express');

const app = express();

// / will run on both / and /submit-details
// app.use to handle middlewares
app.get(('/'), (req, res, next) => {
  console.log("came in 1st middleware", req.url, req.method);
  // res.send('<p>Came from 1st middleware</p>');
  next();
})

app.post('/submit-details', (req, res, next) => {
  console.log("came in 2nd middleware", req.url, req.method);
  res.send('<p>MAS</p>');
})

app.use(('/'), (req, res, next) => {
  console.log("came in another middleware", req.url, req.method);
  res.send('<p>Came from another middleware</p>');
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
