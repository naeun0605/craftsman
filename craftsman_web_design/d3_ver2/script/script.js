$(document).ready(function(){

    $("#tab1>ul li").eq(0).click(function(){
        $("#modal").show();
    });

    $(".popup button").click(function(){
        $("#modal").hide();
    });

    $("#tabs>ul li").click(function(){
        const i = $(this).index();

        $("#tabs>div").css({
            display:"none"
        });

        $("#tabs>div").eq(i).css({
            display:"block"
        });
    });

       
});