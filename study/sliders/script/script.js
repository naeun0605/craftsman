
//페이드인 페이드아웃 슬라이더

$(document).ready(function(){
    $('.fade-slide a:gt(0)').hide();

    setInterval(function(){
        $('.fade-slide a:first-child').fadeOut().next('a').fadeIn().end().appendTo('.fade-slide');
    }, 3000);
});

