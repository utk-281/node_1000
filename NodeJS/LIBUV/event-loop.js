const fs = require("fs");

//? event-loop ==> it is a semi-infinite running loop that handles all the pending callbacks, promises, timeouts, i/o operations(file reading, database confections, etc..), etc. and push it to the call stack for it's execution
//! prev ==> ?
//! 1) timer phase ==> setTimeout() and setInterval() will get executed
//! 2) callback phase ==> pending callbacks will get executed
//! 3) idle, prepare ==> which nodejs for it's internal working
//! 4) polling ==> i/o operations --> file reading, database connections, etc
//! 5) check phase ==> setImmediate() will get EXECUTED
//! 6) close callbacks ==> close callbacks will get executed

//? nextTick() will be always first among async operations
//? promises  will get executed between the phases

//! order ==> sync statements, async ==> (nextTick(), promise)

//! ==================================================================

// console.log("start");

// setTimeout(() => {
//   console.log("inside setTimeout 1");
// }, 7000);

// process.nextTick(() => {
//   console.log("inside nextTick");
// });

// console.log("middle");
// console.log("end");

//! ==================================================================

// let api = fetch("https://jsonplaceholder.typicode.com/todos");
// api.then(() => {
//   console.log("promise 2");
// });

// let promise = new Promise((resolve, reject) => {
//   resolve("inside Promise");
// });
// promise.then(() => {
//   console.log("promise 1");
// });

// process.nextTick(() => {
//   console.log("inside nextTick");
// });

//! ==================================================================

// let api = fetch("https://jsonplaceholder.typicode.com/todos");
// api.then(() => {
//   console.log(2);
// });

// setTimeout(() => {
//   console.log(4);
// }, 0);

// setImmediate(() => {
//   console.log(3);
// });

// process.nextTick(() => {
//   console.log(1);
// });

//! ==================================================================

// console.log(1);

// process.nextTick(() => {
//   console.log(4);
// });

// console.log(2);

// console.log(3);

//! ==================================================================

// console.log(1);

// Promise.resolve((resolve, reject) => {}).then(() => {
//   console.log(5);
// });

// process.nextTick(() => {
//   console.log(4);
// });

// console.log(2);

// console.log(3);

//! ==================================================================

// console.log(1);

// Promise.resolve((resolve, reject) => {}).then(() => {
//   console.log(3);
// });

// setTimeout(() => {
//   console.log(5);
// });

// process.nextTick(() => {
//   console.log(4);
// });

// console.log(2);

//! ==================================================================

// console.log(1);

// Promise.resolve((resolve, reject) => {}).then(() => {
//   console.log(3);
// });

// setImmediate(() => {
//   console.log(6);
// });

// setTimeout(() => {
//   console.log(5);
// }, 5000);

// process.nextTick(() => {
//   console.log(4);
// });

// console.log(2);

//! =========================================

// Promise.resolve((resolve, reject) => {}).then(() => {
//   console.log(3);
// });

// let api = fetch("https://jsonplaceholder.typicode.com/todos");
// api.then(() => {
//   console.log(8);
// });

// setImmediate(() => {
//   console.log(6);
// });

// fs.readFile("./event-loop.js", "utf-8", () => {
//   console.log(7);
// });

// setTimeout(() => {
//   console.log(5);
// }, 1);

// process.nextTick(() => {
//   console.log(4);
// });

//!========================================================================

// process.nextTick(() => {
//   console.log("Start");
//   process.nextTick(() => {
//     console.log(1);
//   });

//   process.nextTick(() => {
//     console.log(4);
//   });

//   setTimeout(() => {
//     console.log(5);
//   });
// });

// process.nextTick(() => {
//   console.log(2);
// });

// process.nextTick(() => {
//   console.log(3);
// });

//! ===============================================================

// setTimeout(() => {
//   console.log("setTimeout");
// });

// setImmediate(() => {
//   console.log("immediate");
// });
