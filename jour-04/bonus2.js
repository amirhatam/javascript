
 var joueur1 = "joueur1"; 
 var joueur2 = "joueur2"; 

 function rollTheDice(numberOfDice) { 
     setTimeout(function () { 
         var randomNumber1 = Math.floor(Math.random() * 5) + 1; 
         var randomNumber2 = Math.floor(Math.random() * 5) + 1; 

            console.log(randomNumber1);
            console.log(randomNumber2);

         if (randomNumber1 === randomNumber2) { 
            console.log("Draw!"); 
         } 

         else if (randomNumber1 < randomNumber2) { 
            console.log(joueur2 + " WINS!");
         } 

         else { 
             console.log(joueur1 + " WINS!"); 
         } 
     }, 2500); 
 } 
 rollTheDice();
