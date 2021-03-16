// console.log(process.argv);



// for(i = 0 ; i<process)




function calculate (test) {

  
    // if (i > 0) {
    //     console.log(parseInt(process.argv[2]) * parseInt(process.argv[3]));

    // }

    var args = process.argv.slice(2);

    
    console.log(parseInt(process.argv[2]) / parseInt(process.argv[3]));

}

calculate();