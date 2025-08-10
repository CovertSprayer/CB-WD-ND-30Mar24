require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const path = require("path");
const PORT = process.env.PORT;

const app = express();
app.engine("ejs", ejsMate);

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

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
