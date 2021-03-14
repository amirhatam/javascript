var myArray = [];
var min = 0;
var max = 100;
var numRandom = 0;


for (var i = 1; i <= 20; i++) {
    numRandom = Math.floor(Math.random() * (max - min + 1));

    // console.log(numRandom);

    if (myArray.indexOf(numRandom) === -1) {
        myArray.push(numRandom);
    } else {
        i--;
    }
}

console.table(myArray);

var numMax = myArray[0];

for (var i = 1; i < myArray.length; i++) {
    var item = myArray[i];

    if (item > numMax) {
        numMax = item;
    }
}

console.log(numMax);


