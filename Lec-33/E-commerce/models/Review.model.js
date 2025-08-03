const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  text: {
    type: String
  }
})

module.exports = mongoose.model("Review", reviewSchema);