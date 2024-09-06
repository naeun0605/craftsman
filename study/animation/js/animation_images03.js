const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails>li>img');

thumbImages.forEach((thumbImage)=>{

  thumbImage.addEventListener('mouseover', (e)=>{

    mainImage.src = e.target.src;
    mainImage.animate({opacity:[0, 1]}, 500)

  });

});