const { Router } = require("express");
const { addBlog, fetchAllBlogs, fetchOneBlog } = require("../controllers/users.controller");
const router = Router();

router.post("/add", addBlog);

router.get("/all", fetchAllBlogs);

router.get("/one/:id", fetchOneBlog);

module.exports = router;
