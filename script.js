const stickyBtn = document.querySelector('.sticky-bar button');

enableCarousel('.carousel', 5000);
cloneFormToModal();

stickyBtn.onclick = openModalForm;

function enableCarousel(selector, interval) {
  const carousel = document.querySelector(selector);
  const [slideContainer, dotBar] = carousel.children;
  
  dotBar.onclick = handleDotClick;

  function handleDotClick(e) {
    const dot = e.target.closest('.dots>li');

    if (!dot) return;

    const i = Array.from(dotBar.children).indexOf(dot);

    switchToSlide(i);
  }

  function switchToSlide(i) {
    const activeDot = dotBar.querySelector('.active');
    const activeSlide = slideContainer.querySelector('.slide:not([hidden])');
    const selectedDot = dotBar.children[i];
    const selectedSlide = slideContainer.children[i];

    activeSlide.hidden = true;
    selectedSlide.hidden = false;

    activeDot.classList.remove('active');
    selectedDot.classList.add('active');
  }
}

function cloneFormToModal() {
  const modal = document.querySelector('.modal');
  const form = document.querySelector('.form form');
  const hint = document.querySelector('.form .hint');
  
  modal.append(form.cloneNode(true), hint.cloneNode(true));
}

function openModalForm() {
}
