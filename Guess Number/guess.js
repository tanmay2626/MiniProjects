
$(".go").click(function(){
    guess();
});

function guess(){
    var randomNumber = Math.floor(Math.random()*5)+1;
    var guess = Number($(".input-box").val());
    
    if(randomNumber == guess){
        $(".guess-img").attr("src","G:/Web Development/FrontEnd Projects/Guess Number/win.png");
        $(".result-txt").text("Bingo! your guess was right!");
    }else{
        $(".guess-img").attr("src","G:/Web Development/FrontEnd Projects/Guess Number/fail.png");
        $(".result-txt").text("Uh Oh! Wrong guess, the number was "+randomNumber);
        $(".go").text("Retry");
    }
}

$(".retry").click(function(){
    $(".guess-img").attr("src","G:/Web Development/FrontEnd Projects/Guess Number/guess.png");
});