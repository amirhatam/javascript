// 01 - Number

var integer = 102;
var float = 13.9;

console.log(integer + float);

// 02 convert 

var basic = 34;
var stringfied = basic.toString();

console.log(stringfied);

// 03 - Round

var num = 1.5;
var rounded = num;

console.log(Math.round(rounded));

// 04 - Arithmétique

var test = 12;
var bis = 5;

console.log("addition : " + test + bis);
console.log("soustraction : " + (test - bis));
console.log("multiplication : " + test * bis);
console.log("division : " + test / bis);
console.log("puissance : " + test ** bis);
console.log("reste : " + test % bis);

// 05 - Comparaison 

var test = 143;
var bis = 219;

console.log(test>bis);
console.log(test<bis);
console.log(test>=bis);
console.log(test<=bis);
console.log(test==bis);
console.log(test===bis);
console.log(test!=bis);
console.log(test!==bis);

// 07 - Condition II 

var password = "azerty";

if (password.length>5) {
    console.log("The password is secure");
} else {
    console.log("The password is not secure !");
}

// 08 - Condition III 


var password = "azerty";

if (password.length>5 && password.length==6) {
    console.log("Everything is good");
} else if (password.length===5 || password.length<=6) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}