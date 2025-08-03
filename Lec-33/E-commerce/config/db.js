const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.mongodbURL);
    console.log("DB connected!")
  } catch (err) {
    console.log("Something went wrong in DB connection", err)
  }
}

module.exports = connectDB