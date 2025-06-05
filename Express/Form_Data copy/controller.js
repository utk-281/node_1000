const fs = require("fs");

let displayHomePage = (req, res) => {
  res.send("Landing page!!!");
};

let displayFormPage = (req, res) => {
  // res.send("form page!!!!");
  // fs.createReadStream("./form.html", "utf-8").pipe(res);
  let readData = fs.createReadStream("./form.html", "utf-8"); // source
  // destination => res ; source.pipe(destination)
  readData.pipe(res);
};

module.exports = {
  displayHomePage,
  displayFormPage,
};
