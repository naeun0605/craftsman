$(() => {
const photo1 = $(".s1 .photo");
const info = $(".s1 .info");


$(window).scroll(() => {
    let st = $(this).scrollTop();
    console.log(st);

    if (st >= 10) {
        photo1.css({ transform: "translateY(0)" });
        info.css({ transform: "translateY(0)" });
    } else {
        photo1.css({ transform: "translateY(300px)" });
        info.css({ transform: "translateY(300px)" });
    }

    if (st >= 500) {
        photo1.css({ transform: "translateY(0)" });
    } else {
        info.css({ transform: "translateY(300px)" });
    }
});

});