//! 1) manually import the router file
//! 2) use the imported variable inside a middleware

const express = require("express");

const abc = require("./routers/router");

const app = express();
app.use("/static", abc);
// /xyz ==> static path
// variableName1 ==> passes the flow to router file

app.listen(9000, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});
