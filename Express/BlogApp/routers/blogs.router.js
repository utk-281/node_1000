const { Router } = require("express");
const {
  addBlog,
  fetchAllBlogs,
  fetchOneBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/users.controller");
const router = Router();

router.post("/add", addBlog);

router.get("/all", fetchAllBlogs);

router.get("/one/:id", fetchOneBlog);

router.delete("/delete/:id", deleteBlog);

router.patch("/update/:id", updateBlog);

module.exports = router;
