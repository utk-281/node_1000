const express = require("express");

const router = require("./router/router");

const app = express();

app.use(express.urlencoded({ extended: true }));
// qs
// queryString

app.use("/abc", router);

app.listen(9000, (err) => {
  {
    if (err) console.log(err);
    console.log("server running... at port 9000");
  }
});
