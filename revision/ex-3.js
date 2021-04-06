function checkPal(str) {

    var splitWord = str.split("");

    splitWord.reverse();
    var joinWord= splitWord.join("")

    // console.log(joinWord);

    if (joinWord == str) {

        console.log("Palindrome !");
    }

    else {
        console.log("Nope");
    }

}

checkPal("top");
// checkPal("lol");
