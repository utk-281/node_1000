// printName("abc");
// console.log(arr);
// console.log(obj);

//! we have 2 different types of importing

//! 1) import using require
//& let/const variableName = require("path of the file")

let payload = require("./app");
// console.log(payload.arrowFunction());
// console.log(payload.printName);
// console.log(payload.obj);
// console.log(payload.arr);

/*
payload={
  printName: [Function: print
Name],
  obj: { a: '1234567' },
  arr: [ 1, 2, 4, 5 ]
}


{
  printName: [Function (anony
mous)],
  myName: 'abc',
  arrowFunction: [Function (a
nonymous)]
}
 */

//! 2) destructure
// let { printName, myName, arrowFunction } = require("./app");
// printName("abc");
// console.log(arr);
// console.log(obj);
// console.log(arr2);

// let { arr } = require("./app");
// console.log(arr);
