

$(".go1").click(function(){
    pick();
});
$(".go2").click(function(){
    type();
});
$(".retry").click(function(){
    $("body").css("background-color","white");
});


function pick(){
    var color = $(".color-pick").val();
    $("body").css("background-color",color);
}

function type(){     
    var val = $(".input-box").val();
    $("body").css("background-color",val);

}