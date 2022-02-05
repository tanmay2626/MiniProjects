
$(".go").click(function(){
    convert();
});

function convert(){
    var from = $("#from :selected").val();
    var to = $("#to :selected").val();
    var input = $(".input-box").val();

    if( from == "cm" && to == "m"){
        $(".output-box").val(input/100);
    }else if( from == "cm" && to == "ft"){
        $(".output-box").val((input/30.48).toFixed(2));
    }else if( from == "m" && to == "cm"){
        $(".output-box").val(input*100);
    }else if( from == "m" && to == "ft"){
        $(".output-box").val((input*3.281).toFixed(2));
    }else if( from == "ft" && to == "cm"){
        $(".output-box").val(Math.floor(input*30.48));
    }else if( from == "ft" && to == "m"){
        $(".output-box").val((input/3.281).toFixed(2));
    }else{
        $(".output-box").val("Error");
    }    
}