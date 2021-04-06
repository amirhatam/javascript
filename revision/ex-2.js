var x = 0;
var o = 0;

function counteach (str) {

    var letters = str.split("");
    // console.log(letters);
    
    for(var i = 0; i <= letters.length; i++ ){

        if (letters[i] === "x") {
            x++
        
        } else if (letters[i] === "o") {
            o++
        }
        
    }
    // console.log(x);
    // console.log(o);

    if(x == o) {
      console.log("letters 'x' and 'o' are equals ?",true); 
    }
    else {
        console.log("letters 'x' and 'o' are equals ?",false);
    }

}


counteach("xoxo")




// function countEach(str) {

//     var countO = 0;
//     var countX = 0;

//     for (var i = 0; i < str.length; i++) {

//         switch (str.charAt(i)) {

//             case "x": {
//                 countX++;
//                 break;
//             }
//             case "o": {
//                 countO++;
//                 break;
//             }

//         }
//     }

   

//     return countX === countO;

// }


// console.log(countEach("xo"));