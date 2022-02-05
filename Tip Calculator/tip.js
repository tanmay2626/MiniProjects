
$(".cal").click(function(){
    tip();
});

function tip(){
    var bill = Number($(".bill").val());
    var tip = Number($(".tip").val());
    var num = Number($(".num").val());
    var tipTotal = ( bill * ( tip / 100 ) / num );
    var totalBill = tipTotal+bill;

    $(".tip-val").text("₹"+tipTotal.toFixed(2));
    $(".total").text("₹"+totalBill.toFixed(2));

    $(".bill").val(bill.toFixed(2));

}

