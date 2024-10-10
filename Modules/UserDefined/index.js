//! we have to ways to import the file

//! 1st way ==>
// syntax ==> "let variable-name = require("path of that file")"

// let value = require("./app.js");
// console.log(value);
// console.log(value.add(2, 3));
// console.log(value.sub(2, 3));

//! usually all the exporting statements are written at last of the file and all the import statements are written at the top of the file

//! 2nd way of importing ==> destructuring
// let { add, sub } = require("./app");

// console.log(add(1, 2));
// console.log(sub(1, 2));

// let { divide, multiply } = require("./app");
// console.log(divide(10, 2));
// console.log(multiply(10, 2));

let obj = {
  key1: "value",
  key2: "value2",
};

let arr = [1, 2, "string, false"];

let a = 20;

module.exports = {
  obj,
  arr,
  a,
};
