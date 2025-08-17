require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const path = require("path");
const PORT = process.env.PORT;
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const UserModel = require("./models/User.model");

const app = express();
app.engine("ejs", ejsMate);

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET
}))
app.use(flash());

// setting up passportjs
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(UserModel.authenticate()))

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// custom middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");

  next();
})

app.get("/", (req, res) => {
  res.render("home.ejs");
});

const productRoutes = require("./routes/product.routes");
const reviewRoutes = require("./routes/reviews.routes");
const authRoutes = require("./routes/auth.routes");

app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

app.listen(PORT, () => {
  console.log("server is up at port", PORT);
});
