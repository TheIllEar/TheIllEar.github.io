(function () {
  'use strict';
  /**
   *  ############################################################
   *
   *                        Content
   *
   *  ############################################################
   */
  app.modules.content = {
    _selectors: {
      body: 'body',
      date: '[data-app-year]',
      date: '[data-app-year]',
      cookie: '.cookie',
      cookie_btn: '.cookie__btn',
    },
    _class: {
      active: 'cookie--active',
    },

    init() {
      this._modalCookiesHandler();
      this._dateHandler();
      this._initAos();
    },

    /**
     * Обработка модалки куки
     */
    _modalCookiesHandler() {
      if (!localStorage.getItem('cookieDisplayed')) {
        const cookie = document.querySelector(this._selectors.cookie),
          cookieBtn = cookie.querySelector(this._selectors.cookie_btn);

        cookieBtn.addEventListener('click', (e) => {
          e.preventDefault();
          cookie.classList.remove(this._class.active);
          localStorage.setItem('cookieDisplayed', 'true');
        });

        setTimeout(() => {
          cookie.classList.add(this._class.active);
        }, 2000);
      }
    },

    /**
     * Обработка текущей даты
     */
    _dateHandler() {
      const dateContainer = document.querySelector(this._selectors.date);

      if (dateContainer) {
        dateContainer.textContent = new Date().getFullYear();
      }
    },

    _initAos() {
      console.log('aos', AOS);
      AOS.init();
    },
  };
})();
