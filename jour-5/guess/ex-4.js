var prompt = require("prompt");

var properties = [
    {
        name: "username",
        validator: /^[a-zA-Z\s\-]+$/,
        warning: "Le username ne doit contenir que des lettres, espaces et tirets"
    },

]




// prompt.start();  // démarre le prompt









// var mysteryNum = Math.floor(Math.random()*(100-1)+1);
// function play (){
//     var play = Math.floor(Math.random()*(100-1)+1);
//     if (play === mysteryNum){
//         console.log("bravo")
//     }else if (play<mysteryNum){
//         console.log("c'est plus")
//     }else if (play>mysteryNum){
//         console.log("c'est moins")
//     }else{
//         console.log("error")
//     }
// }
// play()