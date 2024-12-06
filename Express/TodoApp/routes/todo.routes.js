const { Router } = require("express");
const { addTodo, fetchAll, fetchOne } = require("../controllers/todo.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const router = Router();

router.post("/add", authenticate, addTodo);
router.get("/todo", authenticate, fetchAll);
router.get("/todo/:id", authenticate, fetchOne);

module.exports = router;
