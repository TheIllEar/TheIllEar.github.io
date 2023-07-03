document.addEventListener('DOMContentLoaded', function () {
  //MODAL FORM/////////////////////////////////////////////////////
  let modalForm = document.querySelector('.modal-form');
  let bannerBtn = document.querySelectorAll('.banner .btn');
  let closeBtn = modalForm.querySelector('.form-close');

  for (let banner of bannerBtn) {
    banner.addEventListener('click', function() {
      modalForm.classList.add('modal-form--visible');
    });

    closeBtn.addEventListener('click', function() {
      modalForm.classList.remove('modal-form--visible')
    }); 

    document.addEventListener('keydown', function(evt) {
      if (evt.keyCode === 27) {
        modalForm.style.display = 'none';
      }
    });
  }

  //MODAL DOCUMENTS/////////////////////////////////////////////////
  let modalBlock = document.querySelector('.modal');
  let modalContent = document.querySelector('.modal-content');
  let imgAll = document.querySelectorAll('.certificate__img');
  let img = document.querySelector('.certificate__img');
  let closeContent = document.querySelector('.close');

  imgAll.forEach((img) => {
    img.addEventListener('click', function() {
      modalBlock.style.display = 'block';
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
  // let header = document.querySelector('.header');
  // let nav = document.querySelector('.nav');
  // window.onscroll = function showNav () {
  //   if (window.pageYOffset > 160) {
  //     nav.classList.add('nav--fixed');
  //     header.style.marginBottom = '55px';
  //   } else {
  //     nav.classList.remove('nav--fixed');
  //     header.style.marginBottom = '0px'; 
  //   };
  // };

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

  //SLIDERS//////////////////
  // $('.owl-carousel-projects').owlCarousel({
  //   loop:true,
  //   margin:20,
  //   nav:true,
  //   dots:false,
  //   startPosition: 4,
  //   autoplay: true,
  //   responsiveClass:true,
  //   responsive : {
  //     0:{
  //       items:1,
  //       dots:true,
  //       nav:false
  //     },
  //     461:{
  //       items:2,
  //       dots:true,
  //       nav:false
  //     },
  //     840:{
  //       items:2,
  //       nav:true
  //     },
  //     1060:{
  //       items:3,
  //       nav:true
  //     }
  //   }
  // });

  // $('.owl-carousel-partners').owlCarousel({
  //   loop:true,
  //   margin:20,
  //   nav:true,
  //   dots:true,
  //   autoplay: true,
  //   responsiveClass:true,
  //   responsive : {
  //     0:{
  //       items:2,
  //       nav:false
  //     },
  //     650:{
  //       items:3,
  //       nav:true
  //     },
  //     800:{
  //       items:4,
  //       nav:true
  //     },
  //     1000:{
  //       items:5,
  //       nav:true
  //     }
  //   }
  // });

  // $('.owl-carousel-certificates').owlCarousel({
  //   responsiveClass:true,
  //   responsive : {
  //     0:{
  //       items:1
  //     },
  //     440:{
  //       items:2
  //     },
  //     840:{
  //       items:2
  //     },
  //     1060:{
  //       items:3
  //     }
  //   }
  // });

  // $('.owl-carousel-banner').owlCarousel({
  //   loop:true,
  //   margin:20,
  //   nav:false,
  //   dots:true,
  //   items:1,
  //   autoplay: true,
  //   autoplayTimeout:4000
  // });

});
