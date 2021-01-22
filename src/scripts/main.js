'use strict';

const nav = document.querySelector('.header__nav');
const toggler = document.querySelector('.toggler');

toggler.onclick = function toggleSidebar() {
  nav.classList.toggle('header__nav--has-popup');
  toggler.classList.toggle('toggler--open');
};

const slider = document.querySelector('.slider');
const goToPrevButton = slider.querySelector('.slider__button--left');
const goToNextButton = slider.querySelector('.slider__button--right');

const demo = slider.querySelector('.slider__demo');
const demoIndexArr = [0, 1, 2];
let actualDemoIndex = 0;

const rotateClockwise = () => {
  return actualDemoIndex + 1 <= demoIndexArr.length - 1
    ? actualDemoIndex + 1 : 0;
};
const rotateCounterclockwise = () => {
  return actualDemoIndex - 1 >= 0
    ? actualDemoIndex - 1 : demoIndexArr.length - 1;
};

goToPrevButton.addEventListener('click', () => {
  demo.className = `slider__demo slider__demo--${rotateCounterclockwise()}`;
  actualDemoIndex = rotateCounterclockwise();
});

goToNextButton.addEventListener('click', () => {
  demo.className = `slider__demo slider__demo--${rotateClockwise()}`;
  actualDemoIndex = rotateClockwise();
});
