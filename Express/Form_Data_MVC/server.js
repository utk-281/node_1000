const express = require("express");
let myRoutes = require("./routes");

const app = express();

//! middleware
app.use(express.urlencoded({ extended: true })); // ==> use qs module : parsing data html form data
app.use("/abc", myRoutes); // "/abc" ==> api versioning/ static path
// app.use(function(req, res, next){
// statements ===> req.body modify
//  next()
// })

// {userName:"abc", userPassword:"123", userEmail:"abc@gmail.com"}

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at port 9000, http://localhost:9000");
});

//! if you want to use ES format syntax, add one property in package.json file ==> "type":"module"

// node --watch filename ==> watch mode (built-in command) ==> this will only watch one file
//! nodemon ==> .js file save ==> server will restart
//? to install nodemon as development dependency ==> npm i nodemon -D
// nodemon filename

// npm i nodemon -global
