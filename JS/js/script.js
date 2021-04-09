document.addEventListener('DOMContentLoaded', function () {
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

  menuBtn.addEventListener('click', () => {
    menuBox.classList.toggle('menu-box--show');
  });
  itemSetting.addEventListener('click', () => {
    menuList.style.marginLeft = '-400px';
    setTimeout(() => {
      menuSetting.style.display = 'block';
    }, 100);
  });

  itemHelp.addEventListener('click', () => {
    menuList.style.marginLeft = '-400px';
    setTimeout(() => {
      menuHelp.style.display = 'block';
    }, 100);
  });

  for (let backBtn of backBtnList) {
    backBtn.addEventListener('click', () => {
      menuList.style.marginLeft = '';
      menuSetting.style.display = 'none';
      menuHelp.style.display = 'none';
    });
  };

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
  ///////////////////////////////////////////////////////////////////////////////

  // DRUG N DROP /////////////////////////////////////////////////////
  let blockFrom = document.querySelector(".block-from")
  let blockInto = document.querySelector(".block-into")
  let elems = document.querySelectorAll("div.elem")
  let elem = document.querySelector(".elem")
  let dragged = null

  elems.forEach(function (elem) {
    elem.addEventListener("dragstart", function () {
      dragged = this
      dragged.style.backgroundColor = "yellow"
      blockFrom.style.borderColor = "yellow"
    })
    elem.addEventListener("dragend", function () {
      dragged = this
      dragged.style.backgroundColor = ""
      blockFrom.style.borderColor = ""
      blockInto.style.borderColor = ""
    })
  })

  blockInto.addEventListener("dragover", function (evt) {
    evt.preventDefault()
    this.style.borderColor = "yellow"
    blockFrom.style.borderColor = ""
  })

  blockInto.addEventListener("drop", function () {
    this.appendChild(dragged)
    this.style.borderColor = ""
  })

  blockFrom.addEventListener("dragover", function (evt) {
    evt.preventDefault()
    this.style.borderColor = "yellow"
  })

  blockFrom.addEventListener("drop", function () {
    this.appendChild(dragged)
  })

  // MEDIA /////////////////////////////////////////////////////
  const mediaQuery = window.matchMedia('(max-width: 768px)') // Создаем медиа условие, проверяющее viewports на ширину не менее 768 пикселей.
  if (mediaQuery.matches) { //.matches подходит только для одноразовых проверок, но оно не может постоянно проверять наличие изменений окна браузера
    console.log('Media Query Matched!')
  } else {

  }


  const handleTabletChange = (evt) => {
    if (evt.matches) {
      blockFrom.style.display = 'none';
    } else {
      blockFrom.style.display = '';
    }
  }

  handleTabletChange(mediaQuery)
  mediaQuery.addListener(handleTabletChange) //метод, «включающий» прослушку на изменение ширины экрана


  // HEADER STICKY //////////////////////////////////////////////
  const header = document.querySelector('header');

  window.onscroll = function () {
    if (window.pageYOffset > 600) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    };
  };

  // .header--sticky{
  //   position: sticky;
  //   top: 0;
  //   z-index: 20;
  //   animation-name: header-sticky;
  //   animation-duration: 0.7s;
  //   @keyframes header-sticky {
  //     0% {
  //       top: -70px;
  //     }
  //     100% {
  //       top: 0;
  //     }
  //   }
  // }

});
