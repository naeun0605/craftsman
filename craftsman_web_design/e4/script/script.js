$(document).ready(function(){

    $("#notice>ul li").eq(0).click(function(){
        $("#modal").show()
    });

    $(".popup button").click(function(){
        $("#modal").hide()
    });
});