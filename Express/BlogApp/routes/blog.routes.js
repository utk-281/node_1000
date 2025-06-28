const { Router } = require("express");
const {
  addBlog,
  fetchAllBlogs,
  fetchOneBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");
const { authenticate } = require("../middlewares/auth.middleware");

const router = Router();

router.post("/add", authenticate, addBlog); // injected authenticate middleware
router.get("/blogs", fetchAllBlogs);
router.get("/blog/:id", fetchOneBlog);
router.patch("/blog/:id", authenticate, updateBlog);
router.delete("/blog/:id", authenticate, deleteBlog);

module.exports = router;
