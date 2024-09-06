
const animationH1 = document.querySelector('#heading');

const keyframes = {
    opacity: [0, 1],
    translate: ['-100px 0', '400px'],
    rotate: ['x 360deg', 0],
    // color: ['#f66', '#fc2', '#0c6', '#0bd']
    color: ['transparent', '#fff'],
    backgroundPosition: ['100% 0', '0 0'],
};
const options = {
    duration: 8000,
    easing: 'ease',
    fill: 'forwards',
    iterations: "Infinity"
};

animationH1.animate(keyframes, options);