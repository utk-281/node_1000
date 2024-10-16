// let http = require("http");
// console.log(http);

// http methods

//! GET ==> it is used to fetch resources fom server

//! POST ==> it is used to send resources

//! DELETE ==> it is used to delete resources

//! PUT and PATCH ==> these are used to update the resources

// createServer() is used to create a server, which accepts a callback function. the callback function has two parameters, request and response.

// let server = http.createServer((req, res) => {
//   res.write("hello from server");
//   res.end();
// });

// to assign a port to a server we use listen(), this methods accepts the port number as first parameter and a callback function as second parameter. (this callback is not mandatory)

// server.listen(9000);

let http = require("http");
const fs = require("fs");

//! to display something on UI we use write().
//! end() is used to end the current req-res cycle
//! to set the headers we use writeHead() ==> inside this method we pass, status code, status message and a content-type.

let server = http.createServer((req, res) => {
  // res.write("<h1> hello </h1>");
  // console.log(req);
  // res.end();

  //! to display a HTML file
  // res.writeHead(404, "myMessage", { "Content-Type": "text/html" });
  // let data = fs.readFileSync("./index.html", "utf-8");
  // console.log(data);
  // res.write(data);
  // res.end();

  //! sending html file using streams
  res.writeHead(200, "ok", { "Content-type": "text/html" });
  let readStream = fs.createReadStream("./index.html", "utf-8");
  readStream.pipe(res); // pipe() is internally call end().
});

server.listen(9000, (err) => {
  //! error first callbacks
  if (err) console.log(err);
  console.log("server running at port 9000....");
});
