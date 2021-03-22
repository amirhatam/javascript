function sortLetters (str) {

var letters = str.split("");


letters.sort();



console.log(letters.join(""));

}

sortLetters("konexio");


// function sortLetters (word) {
//     var letters = [];

//     for (var i = 0; i < word.length; i++) {

//         letters.push(word[i]);

//     }

//     console.log(letters.sort().join(""));

// }

// sortLetters("konexio");

