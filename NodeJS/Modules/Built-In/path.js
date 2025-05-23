// path it is an example of built-in modules

//! global variables/ methods ==> these are the methods or variables that does not need to be imported
//? examples(methods) ==> console.log(), Promise, setTimeout(),
//? examples(variables) ==> __filename, __dirname

// console.log("filename: " + __filename);
//~ C:Users\utkar\Desktop\Classes\Node 1000\NodeJS\Modules\Built-In\path.js ==> absolute path
//? __filename returns the absolute path of the current working file

console.log("=====================");

// console.log("dirname: " + __dirname);
//~ "C:\Users\utkar\Desktop\Classes\Node 1000\NodeJS\Modules\Built-In" ==> absolute path
//? __dirname return the absolute path of the current working directory/folder

// console.log(global);

const path = require("path");
// console.log(path);

//! 1) basename ==> it returns the base part (last part) of the path (it can accept both relative and absolute path)
// console.log(path.basename(__filename)); //path.js
// console.log(path.basename("D:/Something/Node/index.txt")); //index.txt
// console.log(path.basename(__dirname)); // Built-In
// console.log(path.basename("D:/Something/Node")); //Node
// console.log(path.basename("../User-Defined/app.js")); // app.js
// console.log(path.basename("../User-Defined")); // User-Defined

//! 2) extname ==> it returns the extension of the file and in case of folder/directory it returns ""
// console.log(path.extname(__filename)); // .js
// console.log(path.extname("./App/Index/demo.py")); // .py
// console.log(path.extname(__dirname)); // ""
// console.log(path.extname("./App/Index")); // ""

//! 3) parse ==> it returns an object of the path provided
// console.log(path.parse(__filename)); // it returns an object
/*
{
    root: "it represents the root of the path",
    dir: "it represents the directory/folder of the path",
    base: "it return the basename of the path",
    ext: "it return the extension of the path"
}
& in case we are not passing absolute path, then root will be empty
*/
// console.log(path.parse("./App/Index/demo.py"));
// console.log(path.parse(__dirname));
// console.log(path.parse("./App/Index"));

let pathObject = path.parse("D://App/Index/demo.py");
// console.log(pathObject);

pathObject.ext = ".txt";
// console.log(pathObject);

//! 4) format() ==> it return the path in string format
// console.log(path.format(pathObject));

let myPath = {
  root: "E",
  dir: "./A/B",
  base: "demo.txt",
  ext: ".txt",
  name: "demo",
};

// console.log(path.format(myPath));

//! 5) join()
// console.log(path.join("folder1", "folder2", "index.txt")); // folder1/folder2/index.txt

// console.log(path.join(__dirname, "Demo"));

// console.log(path.join(__dirname, "..", "..", "..", "JavaScript", "App"));
// C:\Users\utkar\Desktop\Classes\Node 1000\NodeJS\JavaScript\App
// console.log("../../../JavaScript/App");

let fs = require("fs");
// fs.rmdirSync("../../../JavaScript/App");
// fs.rmdirSync(path.join(__dirname, "..", "..", "..", "JavaScript", "App"));
// C:\Users\utkar\Desktop\Classes\Node 1000\JavaScript\App

// console.log(path.join("folder1", "..", "index.txt"));

// let fs = require("fs");
// fs.mkdirSync(path.join(__dirname, "..", "..", "Starter", "Demo"));
// C://users/utkar/Desktop/Classes/Node 1000/NodeJS/Starter/Demo
