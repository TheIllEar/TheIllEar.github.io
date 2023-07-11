(function () {
  'use strict';
  /**
   *  ############################################################
   *
   *                        Modal
   *
   *  ############################################################
   */
  app.modules.modal = {
    _selectors: {
      body: 'body',
      modal: '.modal-form',
      btn: '.banner .btn',
      close: '.form-close',
    },
    _classes: {
      visible: 'modal-form--visible',
      disable: 'disabled-scroll',
    },
    init() {
      this._modalHandler();
    },
    _modalHandler() {
      const body = document.querySelector(this._selectors.body),
        modalForm = body.querySelector(this._selectors.modal),
        bannerBtn = body.querySelectorAll(this._selectors.btn),
        closeBtn = modalForm.querySelector(this._selectors.close);

      bannerBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          modalForm.classList.add(this._classes.visible);
          body.classList.add(this._classes.disable);
        });

        closeBtn.addEventListener('click', (e) => {
          modalForm.classList.remove(this._classes.visible);
          body.classList.remove(this._classes.disable);
        });

        document.addEventListener('keydown', (evt) => {
          if (evt.keyCode === 27) {
            // modalForm.style.display = 'none';
            closeBtn.click();
          }
        });
      });
    },
  };
})();
