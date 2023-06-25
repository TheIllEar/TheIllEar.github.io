(function () {
  'use strict';
  /**
   *  ############################################################
   *
   *                       SideMobileMenu
   *
   *  ############################################################
   */
  app.modules.sideMobileMenu = {
    _selectors: {
      body: 'body',
      nav_container: '[data-app-nav-container]',
      nav_btn: '[data-app-nav-btn]',
      shape: '[data-app-shape]',
    },
    _classes: {
      disable: 'disabled-scroll',
      nav_link: 'nav-link',
      toggle: 'toggle',
    },
    init() {
      this._listeners();
      this._hammerInit();
      this._mobileMenuHandler();
    },

    _listeners() {},

    _hammerInit() {
      if (window.innerWidth < 720) {
        const body = document.querySelector(this._selectors.body),
          navContainer = body.querySelector(this._selectors.nav_container),
          hammertime = new Hammer(navContainer);

        hammertime.on('pan', (e) => {
          if (e.offsetDirection === 2 && !e.target.classList.contains(this._classes.nav_link)) {
            this._handleTouch(e, navContainer);
          }
        });
      }
    },

    _mobileMenuHandler() {
      if (window.innerWidth < 720) {
        const body = document.querySelector(this._selectors.body),
          shape = body.querySelector(this._selectors.shape),
          navContainer = body.querySelector(this._selectors.nav_container),
          navBtns = body.querySelectorAll(this._selectors.nav_btn);

        if (navContainer && navBtns) {
          navBtns.forEach((navBtn) => {
            navBtn.addEventListener('click', () => {
              navContainer.classList.toggle(this._classes.toggle);
              body.classList.toggle(this._classes.disable);
            });
          });
          body.addEventListener('click', (e) => {
            if (e.target === shape) {
              navContainer.classList.remove(this._classes.toggle);
              body.classList.remove(this._classes.disable);
            }
          });
        }
      }
    },

    _handleTouch(e, navContainer) {
      let x = e.center.x,
        total = navContainer.clientWidth,
        position = x - total;

      if (position < 0) navContainer.style.left = x - total + 'px';
      else if (position >= 0) navContainer.style.left = 0 + 'px';
      if (e.isFinal) {
        let navBtn = navContainer.querySelector(this._selectors.nav_btn);
        navContainer.style.left = '';
        if (position <= -total * 0.5) {
          navBtn.click();
        } else {
            console.log('обнуляем');
            navContainer.style.left = 0;
        }
      }
    },
  };
})();
