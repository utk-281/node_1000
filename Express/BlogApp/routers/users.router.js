const { Router } = require("express");
const {
  addUser,
  fetchAllUsers,
  fetchOneUser,
  updateUser,
  deleteUser,
  login,
} = require("../controllers/users.controller");

const router = Router();

router.post("/add", addUser);

router.get("/all", fetchAllUsers);

router.get("/one/:id", fetchOneUser);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

router.post("/login", login);

module.exports = router;
