// const fs = require("fs");

// let a = 10;
// let b = 0;
// let addition = a + b;
// let subtraction = a - b;
// let multiplication = a * b;
// let division;

// if (b !== 0) {
//   division = a / b;
// } else {
//   division = "Division Error: Division byZero";
// }

// fs.writeFileSync(
//   "./assessmentResult.txt",
//   `Addition: ${addition}
// Subtraction: ${subtraction}
// Multiplication: ${multiplication}
// Division: ${division}`
// );

// console.log("file created");

// let promise = new Promise((resolve, reject) => {
//   resolve(fs.readFileSync(path, "utf-8"));
//   reject("reject");
// });
// '

function handler(fn) {
  Promise.resolve(fn).catch((err) => {
    next(err);
  });
}

let anotherFun = () => {
  console.log("fun2");
};

handler(anotherFun);
