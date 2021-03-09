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


// Bonus

var min = 1;
var max = 6;
var random = Math.floor(Math.random() * (6 - 1 + 1) + min);

if (random) {
    console.log("So close...");
}




// Bonus II 

var month = "January";


switch (month) {
	case "April": 
		console.log("Spring");
		break;
	case "February": 
		console.log("Spring");
		break;
	case "May": 
		console.log("Spring");
		break;
	case "July": 
		console.log("Summer");
		break;
	case "August": 
		console.log("Summer");
		break;
	case "September": 
		console.log("Summer");
		break;
    case "October":    
		console.log("Autumn");
		break;
	case "November": 
		console.log("Autumn");
		break;
    case "December": 
		console.log("Autumn");
		break;
    case "January": 
		console.log("Fall");
		break;
    case "February": 
		console.log("Fall");
		break;
    case "March": 
		console.log("Fall");
		break;
}

// Bonus III

var roundedNumber = 3.6;
var test1 = Math.floor(roundedNumber);
var test2



if (Math.floor(roundedNumber)) {
    console.log(Math.floor(roundedNumber));
} if {
    console.log(Math.ceil(roundedNumber));
} else {
    console.log(Math.round(roundedNumber));
}