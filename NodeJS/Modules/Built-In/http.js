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
//! 4) assign a port number with the help of listen()

const http = require("http");
// console.log(http);
// console.log(http.METHODS);
// console.log(http.STATUS_CODES);

let server = http.createServer((req, res) => {
  //   res.end("hello from server");
});

server.listen(9000, () => {
  console.log("server running at port 9000!!!!!");
});

//! to tap into the server go to browser and type localhost:port_number
//? localhost:9000

//! to kill the server go to the terminal and press "ctrl + c"

//! after every modification, we have to kill the server and save the changes and start the server again
