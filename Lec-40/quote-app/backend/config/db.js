const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/jwtAuth");
    console.log("DB connected");
  } catch (error) {
    console.log("Error in DB connection", error)
  }
};

module.exports = connectDB;
