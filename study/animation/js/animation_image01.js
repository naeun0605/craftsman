
const images = document.querySelectorAll('#imageWrap img');
const clickMe = document.querySelector('h2');


clickMe.addEventListener('click', clickme);
function clickme(){

    for(let i=0; i<images.length; i++){

        const frames = {
            opacity: [0, 1],   
            rotate: ['90deg', 0],
            translate: ['0 50px', 0],
            scale: [1.1, 1],
            filter: ['blur(20px)', 'blur(0)']
            
        }
        
        const options = {
            duration: 2000,
            delay: i * 400,       
            fill: "forwards",
        }
       
        images[i].animate(frames, options);
    }

}