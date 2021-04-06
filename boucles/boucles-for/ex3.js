var min = 1;
var max = 6;

var total = 0;

for (var i = min; i <= 20 ; i++ ) {

var dice = Math.ceil(Math.random() * (max + min -1));


if (dice >= 5)

 total+=dice;


}

console.log(total);
