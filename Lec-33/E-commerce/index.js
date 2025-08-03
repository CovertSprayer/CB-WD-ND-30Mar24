require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const PORT = process.env.PORT;

const app = express();
app.engine("ejs", ejsMate);

connectDB();

app.use(express.urlencoded());
app.use(methodOverride('_method'));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

const productRoutes = require("./routes/product.routes");
const reviewRoutes = require("./routes/reviews.routes");

app.use(productRoutes);
app.use(reviewRoutes);

app.listen(PORT, () => {
  console.log("server is up at port", PORT);
});
