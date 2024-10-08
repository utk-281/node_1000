// console.log("start");
// console.log("middle");
// console.log("end");

// output ==>
/* 
    start
    middle
    end
 */

//! blocking or synchronous code
// console.log("start");
// console.log("middle");
// for (let i = 0; i < 1000; i++) {
//   console.log(i);
// }
// console.log("end");

//! non - blocking or asynchronous code
// console.log("start");
// console.log("middle");
// setTimeout(() => {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }, 5000);
// console.log("end");

//! promises ==> it is an object, it represents eventual completion of an asynchronous operation.
// to handle promises we use then and catch methods. then() is used for successful response whereas catch() is used for error/failure response

// let readFile = fetch("https://jsonplaceholder.typicde.com/todos/1");

// console.log(readFile);

// readFile
//   .then(() => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.log("error occurred" + err);
//   });

// console.log("end");

// let prom1 = new Promise((resolve, reject) => {
//   let flag = false;
//   if (flag) {
//     resolve("success");
//   } else {
//     reject("error");
//   }
// });
// console.log(prom1);

//! fetch() ==> it is used to fetch data from the server

// let apiCall = fetch("https://jsonplaceholder.typicode.com/todos");
// // console.log(apiCall);
// apiCall
//   .then((data) => {
//     // console.log(data);
//     let finalData = data.json();
//     // console.log(finalData);
//     finalData
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//! this will lead to then catch chaining

// async await ==> async function will always return a promise. promises are handled by await.

// async is used in function declaration and await is used in function body.

console.log("start");
console.log("middle");

async function callAPI() {
  let apiCall = await fetch("https://jsonplaceholder.typicode.com/todos");
  // console.log(apiCall);
  let finalData = await apiCall.json();
  console.log(finalData);
}
// await will suspend the function execution on temporary basis from call stack

callAPI();

async function greet() {
  console.log("inside greet");
  return "hello";
}

console.log("end");

greet();
