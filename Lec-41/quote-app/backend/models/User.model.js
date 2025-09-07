const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
})

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;