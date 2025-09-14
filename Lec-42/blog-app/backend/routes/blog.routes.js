const router = require("express").Router();
const { auth: authMiddleware } = require("../middlewares/auth");
const blogController = require("../controllers/blog.controller");

router.get("/", authMiddleware, blogController.getAllBlogs);
router.get("/:id", authMiddleware, blogController.getBlogById);
router.post("/", authMiddleware, blogController.createBlog);
router.put("/:id", authMiddleware, blogController.updateBlog);
router.delete("/:id", authMiddleware, blogController.deleteBlog);

module.exports = router;
