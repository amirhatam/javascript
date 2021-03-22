// console.log(process.argv.slice(2));

// var args = ( process.argv.slice(2));

// console.log("arguments : ", args);



// console.log(process.argv[2] + process.argv[2]);

// console.log(parseInt(process.argv[2]) * parseInt(process.argv[3]));
// // console.log(parseInt(process.argv[2]) - parseInt(process.argv[3]));
// // console.log(parseInt(process.argv[2]) * parseInt(process.argv[3]));

var lodash = require("lodash");

var output = lodash.without([1, 2, 3], 3);

console.log(output);