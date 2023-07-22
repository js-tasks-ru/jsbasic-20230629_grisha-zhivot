function initCarousel() {
  const slides = document.querySelectorAll('.carousel__slide');
  const carouselInner = document.querySelector('.carousel__inner');

  const buttonRight = document.querySelector('.carousel__arrow_right');
  const buttonLeft = document.querySelector('.carousel__arrow_left');
  buttonLeft.style.display = 'none';
  let count = 0;
  let width = 500;
  // width = null;
  
  // function init() {
    // width = document.querySelector('.carousel').offsetWidth;
    carouselInner.style.width = width + 'px';

    slides.forEach((slide) => {
      slide.style.width = width + 'px';
      let img = slide.querySelector('.carousel__img');

      if (img) {
        img.style.width = width + 'px';
      }
    });
  // };

  // window.addEventListener('resize', init);

  buttonLeft.addEventListener('click', () => {
    count -= 1;
    carouselInner.style.transform = 'translateX(-' + count * width + 'px)';

    if(count == 0) {
      buttonLeft.style.display = 'none';
    }
    else if(count !== 3) {
      buttonRight.style.display = '';
    }

  });

  buttonRight.addEventListener('click', () => {
    count += 1;
    carouselInner.style.transform = 'translateX(-' + count * width + 'px)';
    
    if(count == 3) {
      buttonRight.style.display = 'none';
    }
    else if(count !== 0) {
      buttonLeft.style.display = '';
    }
  })

}
