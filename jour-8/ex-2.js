var request = require("request");

// console.log("#1");

request.get("https://api.chucknorris.io/jokes/random", function (err, res, body) {


    var jokes = JSON.parse(body);
    console.log(jokes.value);
    

});
