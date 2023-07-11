// $(document).ready(function() {

// });

(function () {
  'use strict';
  /**
   *  ############################################################
   *
   *                        Mail
   *
   *  ############################################################
   */
  app.modules.mail = {
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
      this._mailHandler();
      this._formValidateHandler();
    },

    _mailHandler() {
      const body = document.querySelector(this._selectors.body);
      // 	//E-mail Ajax Send
      // 	$("form").submit(function() { //Change
      // 		var th = $(this);
      // 		$.ajax({
      // 			type: "POST",
      // 			url: "mail.php", //Change
      // 			data: th.serialize()
      // 		}).done(function() {
      // 			alert('«Спасибо! Наш менеджер скоро свяжется с Вами»');
      // 			setTimeout(function() {
      // 				// Done Functions
      // 				th.trigger("reset");
      // 			}, 1000);
      // 		});
      // 		return false;
      // 	});
    },

    _formValidateHandler() {
      const form = document.querySelectorAll('form');

      form.forEach((item) => {
        const formBtn = item.querySelector('.form__btn');
        const validateElem = (elem) => {
          if (elem.value == '') {
            elem.style.borderColor = 'red';
          } else {
            elem.style.borderColor = '#41B7CF';
          }
        };

        for (let elem of item.elements) {
          if (!elem.classList.contains('form__checkbox') && !elem.classList.contains('form__btn') && !elem.classList.contains('form__textarea')) {
            elem.addEventListener('blur', () => {
              validateElem(elem);
            });
          }
        }

        formBtn.addEventListener('click', (event) => {
          for (let elem of item.elements) {
            if (!elem.classList.contains('form__checkbox') && !elem.classList.contains('form__btn') && !elem.classList.contains('form__textarea')) {
              validateElem(elem);
            }
          }
        });
      });
    },
  };
})();
