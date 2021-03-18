function formatDate (str) {

    var dateTime = new Date();
    // console.log(dateTime);

    console.log((dateTime.getDate()) + "/" + (dateTime.getMonth()+1)  + "/"  + dateTime.getFullYear());


}

formatDate();