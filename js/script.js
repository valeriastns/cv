"use strict";

document.addEventListener("DOMContentLoaded", function () {

  ///hamburger menu toggle

  const hamburger = document.querySelector('.hamburger-menu'),
    navMenu = document.querySelector('.header__nav-menu'),
    hamburgerLine1 = document.querySelector('.line1'),
    hamburgerLine2 = document.querySelector('.line2'),
    hamburgerLine3 = document.querySelector('.line3');



  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburgerLine1.classList.toggle('transformed');
    hamburgerLine2.classList.toggle('transformed');
    hamburgerLine3.classList.toggle('transformed');

  });

});