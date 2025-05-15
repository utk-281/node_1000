// console.log("Start");
// for (let i = 0; i < 5000000000000; i++) {
//   console.log(i);
// }
// console.log("middle");
// console.log("end");
// statements
//!=========================== synchronous or blocking operation

console.log("Start");

setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

console.log("middle");
console.log("end");

console.log("Start");

setTimeout(() => {
  console.log("inside setTimeout 2");
}, 2000);

console.log("middle");

setTimeout(() => {
  console.log("inside setTimeout 1");
}, 2000);

console.log("end");

//!=========================== asynchronous or non-blocking operation

//? Promises ==>

// e - comm / food - del
// food are added to the cart ==> cart(["food1", "food2"]) ==> orderId // 10 sec
// payment({orderId}) ==> success/ false

// function pay() {
//   payment({ orderId });
// }

// cart(["food1", "food2"], function pay() {
//   payment({ orderId }); // Inversion of Control (we should avoid)
// });

// let obj = cart(["food1", "food2"]);
// // obj = {data:real data}
// // statemets

// obj.then(function pay() {
//   payment({ orderId });
// });

//! promises ==> it is an object which represents eventual completion of an asynchronous operation, promises are handled using then/catch block and async-wait
//? then() ==> it is used for completing the operation
//? catch() ==> it is used for error handling and promise rejection
//& then() and cath() will accept a callback function.

// let data = fetch("https://jsonplaceholder.typicode.com/todos");
// // data : {key:data}
// // console.log(data); // <Promise>
// data.then((data) => {
//   console.log(data);
// });

//! async - await ==> they are always used together. async is used in function declaration, await will be used inside function body, async function always returns a promise
// async function APICall() {
//   console.log("Start");
//   return 123;
// }
// let value = APICall();
// // console.log(value);
// value.then((data) => {
//   console.log(data);
// });

// function sum() {
//   return 5;
// }

// let add = sum;
// console.log(add);

// https://github.com/utk-281/node_1000
