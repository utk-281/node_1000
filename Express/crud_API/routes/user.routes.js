const { Router } = require("express");
const { createUser, fetchAllUsers, fetchOneUser } = require("../controllers/user.controller");

const router = Router();

router.post("/create-user", createUser);
router.get("/all-users", fetchAllUsers);

router.get("/user/:id", fetchOneUser);

module.exports = router;
