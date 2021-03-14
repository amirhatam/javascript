
function generatePassword(num) {

    var length = num,
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    // return retVal;

    if (i < 6 || i > 16) {
        console.log("error")
    } else {
        console.log(retVal);
    }
}


generatePassword(7);