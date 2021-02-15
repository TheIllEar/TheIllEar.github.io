//Создаем переменную, в которую сохраняем наше модальное окно
var modal = $('.mymodal');

//Функция устанавливает значение свойства display в то, которое указано в ее параметрах при вызове
function setModal(display){
  modal.css('display', display);
}

//Функция обрабатывает клик по кнопке "Оставить заявку"
$('#modal').click(function(){
  setModal('block');
});

//Функция обрабатывает клик по кнопке "Закрыть"
$('.close').click(function(){
  setModal('none');
});

//Функция обрабатывает клики по модальному окну, и, если клик не произошел не по блоку content и не по его дочерним элементам, то закрываем модальное окно
$(modal).click(function(e){
  var target = e.target;
  if(!($('.content').is(target)) && $('.content').has(target).length ===0){
    setModal('none');
  }
});

//Если нажата клавиша ESC, то закрываем модальное окно
$(document).keydown(function(e){
  if(e.which == 27 ){
    setModal('none');
  }
});

//NAV-FIXED/////////////////////////////////////////////////
let headerTop = document.querySelector('.u-header--sticky-top');
let dzsparallaxer = document.querySelector('.dzsparallaxer');
window.onscroll = function showNav () {
  if (window.pageYOffset > 100) {
    if (document.documentElement.clientWidth > 771) {
      headerTop.style.top = '-54px';
    } else {
      headerTop.style.top = '-132px';
    }
  } else {
    headerTop.style.top = '0';
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

  //MENU ADAPTIVE////////
  const burgerBox = document.querySelector('.hamburger-box');
  const burger = document.querySelector('.hamburger');
  burger.addEventListener('click', () => {
      burgerBox.classList.toggle('hamburger-box--active');
      burger.classList.toggle('hamburger--active');
  })
