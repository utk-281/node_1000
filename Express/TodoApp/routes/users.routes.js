const { Router } = require("express");
const { registerUser, fetchAll, login, logout } = require("../controllers/users.controller");

const router = Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
