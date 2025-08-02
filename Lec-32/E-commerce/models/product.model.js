const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 100000
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Product", productSchema);