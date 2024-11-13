const { Router } = require("express");
const { homePage, signUpPage } = require("../controllers/controller");

const router = Router();

router.get("/", homePage);
router.get("/sign-up", signUpPage);

module.exports = router;
