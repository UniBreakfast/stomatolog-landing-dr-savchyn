enableCarousel('.carousel', 5000);

function enableCarousel(selector, interval) {
  const carousel = document.querySelector(selector);
  const [slideContainer, dots] = carousel.children;
  
  carousel.onclick = handleDotClick;

  function handleDotClick(e) {
    const dot = e.target.closest('.dots>li');

    if (!dot) return;

    const activeDot = carousel.querySelector('.active');
    const activeSlide = slideContainer.querySelector('.slide:not([hidden])');
    const i = Array.from(dots.children).indexOf(dot);
    const selectedSlide = slideContainer.children[i];
    
    activeSlide.hidden = true;
    selectedSlide.hidden = false;

    activeDot.classList.remove('active');
    dot.classList.add('active');
  }
}
