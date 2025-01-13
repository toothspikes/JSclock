setInterval(displayTime, 1000); //updating time every second

//get current time
function displayTime() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    amPm = "am";

    //if hour is 12 or greater, do this
    if(hour >= 12) {
        if(hour > 12) hour-= 12;    //if hour is greater than 12, subtract 12
        amPm = "pm";
    }
    else if (hour == 0) {   //if midnight, switch from 0 to 12
        hour = 12;
        amPm = "am";
    }

    //if hour/minute/second are less than 10 in value, add a 0 to the front of the number for formatting
    if (hour < 10) {
        hour = "0" + hour;
    }
    else {
        hour = hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    else {
        minute = minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    else {
        second = second;
    }

    let currentTime = hour + ":" + minute + ":" + second + amPm;

    document.getElementById("clock").innerHTML = currentTime;
}

displayTime();