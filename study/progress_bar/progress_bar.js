
const getScrollPercent = ()=>{

    //스크롤 량
    const scrolled = window.scrollY;

    //페이지 전체 높이
    const pageHeight = document.documentElement.scrollHeight;

    //표시영역 높이
    const viewHeight = document.documentElement.clientHeight;

    //스크롤 된 %
    const percentage = scrolled / (pageHeight - viewHeight) * 100;

    //progress bar 너비 표시
    document.querySelector('#bar').style.width = `${percentage}%`;

}


window.addEventListener('scroll', getScrollPercent);