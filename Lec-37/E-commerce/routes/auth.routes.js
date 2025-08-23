const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const { registerSchema } = require("../validators/auth");
const UserModel = require("../models/User.model");
const passport = require("passport");

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", validate(registerSchema), async (req, res) => {
  try {
    const { username, email, role, password } = req.body;
    const user = new UserModel({ username, email, role });
    await user.setPassword(password);
    await user.save();
    req.flash("success", "Registered successfully, Please login");
    res.redirect("/login");
  } catch (error) {
    console.log("error in register controller", error)
    res.render("error.ejs", { error: error.message });
  }
});

router.post("/login", passport.authenticate('local', {
  failureRedirect: "/login",
  successRedirect: "/products",
  failureFlash: true,
  successFlash: true,
  successMessage: "Logged in successfully!"
}))

router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/products');
  });
});

module.exports = router;
