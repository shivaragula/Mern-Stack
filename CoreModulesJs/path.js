let path = require("path");
let myPath = "C:\\Users\\ragul\\OneDrive\\Documents\\Mern-Stack\\CoreModulesJs\\path.js";
let parsedPath = path.parse(myPath);
let baseName = path.basename(myPath);
console.log(parsedPath);
console.log(baseName);
console.log("Directory Name:", parsedPath.dir);
console.log("File Name:", parsedPath.name);
console.log("File Extension:", parsedPath.ext); 