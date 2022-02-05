var counter=0;

$(".right").click(function(){
    counter++;

    if(counter>9 && counter<100){
        $(".counter").text("0"+counter); 
    }else if(counter>99){
        $(".counter").text(counter); 
    }else{
        $(".counter").text("00"+counter);
    }
});

$(".left").click(function(){
    counter--;
    if(counter>9 && counter<100){
        $(".counter").text("0"+counter); 
    }else if(counter>99){
        $(".counter").text(counter); 
    }else if(counter<0){
        counter=0;
        alert("Invalid:Negative Number!");
    }else{
        $(".counter").text("00"+counter);
    }

});