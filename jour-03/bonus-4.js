var myArray = [];
var min = 0;
var max = 100;
var numRandom = 0;

for (var i = 1 ; i<=max; i++) {
numRandom = Math.floor(Math.random() * (max - min + 1));

console.log(numRandom);
}