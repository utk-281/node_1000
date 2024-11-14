const { Router } = require("express");
const { homePage, formPage, handleSubmit } = require("../controller/controller");

const router = Router();

router.get("/", homePage);

router.get("/register", formPage);

router.post("/form", handleSubmit);

module.exports = router;
