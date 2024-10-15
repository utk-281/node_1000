let http = require("http");
// console.log(http);

// http methods

//! GET ==> it is used to fetch resources fom server

//! POST ==> it is used to send resources to server

//! DELETE ==> it is used to delete resources

//! PUT and PATCH ==> these are used to update the resources

// createServer() is used to create a server, which accepts a callback function. the callback function has two parameters, request and response.

let server = http.createServer((req, res) => {
  res.write("hello from server");
  res.end();
});

// to assign a port to a server we use listen(), this methods accepts the port number as first parameter and a callback function as second parameter. (this callback is not mandatory)

server.listen(9000);
