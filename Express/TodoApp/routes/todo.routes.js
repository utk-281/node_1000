const { Router } = require("express");
const {
  addTodo,
  fetchAll,
  fetchOne,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const router = Router();

router.post("/add", addTodo);
router.get("/todo", fetchAll);
router.get("/todo/:id", fetchOne);
router.delete("/todo/:id", deleteTodo);
router.patch("/update/:id", updateTodo);

module.exports = router;
