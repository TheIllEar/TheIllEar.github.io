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
    _classes: {
      pagination: 'pagination',
      navigation: 'navigation',
      loop: 'loop',
    },
    _data: {
      slider_name: 'appSlider',
      slider_autoplay: 'appSliderAutoplay',
    },

    _vars: {
      sliders: {},
      iframes: {},
      settings: {
        banners: {
          slidesPerView: 1,
          grabCursor: true,
        },
        projects: {
          slidesPerView: 1,
          grabCursor: true,
          spaceBetween: 12,
          breakpoints: {
            [550]: {
              slidesPerView: 2,
            },
            [720]: {
              spaceBetween: 24,
              slidesPerView: 2,
            },
            [1020]: {
              spaceBetween: 24,
              slidesPerView: 3,
            }
          },
        },
        certificates: {
          slidesPerView: 1,
          grabCursor: true,
          spaceBetween: 12,
          breakpoints: {
            [400]: {
              slidesPerView: 2,
            },
            [720]: {
              spaceBetween: 24,
              slidesPerView: 2,
            },
            [1020]: {
              spaceBetween: 24,
              slidesPerView: 3,
            }
          },
        },
        partners: {
          slidesPerView: 2,
          grabCursor: true,
          spaceBetween: 12,
          breakpoints: {
            [400]: {
              slidesPerView: 3,
            },
            [720]: {
              spaceBetween: 24,
              slidesPerView: 4,
            },
            [1020]: {
              spaceBetween: 24,
              slidesPerView: 5,
            }
          },
        },
      },
    },

    /**
     * Функция инициализации
     */
    init() {
      this.initSliders();
      this.initPhotoSwipe();
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
            sliderAutoplay = productContainer.dataset[this._data.slider_autoplay],
            _setting = this._vars.settings[sliderName];
          if (productContainer.classList.contains(this._classes.pagination)) {
            _setting.pagination = {
              el: '.swiper-pagination',
              clickable: true,
              type: 'bullets',
            };
          }
          if (productContainer.classList.contains(this._classes.navigation)) {
            const navigationLeft = productContainer.closest('.slider').querySelector(this._selectors.navigation_left),
              navigationRight = productContainer.closest('.slider').querySelector(this._selectors.navigation_right);

            _setting.navigation = {
              prevEl: navigationLeft,
              nextEl: navigationRight,
            };
          }
          if (productContainer.classList.contains(this._classes.loop)) {
            _setting.loop = true;
          }
          if (sliderAutoplay) {
            _setting.autoplay = {
              delay: parseInt(sliderAutoplay),
            };
            _setting.on = {
              init() {
                this.el.addEventListener('mouseenter', (e) => {
                  this.autoplay.stop();
                });
                this.el.addEventListener('mouseleave', () => {
                  this.autoplay.start();
                });
                this.el.addEventListener('touchMove', () => {
                  this.autoplay.stop();
                });
              },
            };
          }
          let swiperMain = new Swiper(productContainer, _setting);
          this._vars.sliders[sliderName] = swiperMain;
          swiperMain.on('slideChange', function () {
            if (this.slides[this.activeIndex].classList.contains('loading')) {
              app.modules.lazyLoad.itemLazyLoadHandler(this.slides[this.activeIndex]);
            }
          });
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
