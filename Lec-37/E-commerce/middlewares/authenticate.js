module.exports.isLoggedIn = function (req, res, next) {
  try {
    if(req.headers.xhr && !req.isAuthenticated()){
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      })
    }

    if (!req.isAuthenticated()) {
      req.flash("error", "Please login");
      return res.redirect("/login");
    }

    next();
  } catch (error) {
    res.render("error", { error });
  }
};

module.exports.isSeller = function(req, res, next) {
  try {
    const user = req.user;
    if(user.role !== 'seller'){
      return res.render("error", {error: "Not authorized!"});
    }
    next();
  } catch (error) {
    res.render("error", { error });
  }
}
