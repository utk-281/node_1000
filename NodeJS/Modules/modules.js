//! modules ==> a module is a piece of reusable code that can be imported into another file. a module contains classes, functions, variables, etc.

//? export ==> exporting means making the code available to other files
//? import ==> using the exported code in different file

//! three types of modules

//& 1) user-defined ==> these types of modules are created by the user and are imported exported whenever required.
// require("path")

//& 2) built-in ==> these modules are also called as core modules. they are part of nodeJS installation. examples ==> fs, http, path, os, queryString, etc..
// require("module-name")

//& 3) third-party ==> third party modules are modules that can be installed from npm(third-party source). examples ==> express, mongodb, mongoose, multer, etc..
// require("module-name")

//! require("path"); // commonJS syntax--> NodeJS uses this syntax by default
//? react syntax ==> ES6 syntax (import, exports)

console.log(__dirname);
