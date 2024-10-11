// syntax to import built-in modules
// let variable-name = require(" node:module-name ")
//? "node:" ==> it is not mandatory, we can remove this if we want.
// module-name ==> fs, http, crypto, os.

let fs = require("node:fs");
// console.log(fs);

//! fs ==> it stands for file system. this module provides us some functionality to perform CRUD on files present on our OS. and also we can interact with directories/folder.

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

//! 3) ============== updating a file synchronously
// method name ==> appendFileSync()
// syntax ==> fs.appendFileSync("path/file-name", "new data")

// fs.appendFileSync("./data.txt", "new data");
// console.log("file updated");

//? if the file-name does not exists it will create a new file with provided data, if the file is present it will simply append the data.

//! 4)================= deleting a file synchronously
// method name ==> unlinkSync()
// syntax ==> fs.unlinkSync("path/file-name")

/* console.log("start");
console.log("middle");

fs.unlinkSync("./server.js");

console.log("end");
 */

//! 5) =================== renaming a file/folder sync
// method name ==> renameSync()
// syntax ==> fs.renameSync("old-file-name", "new-file-name")

// fs.renameSync("../../index.html", "index.csv");
// console.log("file renamed");

//? copy the contents of "fs.js" and paste it in new file "fs2.js"
// let readFile = fs.readFileSync("./fs.js", "utf-8");
// fs.writeFileSync("./fs2.js", readFile);
// console.log("data copied");

//! 6) ============= creating a directory/folder synchronously
// method-name ==> mkdirSync()
// syntax ==> fs.mkdirSync("path/folder-name")

// fs.mkdirSync("./newFolder");
// console.log("folder created");

//! 7) ============= removing a directory/folder synchronously
// method-name ==> rmdirSync()
// syntax ==> fs.rmdirSync("path/folder-name")

// fs.rmdirSync("./newFolder");
// console.log("folder removed");

//! src >> controllers >> userController >> app.js
//! creating
// fs.mkdirSync("./src");
// console.log("src created");
// fs.mkdirSync("./src/controllers");
// console.log("controllers created");
// fs.mkdirSync("./src/controllers/userController");
// console.log("userController created");
// fs.writeFileSync("./src/controllers/userController/app.js", "console.log(`hello`)");

//! deleting
// fs.unlinkSync("./src/controllers/userController/app.js");
// fs.rmdirSync("./src/controllers/userController");
// fs.rmdirSync("./src/controllers");
// fs.rmdirSync("./src");
