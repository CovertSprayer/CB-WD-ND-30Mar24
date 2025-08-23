const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String
  },
  role: {
    type: String,
    required: true,
    enum: ["buyer", "seller"]
  },
  wishlist: [{
    type: mongoose.Types.ObjectId,
    ref: "Product"
  }]
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);