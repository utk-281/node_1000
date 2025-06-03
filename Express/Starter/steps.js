//! library ==> it is a collection of pre-defined code. and the control of the execution of the code is given to the developer.
//~ example ==> axios, reactJS, loadash etc...

//! frameworks ==> it is a collection of libraries.
//? ==> it provides a structure for developing any application.
//? ==> the control of the execution of the code is given to the framework.
//? ==> it also allows developers to follow a particular architecture.
//~ examples ==> NODE (expressJS, meteorJS, derbyJS, koaJS) ,
//~ example for frontend ==> angularJS, vue etc...
//? nextJS ==> it is a framework for ReactJS but can be used to implement backend also

//? steps =====================>
//! 1) before installing any third-party modules, the project folder must contain a "package.json" file. there can be only one package.json file in the project folder
//? to generate this file type command ==>
//& "npm init -y" ==> this will generate a "package.json" file with default values (npm initialize)
//& "npm init" ==> this will generate a "package.json" file wit user-defined values
//~ package.json file is heart if the project, it contains the meta data like name, description, version, author etc...., along with dependencies.(third party modules or packages that we are installing)

//! 2) now install the required modules by typing command ==> "npm install/i module-name" in the terminal
//? syntax ==> npm i/install module-name
// example ==> npm i express
//? syntax ==> npm i/install module-name1 module-name2 module-name3...
// example ==> npm i express mongodb mongoose multer express-async-handler
//& by default this command will store the modules under production dependency
//& to install a module under development dependency ==> npm i module-name -D

//? npm ==> node package manager. it is a platform which manages the packages/modules.
//? managing ==> install, uninstall, update, create, share.

//& a) node_modules ==> it is a folder which contains all the installed packages/modules.
//& b) inside package.json ==> dependencies will be added, this tells us that or project is dependent or using the modules.
//& c) package-lock.json ==> this will be created automatically whenever we run npm i, in this file every module version and integrity is stored.

//! 3) import the installed modules/packages and use it.

//~ for importing third-party modules and built-in modules
// require("module-name")
//~ for importing user-defined modules
// require("path")

//! expressJS ==> framework of nodeJS. which only supports the routing part

//? expressJS ==> express is a minimal routing framework which supports only routing part, any other features are added with the help of middleware.
