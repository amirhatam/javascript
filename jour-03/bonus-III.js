// var camarades = ["Abdou", "Amara", "Faruk", "Ezka", "Ikram", "N.A", "Francise", "Suleman", "Axel", "Lionel"];

// const random = Math.floor(Math.random() * camarades.length);
// console.log(random, camarades[random]);


var camarades = ["Abdou", "Amara", "Faruk", "Ezka", "Ikram", "N.A", "Francise", "Suleman", "Axel", "Lionel"];

var min = 0;
var max = camarades.length - 1;

var random = Math.random();

var indexRandom = Math.floor(random * (max + 1));

console.log(camarades[indexRandom]);

