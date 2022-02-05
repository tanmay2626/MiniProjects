
$(".go").click(function(){

    let todayDate = $(".date-pick").val();
    let aDate = todayDate.split("-");
    let todayTime = $(".time-pick").val();

let countdown = new Date(aDate[1]+" "+aDate[2]+","+aDate[0]+" "+todayTime).getTime();
let today = new Date().getTime();
let distance = countdown - today;

console.log("'"+aDate[1]+" "+aDate[2]+","+aDate[0]+" "+todayTime+"'");

let x = setInterval(function(){
    let today = new Date().getTime();
    let distance = countdown - today;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0"+hours : hours;
    minutes = (minutes < 10) ? "0"+minutes : minutes;
    seconds = (seconds < 10) ? "0"+seconds : seconds;

  $(".value").html(days+":"+hours+":"+minutes+":"+seconds);

  if (distance < 0) {
    clearInterval(x);
    $(".value").html("EXPIRED");
  }
},1000);

});

