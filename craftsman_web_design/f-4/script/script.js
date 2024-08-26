$(document).ready(function(){
    $('.notice li').eq(0).click(function(){
        $('#modal').css({
            display:"block"});
    });

    $('button').click(function(){
        $('modal').css({display:"none"});
    });
    
});