//! we have to ways to import the file

//! 1st way ==>
// syntax ==> "let variable-name = require("path of that file")"

let value = require("./app.js");
// console.log(value);
console.log(value.add(2, 3));
console.log(value.sub(2, 3));

//! usually all the exporting statements are written at last of the file and all the import statements are written at the top of the file
