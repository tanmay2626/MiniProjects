
$(".go").click(function(e){
    dayWeek();
});

function dayWeek(){
    var dayStr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var di = $(".d").val();
    var val = di.split("-");
    var day = val[2];
    var month = val[1];
    var year = val[0];
    var d = new Date("'"+month+" "+day+", "+year+"'");
    var result = d.getDay();

    $(".dayWeek").text(dayStr[result]);
}

//Another way using  .toLocaleDateString("[lang-country]",[object]);
// var today = new Date();
// var options = {
//     weekday : "long",
//     day : "numeric",
//     month : "long",
//     year : "numeric"
// }
//var day = today.toLocaleDateString("en-US",options);