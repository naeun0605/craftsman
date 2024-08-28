 $(function(){
    //슬라이드
    var i = 0;

    function slide(){
        if(i<2){
            i++;
        }else{
            i=0;
        }
        $(".slide ul").animate({left:(-100) * i + "%"},1000)
    }
    setInterval(slide, 2000);

//메뉴
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown(500);
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp(500);
    })

//팝업
$(".pp").click(function(){
    $(".popup").show();
    return false;
})

$('button').click(function(){
    $(".popup").hide();
})


 })