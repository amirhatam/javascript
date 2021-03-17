function multiply(num){
    //var num = process.argv[2]

   

    for (var i = 1 ; i<=10;i++){
       var result= num * i;

       console.log(num+"x"+ i + "="+ result);



    }






}
multiply(parseInt(process.argv[2]));


function addition(num1){
    // var num = process.argv[2]

   

    for (var i = 1 ; i<=10;i++){
       var result1= num1 + i;

       console.log(num1+"+"+ i + "="+ result1);



    }






}
addition(parseInt(process.argv[2]));

module.exports ={
    addition,
    multiply,
};