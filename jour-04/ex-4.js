var max = 999;

function compare(num1, num2) {

 var randomnum1 = Math.floor(Math.random() * max)
 num1 = randomnum1;
 console.log("num1 : ", num1);

 var randomnum2 = Math.floor(Math.random() * max)
 num2 = randomnum2;
 console.log("num2 : ", num2);


    if (num1 > num2) {
        console.log("So ! Num1 is bigger");
    }
    else if (num1 < num2) {
        console.log("So ! Num2 is bigger");
    }
    else {
        console.log("both are the sames");
    }

}

compare();





// function compare(num1, num2) {
//     num1 = 2;
//     num2 = 5;

//     if (num1 > num2) {
//         console.log("num1 is bigger");
//     } else if (num1 < num2) {
//         console.log("num2 is bigger");
//     } else {
//         console.log("both are the same");
//     }
// }
// compare();




