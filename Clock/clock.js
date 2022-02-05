//jshint esversion:6


function time(){
    var t = new Date();
    var hr = t.getHours();
    var min = t.getMinutes();
    var sec = t.getSeconds();
    var session = "AM";

    if(hr == 0){
        hr = 12;
    }
    if(hr >= 12){
        session ="PM";
    }
    if(hr > 12){
        hr -= 12;
    }

    hr = (hr < 10) ? "0"+hr : hr;
    min = (min < 10) ? "0"+min : min;
    sec = (sec < 10) ? "0"+sec : sec;

    $(".hours").html(hr);
    $(".minutes").html(min);
    $(".seconds").html(sec);
    $(".sessions").html(session);

    setTimeout(time,1000);
}
time();