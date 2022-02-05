
$(".count").click(function(){
    var word = $(".words").val();
    var count = word.split(" ").length;
    $(".val").text(count);
});
