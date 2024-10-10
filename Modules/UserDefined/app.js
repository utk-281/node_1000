let add = (a, b) => {
  return a + b;
};

let sub = (a, b) => {
  return a - b;
};

//! we have two different ways to export a code

//! 1st way of exporting ==>
// module.exports = { add, sub , divide, multiply };

//! 2nd way of exporting ==>
// exports.divide = (a, b) => {
//   return a / b;
// };

// exports.multiply = (a, b) => {
//   return a * b;
// };

let { obj, arr, a } = require("./index");

console.log(obj);
console.log(arr);
console.log(a);
