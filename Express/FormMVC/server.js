const express = require("express");

require("dotenv").config();

const router = require("./router/router");

const app = express();

app.use(express.urlencoded({ extended: true }));
// qs
// queryString

app.use("/abc", router);

app.listen(process.env.PORT, (err) => {
  {
    if (err) console.log(err);
    console.log(`server running at port ${process.env.PORT}`);
  }
});
