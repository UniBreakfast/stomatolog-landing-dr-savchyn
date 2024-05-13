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
  const formClone = form.cloneNode(true);
  const hintClone = hint.cloneNode(true);
  const linkedElements = formClone.querySelectorAll('[for], [id]');

  for (const el of linkedElements) {
    if (el.hasAttribute('for')) {
      el.setAttribute('for', 'modal-' + el.getAttribute('for'));
    }
    if (el.hasAttribute('id')) {
      el.setAttribute('id', 'modal-' + el.getAttribute('id'));
    }
  }
  
  modal.append(formClone, hintClone);
}

function openModalForm() {
  const glass = document.querySelector('.glass');

  glass.hidden = false;
  glass.onclick = closeModalForm;
}

function closeModalForm(e) {
  if (e.target !== e.currentTarget) return;

  e.currentTarget.hidden = true;
}
