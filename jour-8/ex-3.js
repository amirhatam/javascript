var request = require("request");


function catchPokemon(id) {

    request.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=898", function (err, res, body) {

        var allPoc = JSON.parse(body);

        console.log("name : ", allPoc.results[id -1].name);

        console.log("id : ", id);

    });
}

catchPokemon(898);