
const tabs = document.querySelectorAll('.tabswrap>ul>li>a');
const conts = document.querySelectorAll('.tabswrap>div');

tabs[0].addEventListener('click', function(){
    conts[0].classList.add('active');
    conts[1].classList.remove('active');
});
tabs[1].addEventListener('click', function(){
    conts[0].classList.remove('active');
    conts[1].classList.add('active');
});


// modal
const tabfirst = document.querySelector('.f1');
const modal = document.querySelector('.modal');

const btn = document.querySelector('.popup>button');

tabfirst.addEventListener('click', function(){
    modal.style.display = "block";
});

btn.addEventListener('click', function(){
    modal.style.display = "none";

});
