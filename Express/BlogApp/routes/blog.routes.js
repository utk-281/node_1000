const { Router } = require("express");
const { addBlog } = require("../controllers/blog.controller");
const { authenticate } = require("../middlewares/auth.middleware");

const router = Router();

router.post("/add", authenticate, addBlog); // injected authenticate middleware

module.exports = router;
