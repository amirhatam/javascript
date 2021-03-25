var request = require("request");
function catchPokemon(id) {

request.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118", function (err, res, body) {

    var allPoc = JSON.parse(body);

    
    console.log("name : ",allPoc.results[id].name);

    console.log("id : ",id);
        
    // var catchPokemon =idP.map(function(elem){
    //     // console.log(elem);
    //     return elem.name
    // });
    // console.log(catchPokemon);

});
}

catchPokemon(4);