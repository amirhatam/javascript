// function convertHMS(value) {
//     const sec = parseInt(value, 10); 
//     let hours   = Math.floor(sec / 3600);
//     let minutes = Math.floor((sec - (hours * 3600)) / 60);
//     let seconds = sec - (hours * 3600) - (minutes * 60);
   
//     if (hours   < 10) {hours   = "0"+hours;}
//     if (minutes < 10) {minutes = "0"+minutes;}
//     if (seconds < 10) {seconds = "0"+seconds;}
//     return hours+':'+minutes+':'+seconds; 
    
// }
// console.log(value);



// convertHMS(3700);

// function secondsToHms(d) {
//     d = Number(d);
//     var h = Math.floor(d / 3600);
//     var m = Math.floor(d % 3600 / 60);
//     var s = Math.floor(d % 3600 % 60);

//     var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
//     var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
//     var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
//     return hDisplay + mDisplay + sDisplay; 
    
// }


// secondsToHms(3700);






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
//     return ret;
// }

// console.log(format(3700));

