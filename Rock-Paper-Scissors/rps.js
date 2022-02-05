
$(document).on("keypress",function(e){
    if(e.key == "Enter"){
        rps();
    }
});


function rps(){
    var randomNumberL = Math.floor(Math.random()*3);
    var randomNumberR = Math.floor(Math.random()*3);
    var array = ["rock","paper","scissor"];
    var resultL = array[randomNumberL];
    var resultR = array[randomNumberR];
    // Rock : 0
    // Paper : 1
    // Scissor : 2
    
    $(".l-img").attr("src","G:/Web Development/FrontEnd Projects/Rock-Paper-Scissors/"+resultL+".png");
    $(".r-img").attr("src","G:/Web Development/FrontEnd Projects/Rock-Paper-Scissors/"+resultR+".png");

    if( (resultL == "paper" && resultR == "rock") || (resultL == "rock" && resultR == "scissor") || (resultL == "scissor" && resultR == "paper") ){
        $(".side-box").removeClass("win");
        $(".heading").text("Player 1 Wins");
        $(".left").addClass("win");
    }else if( resultL == resultR ){
        $(".side-box").removeClass("win");
        $(".heading").text("Draw");
        $(".side-box").addClass("win");
    }else{
        $(".side-box").removeClass("win");
        $(".heading").text("Player 2 Wins");
        $(".right").addClass("win");
    }
}
