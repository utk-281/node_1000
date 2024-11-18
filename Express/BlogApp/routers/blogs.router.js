const { Router } = require("express");
const { addBlog } = require("../controllers/blogs.controller");

const router = Router();

router.post("/add", addBlog);

module.exports = router;
