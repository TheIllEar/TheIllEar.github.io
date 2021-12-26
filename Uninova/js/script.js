document.addEventListener('DOMContentLoaded', function () {
  var slider = $('.doctors-slider');
  var sliderCounter = document.querySelector('.slider__counter');

  if (slider.length) {
    var currentSlide;
    var slidesCount;
    var updateSliderCounter = function(slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + ' из ' + slidesCount)
    };

    slider.on('init', function(event, slick) {
      updateSliderCounter(slick);
    });

    slider.on('afterChange', function(event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });
  };
});
