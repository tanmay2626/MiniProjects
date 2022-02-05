var pointer=1;

$(".c1").addClass("circle-hover");

$(".right").click(function(){
    $(".c"+pointer).removeClass("circle-hover");
   pointer++;
   Slider();
   if(pointer>6){
       pointer=1;
       Slider();
   }
});

$(".left").click(function(){
    $(".c"+pointer).removeClass("circle-hover");
    pointer--;
    Slider();
    if(pointer<1){
        pointer=6;
        Slider();
    }
});

function Slider(){
    $(".slider-img").attr("src","G:/Web Development/FrontEnd Projects/Image slider/resources/img-"+pointer+".jpg");
    $(".c"+pointer).addClass("circle-hover");
}



