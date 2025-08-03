// const express = require("express");
// const router = express.Router();
const ProductModel = require("../models/Product.model");
const ReviewModel = require("../models/Review.model");

const router = require("express").Router();

router.post("/products/:productId/reviews", async (req, res) => {
try {
    // begin transaction
    const productId = req.params.productId;
    const { rating, text } = req.body;
  
    const review = await ReviewModel.create({ rating, text });
    const product = await ProductModel.findById(productId);
    product.reviews.push(review._id);
    await product.save();
  
    // commit transaction
  
    res.redirect(`/products/${productId}`);
} catch (error) {
  // rollback transaction
}
});

module.exports = router;
