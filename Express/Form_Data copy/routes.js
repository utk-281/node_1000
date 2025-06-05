//! 1)
let { Router } = require("express");
const { displayHomePage, displayFormPage } = require("./controller");

//! 2)
let myRouter = Router();

//! home page
myRouter.get("/", displayHomePage);

//! form page
myRouter.get("/form", displayFormPage);

//! 3)
module.exports = myRouter;
