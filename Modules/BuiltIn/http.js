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

// let http = require("http");
// const fs = require("fs");

//! to display something on UI we use write().
//! end() is used to end the current req-res cycle
//! to set the headers we use writeHead() ==> inside this method we pass, status code, status message and a content-type.

// let server = http.createServer((req, res) => {
//   // res.write("<h1> hello </h1>");
//   // console.log(req);
//   // res.end();

//   //! to display a HTML file
//   // res.writeHead(404, "myMessage", { "Content-Type": "text/html" });
//   // let data = fs.readFileSync("./index.html", "utf-8");
//   // console.log(data);
//   // res.write(data);
//   // res.end();

//   //! sending html file using streams
//   res.writeHead(200, "ok", { "Content-type": "text/html" });
//   let readStream = fs.createReadStream("./index.html", "utf-8");
//   readStream.pipe(res); // pipe() is internally call end().
// });

// server.listen(9000, (err) => {
//   //! error first callbacks
//   if (err) console.log(err);
//   console.log("server running at port 9000....");
// });

// const http = require("http");
// const fs = require("fs");

// let server = http.createServer((req, res) => {
//   //! sending css file
//   // res.writeHead(200, "ok", { "Content-type": "text/css" });
//   // let data = fs.createReadStream("./styles.css", "utf-8");

//   // data.pipe(res);

//   //! sending json file
//   res.writeHead(200, "ok", { "Content-type": "application/json" });
//   let data = fs.createReadStream("./data.json", "utf-8");
//   data.pipe(res);
// });

// server.listen(9000, (err) => {
//   if (err) console.log(err);
//   console.log("Server running......");
// });

// home page url  ==> https://nodejs.org/en
// about page url ==>  https://nodejs.org/en
// download page ==>  https://nodejs.org/en/download/package-manager

const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  // console.log(req.url);

  //? this is home page
  if (req.url === "/") {
    // res.end("this is home page");
    res.writeHead(200, "ok", { "Content-type": "text/html" });
    fs.createReadStream("./public/index.html").pipe(res);
  }
  //? this is about page
  else if (req.url === "/about") {
    res.writeHead(200, "ok", { "Content-type": "text/html" });
    fs.createReadStream("./public/aboutUs.html").pipe(res);
  }
  //? this is contact page
  else if (req.url === "/contact") {
    res.writeHead(200, "ok", { "Content-type": "text/html" });
    fs.createReadStream("./public/contact.html").pipe(res);
  }
  //? this is download page
  else if (req.url === "/download/package-manager") {
    res.writeHead(200, "ok", { "Content-type": "text/html" });
    fs.createReadStream("./public/download.html").pipe(res);
  }
  //? this is css file
  else if (req.url === "/styles") {
    res.writeHead(200, "ok", { "Content-type": "text/css" });
    fs.createReadStream("./public/styles.css").pipe(res);
  }

  //? this is not found (handling invalid endpoints)
  else {
    res.writeHead(200, "ok", { "Content-type": "text/html" });
    res.end("<h1> page not found </h1>");
  }
});

server.listen(9000, (err) => {
  if (err) console.log(err);

  console.log("Server running");
});
