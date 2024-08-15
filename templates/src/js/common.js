$(document).ready(function () {
  $(document).on('click', '.header_btn', function () {
    $('.header_btn').not(this).next().removeClass('active');
    $('.header_btn').not(this).removeClass('active');
    $(this).next().toggleClass('active');
    $(this).toggleClass('active');
    $('.overlay').toggleClass('active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header_block').length) {
      $('.header_btn').next().removeClass('active');
      $('.header_btn').removeClass('active');
      $('.overlay').removeClass('active');
    }
  });

  // скролл к секции
  $(document).on('click', '.menu_list a', function (e) {
    e.preventDefault();
    let href = $(this).attr('href');

    $('.header_btn').next().removeClass('active');
    $('.header_btn').removeClass('active');
    $('.overlay').removeClass('active');

    $('html, body').animate(
      {
        scrollTop: $(href).offset().top,
      },
      {
        easing: 'linear',
      }
    );
    return false;
  });

  //  наведение на блоки в блоке Наши услуги
  $('.services_list li').on('mouseenter', function (e) {
    $(this).find('.title').addClass('hide').removeClass('show');
    $(this).find('.text').addClass('show').removeClass('hide');
  });

  $('.services_list li').on('mouseleave', function (e) {
    $(this).find('.title').addClass('show').removeClass('hide');
    $(this).find('.text').addClass('hide').removeClass('show');
  });

  // //  бегущая строка информации в большом слайдерe
  // let sliderMarqueeOptions = {
  //   duration: 30000,
  //   duplicated: true,
  //   pauseOnHover: true,
  //   startVisible: true,
  //   gap: 12,
  // };

  // let sliderMarquee = $('.head_slider .info_line').marquee(
  //   sliderMarqueeOptions
  // );
  // sliderMarquee.marquee('pause');

  // function sliderMarqueeFunc(slider) {
  //   let activeSlide = slider.slides[slider.activeIndex];
  //   let lineSlider = activeSlide.querySelector('.head_slider .info_line');

  //   // останавливать бегущую строку если не активный слайд
  //   Object.values(sliderMarquee).forEach((item) => $(item).marquee('pause'));

  //   // Запускать бегущую строку при перелистывании слайдера
  //   if (lineSlider) {
  //     $(lineSlider).marquee('resume');
  //   }
  // }

  // if ($(window).width() > 993) {
  //   //  бегущая строка заголовка в большом слайдерe
  //   let titleMarqueeOptions = {
  //     duration: 20000,
  //     duplicated: false,
  //     pauseOnHover: true,
  //     startVisible: true,
  //     gap: 0,
  //   };

  //   let titleMarquee = $('.head_slider_wrapper .title').marquee(
  //     titleMarqueeOptions
  //   );
  //   titleMarquee.marquee('pause');

  //   function sliderTitleMarqueeFunc(slider) {
  //     let activeSlide = slider.slides[slider.activeIndex];
  //     let titleSlider = activeSlide.querySelector(
  //       '.head_slider_wrapper .title'
  //     );

  //     // останавливать бегущую строку если не активный слайд
  //     Object.values(titleMarquee).forEach((item) => $(item).marquee('pause'));

  //     // если заголовок не входит по ширине, то запускать бегущюю строку
  //     if (
  //       $(window).width() > 993 &&
  //       titleSlider &&
  //       $(titleSlider).find('.js-marquee').width() >=
  //         $(titleSlider).parent().width()
  //     ) {
  //       $(titleSlider).marquee('resume');
  //     }
  //   }
  // }

  // // большой слайдер
  // const headSlider = new Swiper('.head_slider', {
  //   slidesPerView: 1,
  //   spaceBetween: 20,
  //   speed: 600,
  //   // effect: 'fade',
  //   loop: true,
  //   watchOverflow: true,
  //   watchSlidesVisibility: true,
  //   watchSlidesProgress: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   on: {
  //     init: function (slider) {
  //       sliderMarqueeFunc(slider);
  //       if ($(window).width() > 993) {
  //         sliderTitleMarqueeFunc(slider);
  //       }
  //     },
  //     slideChangeTransitionEnd: function (slider) {
  //       sliderMarqueeFunc(slider);
  //       if ($(window).width() > 993) {
  //         sliderTitleMarqueeFunc(slider);
  //       }
  //     },
  //   },
  // });

  // слайдер команды
  const teamSlider = new Swiper('.team_slider', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    speed: 600,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      577: {
        slidesPerView: 'auto',
        spaceBetween: 24,
      },
      1201: {
        slidesPerView: 'auto',
        spaceBetween: 40,
      },
    },
  });

  // слайдер проектов на мобилке
  const projectSlider = new Swiper('.project_item_slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 600,
    // effect: 'fade',
    loop: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
      slideChange: function () {
        let currentSlide = this.activeIndex + 1;
        document.querySelector('.swiper-counter').innerHTML = `
        <span class="current">
        ${currentSlide < 10 ? +currentSlide : currentSlide}
        </span> 
        / 
        <span class="total">
          ${this.slides.length}
        </span>`;
      },
    },
  });

  //  бегущая строка с в большом в cta
  $('.text_line').marquee({
    duration: 15000,
    duplicated: true,
    pauseOnHover: true,
    startVisible: true,
    gap: 0,
  });

  //  показывать хедер при скролле
  $(window).scroll(function (e) {
    e.preventDefault();
    if ($(this).scrollTop() > 200) {
      $('.header').addClass('after_fixed');
      $('.overlay').hide();
    } else {
      $('.header').removeClass('after_fixed');
      if ($('.overlay').hasClass('active')) {
        $('.overlay').show();
      }
    }
    if ($(this).scrollTop() > 300) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });

  // прокручивать к нужному слайду при клике на маленькие слайды
  $(document).on('click', '.project_images_small .item', function (e) {
    e.preventDefault();
    let href = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop:
          $(href).offset().top +
          $(href).outerHeight() -
          $(window).height() +
          50,
      },
      1500,
      'linear'
    );
    return false;
  });

  // прокрутка к низу слайдера
  $(document).on('click', '.project_images_small_btn', function (e) {
    $('html, body').animate(
      {
        scrollTop:
          $('.project_images').offset().top +
          $('.project_images').outerHeight() -
          $(window).height(),
      },
      500,
      'linear'
    );
    return false;
  });

  // затемнять маленькие слайды, при ховере на один из них
  $('.project_images_small .item').on('mouseenter', function (e) {
    $('.project_images_small .item').not(this).css('opacity', '0.4');
  });

  $('.project_images_small .item').on('mouseleave', function (e) {
    $('.project_images_small .item').not(this).css('opacity', '1');
  });

  $(document).on('click', '.modal_callback_btn', function (e) {
    e.preventDefault();
    $('.modal_callback').addClass('show');
  });
  $(document).on('click', '.modal_close', function (e) {
    e.preventDefault();
    $('.modal_callback').removeClass('show');
  });

  // Маска для инпутов с номером телефона
  const phoneInputs = document.querySelectorAll('.form-control[type="tel"]');
  phoneInputs.forEach((input) => {
    IMask(input, {
      mask: '+{7} (000) 000-00-00',
    });
  });

  // скролл в слайдере
  // const slider = $('.project_images');
  // let sliderSmall = $('.project_images_small_block');
  // let sliderBorder = $('.project_images_small_border');
  // let project_images_small = $('.project_images_small');
  // let sliderHeight = slider.outerHeight();
  // let sliderSmallHeight = sliderSmall.outerHeight();
  // const maxBorderTranslate =
  //   project_images_small.outerHeight() - sliderBorder.outerHeight();

  // function isVisible() {
  //   let sliderTopPosition = slider[0].getBoundingClientRect().top;

  //   const topBorderPreccent =
  //     (sliderSmallHeight / 100) *
  //     (Math.abs(sliderTopPosition) / (sliderHeight / 100));

  //   if (sliderTopPosition < 0) {
  //     if (project_images_small[0].getBoundingClientRect().top > 0) {
  //       sliderSmall.css({
  //         top: `${topBorderPreccent}px`,
  //       });

  //       sliderBorder.css({
  //         top:
  //           topBorderPreccent <= maxBorderTranslate
  //             ? topBorderPreccent
  //             : maxBorderTranslate,
  //       });
  //     }
  //   }
  // }
  // isVisible();
  // $(window).on('scroll', function () {
  //   isVisible();
  // });

  // плавный скролл
  const lenis = new Lenis();
  lenis.on('scroll', (e) => {
    // isVisible();
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  const project_images = document.querySelectorAll('.project_images img');

  const imgPromises = Array.from(project_images).map((img) => {
    return new Promise((resolve, reject) => {
      // Проверяем, загружено ли изображение уже
      if (img.complete && img.naturalHeight !== 0) {
        resolve(img);
      } else {
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Ошибка загрузки изображения'));
      }
    });
  });
  // Используем Promise.all для ожидания загрузки всех изображений
  Promise.all(imgPromises)
    .then(() => {
      console.log('Все изображения загружены');
      gsap.registerPlugin(ScrollTrigger);

      let panels = gsap.utils.toArray('.section');

      panels.forEach((panel, i) => {
        // Создание ScrollTrigger для каждой секции
        ScrollTrigger.create({
          trigger: panel,
          start: () =>
            panel.offsetHeight < window.innerHeight
              ? 'top top'
              : 'bottom bottom',

          onEnter: () =>
            gsap.to(panel, { backgroundColor: '#F7F7F7', duration: 1 }), // Смена цвета при скролле вниз
          // onLeave: () => gsap.to(panel, { backgroundColor: '#fff', duration: 1 }), // Возврат цвета при скролле вверх
          onEnterBack: () =>
            gsap.to(panel, { backgroundColor: '#F7F7F7', duration: 1 }), // Смена цвета при обратном скролле
          onLeaveBack: () =>
            gsap.to(panel, { backgroundColor: '#fff', duration: 1 }), // Возврат цвета при обратном скролле

          pin: true, // Закрепление секции на экране
          pinSpacing: false, // Отключение отступов
        });
      });

      // скролл в слайдере
      const slider = document.querySelector('.project_images');
      const sliderWrapper = document.querySelector('.project_images_wrapper');
      let sliderImages = document.querySelector('.project_images_small');
      let sliderImagesWrapper = document.querySelector(
        '.project_images_small_block_wrapper'
      );
      let sliderImagesBlock = document.querySelector(
        '.project_images_small_block'
      );
      let sliderBorder = document.querySelector('.project_images_small_border');

      const maxBorderTranslate =
        sliderImages.offsetHeight - sliderBorder.offsetHeight;

      const maxSmallSliderTranslate =
        slider.offsetHeight -
        // sliderImagesWrapper.offsetHeight -
        sliderImagesBlock.offsetHeight;
      const scrollTriggerSettings = {
        trigger: sliderWrapper,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      };

      gsap.to('.project_images_small_border', {
        y: maxBorderTranslate,
        ease: 'none',
        scrollTrigger: scrollTriggerSettings,
      });

      gsap.to('.project_images_small_block', {
        y: maxSmallSliderTranslate,
        ease: 'none',
        scrollTrigger: scrollTriggerSettings,
      });
    })
    .catch((error) => {
      console.error('Ошибка при загрузке одного из изображений:', error);
    });
});
