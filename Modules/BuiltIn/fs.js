// syntax to import built-in modules
// let variable-name = require(" node:module-name ")
//? "node:" ==> it is not mandatory, we can remove this if we want.
// module-name ==> fs, http, crypto, os.

let fs = require("node:fs");
// console.log(fs);

//! fs ==> it stands for file system. this module provides us some functionality to perform CRUD of files present on our OS.

//? CRUD ==> create, read, update, delete

//! ===================== CRUD on files using Synchronous functions

//! 1) ==== reading a file synchronously
// method name ==> readFileSync()
// syntax ==> fs.readFileSync("path", "encoding")

/* console.log("Start");
console.log("middle");

// let data = fs.readFileSync("./index.html");
// console.log(data.toString()); // this will return a buffer value (array of binary numbers). to convert buffer to string format use toString().

let data = fs.readFileSync("./index.html", "utf-8"); // "utf-8" ==> represents string format
console.log(data);

console.log("end"); */

// let data = fs.readFileSync("../UserDefined/index.js", "utf-8"); // "utf-8" ==> represents string format
// console.log(data);

//! 2)============== creating a file synchronously
// method name ==> writeFileSync()
// syntax ==> fs.writeFileSync("path/file-name", "data to be written")

// console.log("start");
// console.log("middle");

// fs.writeFileSync("../../data.txt", "console.log(`hi`)");
// console.log("file created");

// console.log("end");

// ? if file-name does not exists it will create a new file with provided data, otherwise it will simply over-write the existing data.
