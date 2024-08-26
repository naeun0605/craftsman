 $(function(){
// 메뉴
$("nav>ul>li").mouseenter(function(){
    $(".sub, .m_bg").stop().fadeIn(500);
})

$("nav>ul>li").mouseleave(function(){
    $(".sub, .m_bg").stop().fadeOut(500);
})

//슬라이드
var i = 0;
function slide(){
    if(i<2){
        i++;
    }else{
        i = 0;
    }

    $(".slide ul li").fadeOut(1000);
    $(".slide ul li").eq(i).fadeIn(1000);
}
setInterval(slide, 3000);

//팝업
$(".pp").click(function(){
    $(".popup").show();
    return false;
})

$("button").click(function(){
    $(".popup").hide();
})


 })