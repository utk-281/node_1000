//? event-loop ==> it is a semi-infinite running loop that handles all the pending callbacks, promises, timeouts, i/o operations(file reading, database confections, etc..), etc. and push it to the call stack for it's execution
//! prev ==> ?
//! 1) timer phase ==> setTimeout() and setInterval() will get executed
//! 2) callback phase ==> pending callbacks will get executed
//! 3) idle, prepare ==> which nodejs for it's internal working
//! 4) polling ==> i/o operations --> file reading, database connections, etc
//! 5) check phase ==> setImmediate() will get EXECUTED
//! 6) close callbacks ==> close callbacks will get executed

//? promises and nextTick() will get executed between the phases

//! order ==> sync statements, nexTick()==promise,

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

let api = fetch("https://jsonplaceholder.typicode.com/todos");
api.then(() => {
  console.log(2);
});

setTimeout(() => {
  console.log(4);
}, 0);

setImmediate(() => {
  console.log(3);
});

process.nextTick(() => {
  console.log(1);
});
