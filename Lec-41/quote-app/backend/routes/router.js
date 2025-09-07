
const router = require("express").Router();
const authRoutes = require("./auth.routes");
const blogRoutes = require("./blog.routes");
const userRoutes = require("./user.routes");

router.use("/auth", authRoutes);
router.use("/blogs", blogRoutes);
router.use("/users", userRoutes);

module.exports = router;