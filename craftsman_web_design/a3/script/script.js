$(document).ready(function () {
    // 탭
    $("#tabs>ul li").click(function () {
        var i = $(this).index();
        $("#tabs>div").css({
            display: "none"
        });
        $("#tabs>div").eq(i).css({
            display: "block"
        });
    });
   
    $("#tabs>div li").eq(0).click(function(){
        $("#modal").show();
    });

    $(".popup button").click(function(){
        $("#modal").hide();
    })
});








