const { Router } = require("express");
const { addBlog, fetchAllBlogs, fetchOneBlog } = require("../controllers/blog.controller");
const { authenticate } = require("../middlewares/auth.middleware");

const router = Router();

router.post("/add", authenticate, addBlog); // injected authenticate middleware
router.get("/blogs", fetchAllBlogs);
router.get("/blog/:id", fetchOneBlog);

module.exports = router;
