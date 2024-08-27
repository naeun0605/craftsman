$(document).ready(function(){
    $("#tab1 li").eq(0).click(function(){
        $("#modal").show()
    });

    $(".popup button").click(function(){
        $("#modal").hide();
    });


    $("#tabs>ul li").click(function(){
        var i = $(this).index();
        $("#tabs>div").css({
            display:"none"
        });

        $("#tabs>div").eq(i).css({
            display:"block"
        });
    })

});