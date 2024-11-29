const { Router } = require("express");
const {
  addUser,
  fetchAllUsers,
  fetchOneUser,
  updateUser,
  deleteUser,
  login,
  logout,
} = require("../controllers/users.controller");
const { verify } = require("jsonwebtoken");
const { verifyUser } = require("../middlewares/auth");

const router = Router();

router.post("/add", addUser);

router.get("/all", fetchAllUsers);

router.get("/one/:id", fetchOneUser);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", verifyUser, deleteUser);

router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
