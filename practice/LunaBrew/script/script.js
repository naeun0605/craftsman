window.addEventListener("DOMContentLoaded",function(){
    // section2 tab menu
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");

    const tab1 = document.querySelector("#T1");
    const tab2 = document.querySelector("#T2");
    const tab3 = document.querySelector("#T3");

    btn1.onclick = function(){
        tab1.classList.add('on');
        tab2.classList.remove('on');
        tab3.classList.remove('on');
    }
    btn2.onclick = function(){
        tab1.classList.remove('on');
        tab2.classList.add('on');
        tab3.classList.remove('on');
    }
    btn3.onclick = function(){
        tab1.classList.remove('on');
        tab2.classList.remove('on');
        tab3.classList.add('on');
    }

    // scroll event
    const t = document.querySelector(".scrollEvent");
    const header = document.querySelector("header");
    const s2scroll = document.querySelector("#s2Text div");
    const s3image01 = document.querySelector("#tabImage1");
    const s3image02 = document.querySelector("#tabImage2");

    window.addEventListener("scroll", function(){
        t.innerHTML = Math.floor(pageYOffset);

        // 클래스명 추가/제거를 이용해 스크롤모션 구현
        if(t.innerHTML >= 840) {
            s2scroll.classList.add('active'); // section2 스크롤 모션
            header.classList.add('active'); // 헤더 색상 변경
        } else {
            s2scroll.classList.remove('active');
            header.classList.remove('active');
        }

        // section3 스크롤 모션
        if(t.innerHTML >= 1720) {
            s3image01.classList.add('activate');
            s3image02.classList.add('activate');
        } else {
            s3image01.classList.remove('activate');
            s3image02.classList.remove('activate');
        }
    });
});