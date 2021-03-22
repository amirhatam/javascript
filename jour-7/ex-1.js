var fs = require("fs");

// console.log(fs);

fs.readFile("./jour07.txt", function (err, data) {
    if (err) {
       console.error(err);
       return;
    }
 
    console.log("File jour07.txt : " + data.toString());
 });