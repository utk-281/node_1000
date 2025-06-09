const express = require("express");

const myRoutes = require("./routes");

const app = express();

//! middleware
app.use(express.urlencoded({ extended: true })); // this only parses html form-data
app.use(express.json());
app.use("/api", myRoutes); //! middleware

//! listen()
app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log(`server running at http://localhost:9000`);
});

//! touch is used to create a file
//! mkdir is used to create a directory/folder

//! in .json file, we can set our own scripts, like "start": "nodemon server.js" ==> where start is a in built script, so to use this script we can type "npm start"
//? for any other different user-defined script we should use" npm run scriptName"

//! http://localhost:portNumber/api_version/endpoint(path)

//? steps to use postman

//~ 1) click on workspace and select create workspace.
//~ 2) select blank workspace and click on next.
//~ 3) provide your workspace name and click on create.
//~ 4) create a collection and name it.
//~ 5) add requests in the collection to check the api's.
//~ 6) select the method, provide the correct url and send the request.

//! API ==> Application Programming Interface : it is a set of rules that allows two or more software applications to communicate with each other.

//! RESTful API ==> representational state transfer API : it is also a type of API which REST architecture
//? 1 stateless communication ==> communication without storing any data on the server
//? 2) HTTP methods ==> get, post, etc.....
//? 3) url endpoints ==>)
// /register == post
// /login == post
// /users == get
// /users/:id == put/patch
// /users/:id == get
//?  4) caching ==> TODO
//?  5) layers ==> TODO
//?  6) req and res ==> data is exchanged in json or xml format

// http://localhost:9000/api/submit ==> "/submit" endpoint. route. path

//! mongoose ==> it is a library for nodeJS to work with mongodb
//? 1) we can create a schema (structure).
//? 2) we can validate the data.
//? 3) PERFORM CRUD OPERATIONS.
//? 4) perform complex queries.
