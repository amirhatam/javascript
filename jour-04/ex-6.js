
function format(second) {
    var minutes = Math.floor(time / 60);
    var second = time - minutes * 60;
    var hours = Math.floor(time / 3600);
    time = time - hours * 3600;

    console.log("second :", second);

}

format(3700);

// function format(time) {   
    
//     var hrs = ~~(time / 3600);
//     var mins = ~~((time % 3600) / 60);
//     var secs = ~~time % 60;

    
//     var ret = "";
//     if (hrs > 0) {
//         ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
//     }
//     ret += "" + mins + ":" + (secs < 10 ? "0" : "");
//     ret += "" + secs;
//     console.log("second :"time);
    
// }

// console.log("second :"time(3700));

