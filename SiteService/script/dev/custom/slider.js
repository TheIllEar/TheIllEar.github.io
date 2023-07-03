(function () {
  'use strict';
  /**
   *  ############################################################
   *
   *                       Модуль слайдеров
   *
   *  ############################################################
   */

  // data-app-slider="name" - на контейнер над слайдером
  // data-app-slider-thumbs="name" - на контейнер превьюх

  app.modules.slider = {
    _selectors: {
      body: 'body',
      sliders: '[data-app-slider]',
      slider_container: '[data-app-slider-container]',
      thumbs_container: '[data-app-thumbs-container]',
      video_wrapper: '[data-app-video-wrapper]',
      video_wrapper_inner: '.wrapper-video__inner',
      navigation: '[data-app-arrows-container]',
      navigation_left: '[data-app-arrow-prev]',
      navigation_right: '[data-app-arrow-next]',
      photoSwipe: {
        container: '[data-app-photoswipe-container]',
        itemPhoto: '[data-app-photoswipe-photo]',
      },
      pswp: {
        container: '.pswp',
        buttons: '[data-app-pswp-buttons]',
      },
    },
    // _classes: {
    //   has_thumbs: 'has-thumbs',
    // },
    _data: {
      slider_name: 'appSlider',
    },

    _vars: {
      sliders: {},
      iframes: {},
    },

    /**
     * Функция инициализации
     */
    init() {
      this.initSliders();
      //   this.initPhotoSwipe();
      //   setTimeout(() => {
      //     this.reInitSliders();
      //   }, 750);
    },

    /**
     * инициализация слайдеров
     */
    initSliders() {
      const that = this,
        body = document.querySelector(this._selectors.body),
        containers = body.querySelectorAll(this._selectors.sliders);

      if (containers.length) {
        containers.forEach((productContainer) => {
           
          const sliders = productContainer.querySelectorAll('.swiper-slide'),
            sliderContainer = productContainer.closest(this._selectors.slider_container),
            // sliderContainerWidth = sliderContainer.clientWidth,
            sliderName = productContainer.dataset[this._data.slider_name],
            // navigation = productContainer.closest('.wrapper').querySelector(this._selectors.navigation),
            // navigationLeft = productContainer.closest('.wrapper').querySelector(this._selectors.navigation_left),
            // navigationRight = productContainer.closest('.wrapper').querySelector(this._selectors.navigation_right),
            _setting = {
              slidesPerView: 1,
              grabCursor: true,
            //   navigation: {
            //     prevEl: navigationLeft,
            //     nextEl: navigationRight,
            //   },
              // loop: true,
              // autoplay: {
              //   delay: 4500,
              // },
              on: {
                init() {
                  // this.el.addEventListener('mouseenter', (e) => {
                  //   this.autoplay.stop();
                  // });
                  // this.el.addEventListener('mouseleave', () => {
                  //   this.autoplay.start();
                  // });
                  // this.el.addEventListener('touchMove', () => {
                  //   this.autoplay.stop();
                  // });
                },
              },
            };

          //   sliderContainer.style.width = `${sliderContainerWidth}px`;
          //   if (navigation) {
          //     navigation.style.width = `${sliderContainerWidth}px`;
          //     navigation.style.width = `${sliderContainerWidth}px`;
          //     setTimeout(() => {
          //       navigation.querySelectorAll('.arrow').forEach((_arrow) => {
          //         _arrow.style.height = `${sliderContainer.clientHeight}px`;
          //       });
          //     }, 100);
          //   }
          //   sliders.forEach((_slide) => {
          //     if (_slide.querySelector('iframe')) {
          //       this._iframeHandler(_slide);
          //     }
          //   });
          //   if (productContainer.classList.contains(this._classes.has_thumbs) && body.querySelector(`[data-app-slider-thumbs='${sliderName}']`)) {
          //     let thumbs = body.querySelector(`[data-app-slider-thumbs='${sliderName}']`),
          //       thumbsContainer = thumbs.closest(this._selectors.thumbs_container),
          //       thumbsContainerWidth = thumbsContainer.clientWidth,
          //       thumbsSetting = {
          //         slidesPerView: 2,
          //         watchSlidesVisibility: true,
          //         watchSlidesProgress: true,
          //         grabCursor: true,
          //         breakpoints: {
          //           [320]: {
          //             slidesPerView: 3,
          //           },
          //           [720]: {
          //             slidesPerView: 4,
          //           },
          //         },
          //       },
          //       swiperThumbs = new Swiper(thumbs, thumbsSetting);
          //     thumbsContainer.style.width = `${thumbsContainerWidth}px`;
          //     if (swiperThumbs) {
          //       if ((window.innerWidth >= 320 && sliders.length > 3) || (window.innerWidth >= 720 && sliders.length > 4)) {
          //         _setting.scrollbar = {
          //           el: '.swiper-scrollbar',
          //           draggable: true,
          //         };
          //       }
          //       _setting.thumbs = {
          //         swiper: swiperThumbs,
          //       };
          //       swiperThumbs.on('sliderMove', function (swiperThumbs, e) {
          //         this.el.classList.add('dont-touch');
          //       });
          //       swiperThumbs.on('touchEnd', function (swiperThumbs, e) {
          //         setTimeout(() => {
          //           this.el.classList.remove('dont-touch');
          //         }, 200);
          //       });
          //     }
          //   }
          let swiperMain = new Swiper(productContainer, _setting);
          console.log(_setting);
          console.log(swiperMain);
          this._vars.sliders[sliderName] = swiperMain;
          //   swiperMain.on('slideChange', function () {
          //     if (Object.keys(that._vars.iframes).length) {
          //       that._playVideoHandler(swiperMain);
          //     }
          //   });
        });
      }
    },

    initPhotoSwipe() {
      let photoItems = document.querySelectorAll(this._selectors.photoSwipe.itemPhoto),
        container = document.querySelector(this._selectors.pswp.container);

      if (photoItems.length && container) {
        let itemsOption = [];

        photoItems.forEach((_photo, i) => {
          itemsOption.push({
            src: _photo.dataset.appPhotoswipePhoto,
            w: 1280,
            h: 1024,
          });
          _photo.addEventListener('click', (e) => {
            e.preventDefault();
            let options = {
                index: i,
                bgOpacity: 0.85,
                showHideOpacity: true,
                closeOnVerticalDrag: true,
                closeOnScroll: false,
                showAnimationDuration: 300,
                shareEl: false,
                arrowEl: true,
                fullscreenEl: false,
                showCaption: false,
                allowLongCaptions: false,
                loop: false,
              },
              gallery = new PhotoSwipe(container, PhotoSwipeUI_Default, itemsOption, options);

            gallery.init();
          });
        });
      }
    },

    reInitSliders() {
      const body = document.querySelector(this._selectors.body),
        containers = body.querySelectorAll(this._selectors.sliders);

      if (containers.length) {
        containers.forEach((productContainer) => {
          let slide = productContainer.querySelector('.swiper-slide');

          if (slide && slide.swiperSlideSize < productContainer.clientWidth) {
            this.initSliders();
          }
        });
      }
    },
  };
})();
