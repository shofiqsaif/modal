'use strict';

const b = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

let hidden = true;
const toggleDisplay = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  hidden = !hidden;
};

b.forEach(element => {
  element.addEventListener('click', () => {
    console.log('Button Clicked');
    // modal.classList.remove('hidden');
    // overlay.classList.remove('hidden');
    toggleDisplay();
  });
});

overlay.addEventListener('click', () => {
  //   overlay.classList.add('hidden');
  //   modal.classList.add('hidden');
  toggleDisplay();
});

closeModal.addEventListener('click', () => {
  toggleDisplay();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!hidden) toggleDisplay();
  }
});
