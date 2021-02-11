// SMOOTH SCROLL /////////////////////////////////////////////////////
const anchors = document.querySelectorAll('a[href*="#"]'); //gets all anchors (a) that contain # in href.

for (let anchor of anchors) {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};
// SMOOTH SCROLL можно переделать на манер, кк написано на листке HTMLAcademy


// DINO /////////////////////////////////////////////////////
const dinosaur = document.querySelector('.dino-box__dinosaur');
const cactus = document.querySelector('.dino-box__cactus');

document.addEventListener('keydown', (evt) => {
  if (dinosaur.classList != 'jump') {
    dinosaur.classList.add('jump');
  }
  setTimeout(() => {
    dinosaur.classList.remove('jump');
  }, 950)
});

setInterval(() => {
  let dinosaurTop = parseInt(window.getComputedStyle(dinosaur).top);
  let cactusLeft = parseInt(window.getComputedStyle(cactus).left);

  // if (cactusLeft < 50 && cactusLeft > 0 && dinosaurTop >= 200) {
  //   alert('GAME OVER!')
  // }
}, 10);


// DROP DOWN MOBILE MENU /////////////////////////////////////////////////////
const menuBtn = document.querySelector('.menu-btn');
const backBtnList = document.querySelectorAll('.menu-list__item--back');
const menuBox = document.querySelector('.menu-box');
const menuList = document.querySelector('.menu-list');
const menuSetting = document.querySelector('.menu-list--setting');
const menuHelp = document.querySelector('.menu-list--help');
const itemSetting = document.querySelector('.menu-list__item-setting');
const itemHelp = document.querySelector('.menu-list__item-help');

menuBtn.onclick = (() => {
  menuBox.classList.toggle('menu-box--show')
});
itemSetting.onclick = (() => {
  menuList.style.marginLeft = '-400px';
  setTimeout(() => {
    menuSetting.style.display = 'block';
  }, 100);
});
itemHelp.onclick = (() => {
  menuList.style.marginLeft = '-400px';
  setTimeout(() => {
    menuHelp.style.display = 'block';
  }, 100);
});

for (let backBtn of backBtnList) {
  backBtn.onclick = (() => {
    menuList.style.marginLeft = '';
    menuSetting.style.display = 'none';
    menuHelp.style.display = 'none';
  });
}

// DROP DOWN MENU /////////////////////////////////////////////////////
// const ddLink = document.querySelectorAll('.DropDown-list__link--nav');
// const ddSubLink = document.querySelectorAll('.dd-menu-list__link');
//
// ddLink.forEach((item) => {
//   item.addEventListener('click', () => {
//     ddSubLink.forEach((link) => {
//       link.classList.remove('active');
//     });
//     ddLink.forEach((item) => {
//       item.classList.remove('active');
//     });
//     item.classList.add('active');
//   });
// });
//
// ddSubLink.forEach((link) => {
//   link.addEventListener('click', () => {
//     ddSubLink.forEach((link) => {
//       link.classList.remove('active');
//     });
//     link.classList.add('active');
//   });
// });
