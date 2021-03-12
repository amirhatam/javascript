var sentence = "Hello Konexio !"

var myArray = sentence.split("");


var result = [];

for (var i = 0; i < myArray.length; i++) {
    var item = myArray[i];

    result.unshift(item); 
}


console.log(result.join(""));




// var sentence = "Hello Konexio !";
// var cele = [];

// for (var i=sentence.length-1; i>=0; i--) {
//     cele.push(sentence[i]);
// }
// console.log(cele.join(""));

