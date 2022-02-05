
$(document).on("keypress",function(e){
    if( e.key == "Enter" ){
        toss();
    }
});

function toss(){
    var randomNumber = Math.floor(Math.random()*2)+1;
    $(".coin").attr("src","G:/Web Development/FrontEnd Projects/Coin Toss/toss"+randomNumber+".png");
    if(randomNumber == 1){
        $(".heading").text("It's Heads!!!");
    }else{
        $(".heading").text("It's Tails!!!");
    }
}
