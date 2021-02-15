var $slider = $('.doctors-slider');
var sliderCounter = document.querySelector('.slider__counter');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + ' из ' + slidesCount)
  };

  $slider.on('init', function(event, slick) {
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
};


// $(document).ready(function () {
//     // const switches = $('.mode-switches__radio');
//
//     const gallerySwitching = function () {
//         let slideNumber = 1;
//
//         $('.gallery__slider.slick-initialized').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//             slideNumber  = nextSlide + 1;
//             let slideNumberCurrentPlace = $('.gallery__pagination-current');
//             slideNumberCurrentPlace.text(slideNumber);
//         });
//     };
//
//     gallerySwitching();
//
//     // switches.change(function () {
//     //     gallerySwitching();
//     // });
// });
