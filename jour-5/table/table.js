function multiply (arg) {
    var max = 10;

    for (var i = 1; i <= max; i++) {

        
        console.log(parseInt(process.argv.slice(2)) * i);
    }



}


multiply();