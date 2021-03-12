var sentence = "Hello Konexio !";
var cele = [];

for (var i=sentence.length-1; i>=0; i--) {
    cele.push(sentence[i]);
}
console.log(cele.join(""));
