$(document).ready(function(){
    const first = $('#notice a').eq(0);
    const modal = $('#modal');
    const button = $('button');

    first.click(function(){
        event.preventDefault();
        modal.css({display:"block"});
    });

    button.click(function(){
        modal.css({display:"none"});
    });
});