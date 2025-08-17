const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/User.model");
const PORT = process.env.PORT || 5000;
const bcrypt = require("bcrypt");
const session = require("express-session");

mongoose
  .connect("mongodb://127.0.0.1:27017/auth_demo_mar25")
  .then(() => console.log("DB connected!"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "somesecret"
}))

const isAuthenticated = (req, res, next) => {
  if(!req.session.user) {
    return res.redirect("/login");
  }
  next();
}

// Set EJS as Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", isAuthenticated, (req, res) => {
  const user = req.session.user;
  res.render("home", {user})
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // TODO: convert password to hash
  const hashedPassword = await bcrypt.hash(password, 10);

  await UserModel.create({ username, password: hashedPassword });
  res.redirect("/login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({username});
  if(!user || user.password != password) {
    return res.redirect("/login")
  }

  req.session.user = user;
  res.redirect("/")
})

app.get("/logout", (req, res) => {
  delete req.session.user;
  res.redirect('/login');
})

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
