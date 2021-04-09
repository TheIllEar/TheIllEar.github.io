;(function(){ //IIFE
  'use strict'
  document.addEventListener('DOMContentLoaded', function () {
    //MODAL FORM/////////////////////////////////////////////////////
    let modalForm = document.querySelector('.modal-form');
    let bannerBtn = document.querySelector('.banner .btn');
    let closeBtn = modalForm.querySelector('.form-close');

    bannerBtn.addEventListener('click', function() {
      modalForm.style.display = "block";
    });

    closeBtn.addEventListener('click', function() {
      modalForm.style.display = "none";
    });

    document.addEventListener('keydown', function(evt) {
      if (evt.keyCode === 27) {
        modalForm.style.display = "none";
      }
    });

    //MODAL DOCUMENTS/////////////////////////////////////////////////
    let modalBlock = document.querySelector('.modal');
    let modalContent = document.querySelector('.modal-content');
    let imgAll = document.querySelectorAll('.certificate__img');
    let img = document.querySelector('.certificate__img');
    let closeContent = document.querySelector('.close');

    imgAll.forEach((img) => {
      img.addEventListener('click', function() {
        modalBlock.style.display = "block";
        modalContent.src = this.src;
      });
    });

    closeContent.addEventListener('click', function() {
      modalBlock.style.display = "none";
    });

    document.addEventListener('keydown', function(evt) {
      if (evt.keyCode === 27) {
        modalBlock.style.display = "none";
      }
    });

    //NAV-FIXED/////////////////////////////////////////////////
    let header = document.querySelector('.header');
    let nav = document.querySelector('.nav');
    window.onscroll = function showNav () {
      if (window.pageYOffset > 160) {
        nav.classList.add('nav--fixed');
        header.style.marginBottom = '55px';
      } else {
        nav.classList.remove('nav--fixed');
        header.style.marginBottom = '0px';
      };
    };

  //SMOOTH SCROLL/////////////////////////////////////////////////////
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
      anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

  //FORM VALIDATE/////////////////////////////////////////////////////
    const form = document.querySelectorAll('form');

    form.forEach((item) => {
      const formBtn = item.querySelector('.form__btn');
      const validateElem = (elem) => {
        if (elem.value == '') {
          elem.style.borderColor = 'red';
        } else {
          elem.style.borderColor = '#41B7CF';
        };
      };

      for (let elem of item.elements) {
        if (!elem.classList.contains('form__checkbox') && !elem.classList.contains('form__btn') && !elem.classList.contains('form__textarea')) {
          elem.addEventListener('blur', () => {
            validateElem(elem);
          });
        };
      };

      formBtn.addEventListener('click', (event) => {
        for (let elem of item.elements) {
          if (!elem.classList.contains('form__checkbox') && !elem.classList.contains('form__btn') && !elem.classList.contains('form__textarea')) {
            validateElem(elem);
          };
        };
      });
    });

    //COOKIE////////////////////
    const cookie = document.querySelector('.cookie');
    const cookieBtn = cookie.querySelector('.cookie__btn');

    cookieBtn.addEventListener('click',(event) => {
      event.preventDefault();
      cookie.classList.remove('cookie--active');
      localStorage.setItem('cookieDisplayed','true');
    });

    setTimeout(() => {
      if (!localStorage.getItem('cookieDisplayed')) {
        cookie.classList.add('cookie--active');
      }
    }, 2000);

    //MODAL MENU//////////////////
    const burger = document.querySelector('.burger__img');
    const modalMenu = document.querySelector('.modal-menu');
    const modalMenuClose = modalMenu.querySelector('.modal-menu-close__btn');
    const navContainer = document.querySelector('.nav-container');

    burger.addEventListener('click', (evt) => {
      evt.preventDefault();
      navContainer.style.display = 'none';
      modalMenu.style.display = 'block';
      nav.style.marginBottom = '25px';
    });

    modalMenuClose.addEventListener('click', (evt) => {
      evt.preventDefault();
      navContainer.style.display = 'block';
      modalMenu.style.display = 'none';
      nav.style.marginBottom = '0px';
    });
  });
})();
