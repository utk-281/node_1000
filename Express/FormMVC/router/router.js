const { Router } = require("express");
const { homePage, formPage, handleSubmit, getData } = require("../controller/controller");

const router = Router();

router.get("/", homePage);

router.get("/register", formPage);

router.post("/form", handleSubmit);

router.get("/users", getData);

module.exports = router;

//! http://localhost:9000/abc/users
