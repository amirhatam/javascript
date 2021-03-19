
function checkProfile() {

    var prompt = require("prompt");

    var properties = [
        {
            name: "username",

            validator: /[a-z0-9-]/mg, 

            // warning: "Le username ne doit contenir que des lettres, espaces et tirets"
        
        },
        {
            name:"email",

            validator:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,
           
        },
        {
            name: "password",

            validator: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z-_]{6,}$/,

            hidden: true 
        }
    ];

    prompt.start(); 

    function onErr(err) { 

        console.log(err);

        return 1;
    }

    prompt.get(properties, function (err, res) {

        if (err) {
            return onErr(err);
        }

        console.log("All good !");

        // console.log("=> Username : " + res.username);

        // console.log("=> Password : " + res.password);
    });
}


checkProfile();