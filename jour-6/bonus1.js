function formatDate () {

    var prompt = require("prompt");

    var dateTime = moment().add(10, 'days').calendar(); 
    
    prompt.start();

    function onErr(err) { 

        console.log(err);

        return 1;
    }
    

    console.log(dateTime);



}

formatDate();