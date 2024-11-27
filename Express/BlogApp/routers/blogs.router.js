const { Router } = require("express");
const {
  addBlog,
  fetchAllBlogs,
  fetchOneBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogs.controller");
const { authenticate } = require("../middlewares/auth");

const router = Router();

router.post("/add", authenticate, addBlog);
//! example of router level middleware

router.get("/all", fetchAllBlogs);

router.get("/one/:id", fetchOneBlog);

router.delete("/delete/:id", deleteBlog);

router.patch("/update/:id", updateBlog);

module.exports = router;
