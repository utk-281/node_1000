//! fs ==> fs stands for file system. this module provide utilities for working with files.
// working means ==> CRUD (Create, read, update, delete)

//! import the built-in module
// let variableName = require("module-name")
// let variableName = require("node:module-name")
//? node: for core modules, this is not mandatory
let fs = require("fs");
// let fsNode = require("node:fs");
// console.log(fs);

//! ============= using fs synchronously ==========================

//~ 1)===== creating a file =====
// method ==> writeFileSync()
// syntax ==> writeFileSync("filename/path.ext", "data")
//? passing all the parameters is mandatory

// console.log("Start");
// fs.writeFileSync("../app.js", "let b = 20");
// console.log("middle");
// console.log("end");

//& if the file is already present then it will be overwritten otherwise a new file will be created

//~ 2)===== reading a file =====
// method name ==> readFileSync()
// syntax ==> readFileSync("path", "encoding")
//? passing the second parameter is not mandatory
// "path" ==> path of the file
// "encoding" ==> encoding type ("utf-8", "utf-16", "binary", etc..)
/*
console.log("Start");
let result = fs.readFileSync("./app.js");
console.log(result); // <Buffer 6c 65 74 20 62 20 3d 20 32 30> ==> hexadecimal
//& this buffer is an array. [ 000101010010101010101001101110110001 ]
TODO ==> buffer and streams
console.log("middle");
//& to read the contents of the file, use toString()
console.log(result.toString());
console.log("end");
*/

// let result = fs.readFileSync("./app.js", "utf-8");
// encoding ==> it represents the type of data you want to display
// "utf-8" ==> human readable format (letters, numbers, symbols, special characters) (unicode transformation format)
// console.log(result);

//~ 3) ===== updating a file ===== (update ==> append (adding something at last))
// method ==> appendFileSync()
// syntax ==> appendFileSync("path", "new data")

// console.log("Start");
// fs.appendFileSync("../../Starter/test.java", "int arr[]=[1,2,3,4]");
// "\t" ==> multiple spaces
// "\n" ==> new line
// console.log("middle");
// console.log("end");
//& if the file is already present then it will append the data otherwise a new file will be created with the given data.

//~ 4) ===== deleting a file =====
// method ==> unlinkSync()
// syntax ==> unlinkSync("path")

// fs.unlinkSync("./app.js");
// fs.unlinkSync("../../Starter/test.txt");
// console.log("file deleted");
