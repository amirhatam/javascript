var prompt = require("prompt");

// prompt.start();

var mysteryNum = Math.floor(Math.random() * 100 + 1);

// console.log(mysteryNum);


function play() {

    prompt.get(
        {
            name: "numUser",

            discriotion: "Quel est le nombre mystère ?"
        },
    
        function (err, res) {

            if (res.numUser.search(/^[1-9][0-9]?$|^100$/g) === -1) {
                err = "The value is not a number between 1 and 100";
            }

           if (err) {

               console.log("Error",err);

               play();

               return;
           } 
           if (res.numUser<mysteryNum) {
               console.log("C'est plus !");
               play();
           }
           else if (res.numUser>mysteryNum) {

               console.log("C'est moin !")

               play();

           } 
           else {
        
               console.log("Bravo !!!")
           }
            

        }
)


}

play();




