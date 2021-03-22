function countEach(str) {

    var countO = 0;
    var countX = 0;

    for (var i = 0; i < str.length; i++) {

        switch (str.charAt(i)) {

            case "x": {
                countX++;
                break;
            }
            case "o": {
                countO++;
                break;
            }

        }
    }

   

    return countX === countO;

}


console.log(countEach("xo"));