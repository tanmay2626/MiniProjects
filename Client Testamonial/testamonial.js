var pointer=1;

$(".right").click(function(){
   pointer++;
   test();
   if(pointer>4){
       pointer=1;
       test();
   }
});

$(".left").click(function(){
    pointer--;
    test();
    if(pointer<1){
        pointer=4;
        test();
    }
});


function test(){
    $(".profile-img").attr("src","G:/Web Development/FrontEnd Projects/Client Testamonial/resources/profile"+pointer+".png");
    
    switch (pointer) {
        case 1:
            $(".review").text("I love your system. I don't always clop, but when I do, it's because of Tindog. Your company is truly upstanding and is behind its product 100%. I will let my mum know about this, she could really make use of Tindog!");
            $(".name").html("~Megan Markle<br>Florida");
            break;
        case 2:
            $(".review").text("You guys rock! I would gladly pay over 600 dollars for Tindog. I could probably go into sales for you. Tindog is the most valuable business resource we have EVER purchased.");
            $(".name").html("~Ron Y.<br>Ohio");
            break;
        case 3:
            $(".review").text("Tindog is the next killer app. Thanks for the great service. Thanks to Tindog, we've just launched our 5th website! After using Tindog my business skyrocketed!");
            $(".name").html("~ Dara O.<br>Pensalvania");
            break;
        case 4:
            $(".review").text("I don't always clop, but when I do, it's because of Tindog.");
            $(".name").html("~ Cornelia P.<br>NYC");
            break;
        default:
            break;
    }
}

