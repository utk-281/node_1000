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
const { resolve } = require("dns/promises");
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
// ==> json : application/json

let server = http.createServer((req, res) => {
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
  res.writeHead(200, { "Content-Type": "application/json" });
  let jsonData = fs.createReadStream("./Pages/data.json", "utf-8");
  jsonData.pipe(res);

  //! ================== sending js object to the client ==================
  // res.writeHead(200, { "Content-Type": "application/json" });
  // let object = {
  //   name: "abc",
  //   age: 23,
  //   id: 123,
  // };
  // res.end(JSON.stringify(object));
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at port 9000");
});
