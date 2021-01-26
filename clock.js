'use strict'

var time = document.getElementById("clock").innerHTML;

function startTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var am_pm = "AM";
    
    if(hr > 12) 
    {
        hr -= 12;
        am_pm = "PM";
    }

    if(hr == 0) 
    {
        hr = 12;
    }

    if(hr < 10)
    {
        hr = "0" + hr;
    }
    if(min < 10)
    {
        min = "0" + min;
    }
    if(sec < 10)
    {
        sec = "0" + sec;
    }
        
    clock.textContent = hr + ":" + min + ":" + sec + " " + am_pm;
}

setInterval(startTime, 1000);





