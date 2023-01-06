// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");


// timeline

// import Swiper JS
// https://github.com/nolimits4web/Swiper/blob/Swiper3/API.md
import Swiper from './js/swiper';

var swiper = new Swiper(".swiper-container", {
    direction: 'vertical',
    loop: false,
    speed: 600,
    pagination: '.swiper-pagination',
    effect: 'fade',
    paginationBulletRender: function (swiper, index, className) {
        var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
        return '<span class="' + className + '">' + year + '</span>';
    },
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
        768: {
            direction: 'horizontal',
        }
    }
});
  
  console.log("🦊 Hello from didi");