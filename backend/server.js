const express = require("express");
var cors = require("cors");
const products = require("./data/products");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Backend Server of COURSEJAM is Running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => {
    return p._id === req.params.id;
  });
  res.json(product);
});

app.listen(5000, console.log("COUESEJAM Backend Server Running at port 5000"));
