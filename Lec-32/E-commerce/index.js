require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const ProductModel = require("./models/product.model");
const PORT = process.env.PORT;

const app = express();
connectDB();

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("home.ejs");
});

// product routes

app.get("/products", async (req, res) => {
  const products = await ProductModel.find();
  res.render("product/list.ejs", { products });
});

app.get("/products/new", (req, res) => {
  res.render("product/add.ejs");
});

app.post("/products", async (req, res) => {
  const { name, price, image, description } = req.body;
  await ProductModel.create({ name, price, image, description });
  res.redirect("/products/new");
});

app.listen(PORT, () => {
  console.log("server is up at port", PORT);
});
