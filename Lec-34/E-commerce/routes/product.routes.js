// product routes
const express = require("express");
const ProductModel = require("../models/Product.model");
const validate = require("../middlewares/validate");
const { createProductSchema } = require("../validators/product");
const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.render("product/list.ejs", { products });
  } catch (error) {
    res.render("error", { error: error });
  }
});

router.get("/products/new", (req, res) => {
  res.render("product/add");
});

router.post("/products", validate(createProductSchema), async (req, res) => {
  try {
    const { name, price, image, description } = req.body;
    await ProductModel.create({ name, price, image, description });
    res.redirect("/products/new");
  } catch (error) {
    res.render("error", { error: error });
  }
});

// get product
router.get("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    // const product = await ProductModel.findById(productId);
    const product = await ProductModel.findById(productId).populate("reviews");
    // findOne({_id: productId})
    res.render("product/show.ejs", { product });
  } catch (error) {
    console.log(error)
    res.render("error", { error: error });
  }
});

router.get("/products/:id/edit", async (req, res) => {
  const productId = req.params.id;
  const product = await ProductModel.findById(productId);
  res.render("product/edit.ejs", { product });
});

router.put("/products/:id", async (req, res) => {
  const productId = req.params.id;
  const { name, price, image, description } = req.body;

  const product = await ProductModel.findById(productId);

  if (name) product.name = name;
  if (price) product.price = price;
  if (image) product.image = image;
  if (description) product.description = description;

  await product.save();
  res.redirect("/products");
});

router.delete("/products/:id", async (req, res) => {
  const productId = req.params.id;
  await ProductModel.findByIdAndDelete(productId);
  res.redirect("/products");
});

module.exports = router;
