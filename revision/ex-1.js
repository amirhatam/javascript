function sortLetters(word) {

    var letters = word.split('');

    letters.sort();

    console.log(letters.join(" "));
}


sortLetters("konexio");
