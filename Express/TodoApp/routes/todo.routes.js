const { Router } = require("express");
const { addTodo, fetchAllTodo } = require("../controllers/todo.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const router = Router();

router.post("/add", authenticate, addTodo);
router.get("/todo", authenticate, fetchAllTodo);

module.exports = router;
