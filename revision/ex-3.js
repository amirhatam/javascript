
function checkPal (str) {

var letters = str.split("");


var revLettres = letters.reverse();

var revWords = revLettres.join("");

if (revWords === str) {

    console.log("Palindrome !");
} else {
    console.log("Nope");
}


}

checkPal("anna");