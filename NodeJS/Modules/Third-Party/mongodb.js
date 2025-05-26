//! 1) before installing any third party modules, we have to make sure that a file name "package.json" is present in the project folder
//? to create a .json file type command ==> "npm init -y" in the terminal

//! 2) now install the required modules by typing command ==> "npm install/i module-name" in the terminal
//? example ==> npm i mongodb // npm install mongodb

//! 3) now import the installed modules

const mongodb = require("mongodb");
console.log(mongodb);
