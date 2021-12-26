document.addEventListener('DOMContentLoaded', function () {
  //ModalMenu
  const btnMenu = document.querySelector('.menu-btn')
  const modalMenu = document.querySelector('.modal-menu')
  const openCloseBtn = document.querySelector('.openCloseBtn')
  btnMenu.addEventListener('click', function() {
    modalMenu.classList.toggle('modal-menu--show')
    if (btnMenu.textContent == 'Menu') {
      btnMenu.textContent='Close'
      openCloseBtn.style.marginTop="150px"
    } else {
      btnMenu.textContent='Menu'
      openCloseBtn.style.marginTop="30px"
    }
  });
  //Background
  let value = document.querySelector('.bgfix')
  let albumNum = value.getAttribute('class')[11]
  for (let i = 1; i <= 8; i++) {
    if (i == albumNum && albumNum !== 7) {
      value.style.backgroundImage = 'url(../img/' + i + '.jpg)'
    }
    if (i == albumNum && albumNum == 7) {
      value.style.backgroundImage = 'url(../img/album' + i + '.jpg)'
    }
  }
});
