let add = (a, b) => {
  return a + b;
};

let sub = (a, b) => {
  return a - b;
};

//! we have two different ways to export a code

//! 1st way ==>
module.exports = { add, sub };
