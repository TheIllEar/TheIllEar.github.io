document.addEventListener('DOMContentLoaded', function () {
  // BannerSlider ////////////
  $('.carousel').slick({
    infinite: true,
    variableWidth: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  // ReleasesSlider ////////////
  $('.releases-carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  // OtherReviewsSlider ////////////
  $('.gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 982,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // HeaderSticky ////////////
  const header = document.querySelector('header');
  const mediaQuery = window.matchMedia('(min-width: 681px)');
  window.onscroll = function () {
    if (window.pageYOffset > 400 && mediaQuery.matches) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    };
  };

  // HeaderModal ////////////
  const headerBtn = document.querySelector(".header-btn");
  const modalNav = document.querySelector(".modal-nav");

  headerBtn.addEventListener('click', () => {
    headerBtn.style.display = "none";
    modalNav.style.display = "block";
  });
  modalNav.addEventListener('click', () => {
    modalNav.style.display = "none";
    headerBtn.style.display = "";
  });
});
