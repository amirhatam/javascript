// function sortLetters(word) {
   
//     // word = ["k", "o", "n", "e", "x" ,"i", "o"]; 
  
//     var tab = word;

    

//     console.log(tab);
   
//     // Transformer mon String en array
//     //  var word = JSON.parse("[" + string + "]");
    

//     // tab.sort();
//     // console.log(tab);
//     // convert my array string
//     // my function return string 
    
    
//     // console.log(word);

// }

// sortLetters("konexio");


function sortLetters(word) {

    var letters = word.split('');

    letters.sort();
    console.log(letters);
    // letters.join();
   
}


sortLetters("konexio");