const { Router } = require("express");
const { registerUser, fetchAll, login } = require("../controllers/users.controller");

const router = Router();

router.post("/register", registerUser);
router.get("/all", fetchAll);
router.post("/login", login);

module.exports = router;
