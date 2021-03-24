var request = require("request");

var countriesNames = [];
request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {

    var countriesNames = JSON.parse(body);
    // console.log(countriesNames);

    var result = countriesNames.map(function (elem) {


        return elem.name
        

        
    });
    
    console.log(result.join("_"));








    
    
});

