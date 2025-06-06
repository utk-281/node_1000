//! 1)
let { Router } = require("express");
const {
  displayHomePage,
  displayFormPage,
  handleFormSubmit,
  displayAllUsers,
} = require("./controller");

//! 2)
let myRouter = Router();

//! home page
myRouter.get("/", displayHomePage);

//! form page
myRouter.get("/form", displayFormPage);

//! fetching data from database
myRouter.get("/users", displayAllUsers);

//! handling form submission
myRouter.post("/submit", handleFormSubmit);

//! 3)
module.exports = myRouter;
