const fs = require("fs");

const homePage = (req, res) => {
  res.send("home page");
};

const signUpPage = (req, res) => {
  fs.createReadStream("/index.html").pipe(res);
};

module.exports = { homePage, signUpPage };
