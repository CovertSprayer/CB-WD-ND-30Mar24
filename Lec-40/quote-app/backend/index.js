require("dotenv").config();
const express = require('express');
const router = require('./routes/router');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");
const { auth } = require('./middlewares/auth');

connectDB();

// Middleware
app.use(express.json());
app.use("/api", router);

// Routes
app.get('/', auth, (req, res) => {
  res.send('Working fine');
});


// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});