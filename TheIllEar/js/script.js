$(window).scroll(function () {
  if ($(this).scrollTop() > 180) {
    $('.fixed-logo').addClass("fix"),
    $('.top').addClass("top-fix");
    $('.row-header').mouseenter(function () {
      $('.fixed-logo').addClass('fix--hover'),
      $('.row-header').addClass('header--fixed'),
      $('.banner').addClass('banner--fixed');
    }).mouseleave(function () {
      $('.fixed-logo').removeClass('fix--hover'),
      $('.row-header').removeClass('header--fixed'),
      $('.banner').removeClass('banner--fixed');
    });
  }
  else {
  $('.fixed-logo').removeClass("fix"),
  $('.top').removeClass("top-fix");
  $('.row-header').mouseenter(function () {
    $('.fixed-logo').removeClass('fix--hover'),
    $('.row-header').removeClass('header--fixed'),
    $('.banner').removeClass('banner--fixed');
      })
  };
});
$(document).ready(function () {
  $('.top-ico').click(function () {
  $('body,html').animate({
  scrollTop: 0
  }, 500);
  return false;
  });
});
$(".header-btn").click(function () {
  $(".modal-nav").show();
  $(".header-btn").hide();
});
$(".close-btn").click(function () {
  $(".modal-nav").hide();
  $(".header-btn").show();
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 1600) {
  $('.fixed-logo').removeClass("fix");
  }
});

$(document).ready(function () {
  $('.carousel').slick({
    infinite: true,
    variableWidth: true,
    arrows: false,
    centerMode: true,
    dots: true,
    slidesToShow: 1
  });
});
