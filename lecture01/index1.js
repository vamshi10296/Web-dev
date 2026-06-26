 const express = require("express");
const app = express();

const port = 3000;

// custom middleware
app.use((req, res, next) => {
  console.log("custom middleware");
  next();
});

// home route
app.get("/", (req, res) => {
  res.send("hello from server");
});

// user route
app.get("/user/:id/data", (req, res) => {
  const params = req.params;
  const id = params.id;

  console.log("user", id);
  res.send(id);
});

// product route
app.get("/product/:id/data", (req, res) => {
  const params = req.params;
  const id = params.id;

  console.log("product", id);
  res.send(id);
});

// server listen
app.listen(port, () => {
  console.log("server running on port " + port);
});