//! 3 tier architecture ==> req-res ==> some protocol ==> http

//? different http methods
//~ get    ===> it is used to fetch resource/data from the server
//~ post   ===> it is used to send the data/resource to the server
//~ delete ===> it is used to delete the resource/data from the database
//~ put    ===>
//~ patch  ===> put and patch both are used to update the resource/data

//! http is a module in NodeJS, which is used to create servers.

//& steps to create a server
//! 1) import http module
//! 2) use createServer() to create a server, which accepts a callback function
//! 3) AND THAT CALLBACK FUNCTION ACCEPTS TWO PARAMETERS REQ AND RES.
//! 4) assign a port number with the help of listen(), passing the callback is not mandatory.

const http = require("http");
const fs = require("fs");

// console.log(http);
// console.log(http.METHODS);
// console.log(http.STATUS_CODES);

// let server = http.createServer((req, res) => {
//   //! if we want to display any message on the UI: write("message") or end("message")
//   // res.write("hello from server, used write()");
//   //? =============================================================
//   // end() : it is used to terminate the req-res cycle.
//   // res.end();
//   //? =============================================================
//   // res.end("message passed from end()");
//   // res.write("after end()");
//   //? =============================================================
//   // res.write("hello world");
//   // res.end();
//   // res.write("after end()"); //~ cannot write after end()
//   //? =============================================================
//   // res.end(req);
//   // console.log(req.method);
//   // console.log(req.url);
//   // res.end({ name: "abc" });
//   // console.log(res);
// });

// server.listen(9000, (err) => {
//   if (err) console.log(err);
//   console.log("server running at port 9000!!!!!");
// });

//! to tap into the server go to browser and type localhost:port_number
//? localhost:9000

//! to kill the server go to the terminal and press "ctrl + c"

//! after every modification, we have to kill the server and save the changes and start the server again

/*
req = {
  app:
  body:
  headers:
  cookies:
  date:
  method:
  ..
  ..
  ..
}

res = {
  statusCode:
  statusMessage:
  headers:
  contentLength:
  connection-type
  cookies:
  ..
  ..
  ..
}

write("message")
*/

//? before sending the response we have to set the headers ==> writeHead()
//? writeHead(statusCode, {"Content-Type":"value"})
// statusCode ==> 1xx(informational), 2xx(success), 3xx(redirecting), 4xx(client error), 5xx(server error)
// content-type ==> the data which you are sending as a response
// ==> html : text/html
// ==> css : text/css
// ==> js : application/js
// ==> json : application/json ==> it is language independent

// let server = http.createServer((req, res) => {
//! ================== sending html contents to the client ==================
// res.writeHead(200, { "Content-Type": "text/html" });
// res.end("<h1>hello world</h1>");
// res.write(`<h1>hello world</h1>`);
// res.end();
//? ================================================
// let htmlContents = fs.readFileSync("./Pages/index.html", "utf-8");
// res.write(htmlContents);
// res.end();
//? ================================================
// res.writeHead(200, { "Content-Type": "text/html" });
// let readInChunks = fs.createReadStream("./Pages/index.html", "utf-8"); // source
// // destination ==> res
// readInChunks.pipe(res); // pipe() is internally calling end()
//! ================== sending css contents to the client ==================
// res.writeHead(200, { "Content-Type": "text/css" });
// fs.createReadStream("./Pages/styles.css", "utf-8").pipe(res);
//! ================== sending json data to the client ==================
// res.writeHead(200, { "Content-Type": "application/json" });
// let jsonData = fs.createReadStream("./Pages/data.json", "utf-8");
// jsonData.pipe(res);
//! ================== sending js object to the client ==================
// res.writeHead(200, { "Content-Type": "application/json" });
// let object = {
//   name: "abc",
//   age: 23,
//   id: 123,
// };
// res.end(JSON.stringify(object));
// });

// server.listen(9000, (err) => {
//   if (err) console.log(err);
//   console.log("server running at port 9000");
// });

// let x = https://nodejs.org/en
//! nodeJS website url home page ==> https://nodejs.org/en ==> "/" ==> this is the default endpoint for home/landing page
//! about page ==> https://nodejs.org/en/about ==> "/about"
//! download page ==> https://nodejs.org/en/download ==> "/download"
//! docs page ==> https://nodejs.org/docs/latest/api/ ==> "/docs/latest/api/"

// https://www.wikipedia.org/
// https://en.wikipedia.org/wiki/Main_Page

//? these are called as endpoints

//? handling user's multiple endpoint requests is called as routing

// http
//   .createServer((req, res) => {
//     console.log(req.url);
//     let endPoint = req.url;
//     //! displaying html page
//     if (endPoint === "/html") {
//       res.end("html page");
//     }
//     //! displaying css page
//     else if (endPoint === "/css") {
//       res.end("css page");
//     }
//     //! displaying json data
//     else if (endPoint === "/json") {
//       res.end("json data");
//     }
//     //! page not found
//     else {
//       res.end("page not found");
//     }
//   })
//   .listen(9000, (err) => {
//     if (err) console.log(err);
//     console.log("server running at port 9000");
//   });

//! create a dummy nodeJS website using routing

http
  .createServer((req, res) => {
    let endPoint = req.url;
    //! if endpoint is "/" ==> home page
    if (endPoint === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      // console.log(res._header);
      fs.createReadStream("./Pages/index.html", "utf-8").pipe(res);
    }
    //! if endpoint is "/about" ==> about page
    else if (endPoint === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream("./Pages/about.html", "utf-8").pipe(res);
    }
    //! if endpoint is "/download" ==> download page
    else if (endPoint === "/download") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream("./Pages/download.html", "utf-8").pipe(res);
    }
    //! page not found
    else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>page not found</h1>");
    }
  })
  .listen(9000, (err) => {
    if (err) console.log(err);
    console.log(`server running at http://localhost:9000`);
  });
