var request = require("request");


request.get("https://api.chucknorris.io/jokes/random", function (err, res, body) {

    var jokes = JSON.parse(body);
    console.log(jokes.value);
    
});
