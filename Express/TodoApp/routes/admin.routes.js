const { Router } = require("express");
const {
  fetchAllUsers,
  fetchOneUser,
  fetchAllTodo,
  fetchOneTodo,
} = require("../controllers/admin.controller");
const { authenticate, authorize } = require("../middlewares/auth.middleware");
const router = Router();

router.get("/all-user", authenticate, authorize, fetchAllUsers);
router.get("/user/:id", authenticate, authorize, fetchOneUser);

router.get("/all-todo", authenticate, authorize, fetchAllTodo);
router.get("/todo/:id", authenticate, authorize, fetchOneTodo);

module.exports = router;
