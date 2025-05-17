function printName(name) {
  console.log("hello: ", name);
}

// console.log(printName);
console.log(printName);
printName("abc");

let arr = [1, 2, 4, 5];
let arr2 = ["string"];

let obj = {
  a: "1234567",
};

// printName("abc");
// console.log(arr);
// console.log(obj);

//! we have 2 different types of exporting
//! 1) export using module.exports
// module.exports = obj;
// module.exports = arr;
// module.exports = printName;
//? in this case previous value of module.exports will be overwritten

module.exports = {
  printName,
  obj,
  arr2,
  arr,
};

/*
 {
  printName: function printName(name) {}
  arr: [1, 2, 4, 5];
  obj:{}
 }
 */

//! 2) second way of exporting

// console.log(printName("abc"));
exports.printName = function (name) {
  console.log("hello: ", name);
};

exports.myName = "abc";

exports.arrowFunction = () => {
  console.log("arrow function");
};
