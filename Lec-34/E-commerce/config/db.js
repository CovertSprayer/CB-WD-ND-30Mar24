const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.mongodbURL);
    // await mongoose.connect('mongodb://127.0.0.1:27017/e_com_april_25');
    console.log("DB connected!")
  } catch (err) {
    console.log("Something went wrong in DB connection", err)
  }
}

module.exports = connectDB