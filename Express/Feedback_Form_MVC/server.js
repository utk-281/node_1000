const express = require("express");

const myRoutes = require("./routes");

const app = express();

app.use("/api", myRoutes);

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log(`server running at http://localhost:9000`);
});

//! touch is ued to create a file
//! mkdir is used to create a directory/folder

//! in .json file, we can set our own scripts, like "start": "nodemon server.js" ==> where start is a in built script, so to use this script we can type "npm start"
//? for any other different user-defined script we should use" npm run scriptName"
