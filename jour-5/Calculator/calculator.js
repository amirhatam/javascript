function calculate(num) {



    if (process.argv[3] === "+") {

        console.log(parseInt(process.argv[2]) + parseInt(process.argv[4]));

    } else if (process.argv[3] === "-") {

        console.log(parseInt(process.argv[2]) - parseInt(process.argv[4]));

    }
    else if (process.argv[3] === "*") {

        console.log(parseInt(process.argv[2]) * parseInt(process.argv[4]));

    }
    else if (process.argv[3] === "/") {

        console.log(parseInt(process.argv[2]) / parseInt(process.argv[4]));

    } else {
        console.log("Error");
    }


}

calculate();
