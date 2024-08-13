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

  //  бегущая строка с в большом слайдера
  let sliderMarqueeOptions = {
    duration: 30000,
    duplicated: true,
    pauseOnHover: true,
    startVisible: true,
    gap: 12,
  };

  let sliderMarquee = $('.info_line').marquee(sliderMarqueeOptions);
  sliderMarquee.marquee('pause');

  function sliderMarqueeFunc(slider) {
    let activeSlide =
      slider.slides[slider.activeIndex].querySelector('.info_line');

    // останавливать бегущую строку если не активный слайд
    Object.values(sliderMarquee).forEach((item) => $(item).marquee('pause'));

    // Запускать бегущую строку при перелистывании слайдера
    if (activeSlide) {
      $(activeSlide).marquee('resume');
    }
  }
  // большой слайдер
  const headSlider = new Swiper('.head_slider', {
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function (slider) {
        sliderMarqueeFunc(slider);
      },
      slideChangeTransitionEnd: function (slider) {
        sliderMarqueeFunc(slider);
      },
    },
  });

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

  // скролл в слайдере
  const slider = $('.project_slider');
  let sliderSmall = $('.project_slider_small_block');
  let sliderBorder = $('.project_slider_small_border');
  let project_slider_small = $('.project_slider_small');
  let sliderHeight = slider.outerHeight();
  let sliderSmallHeight = sliderSmall.outerHeight();
  const maxBorderTranslate =
    project_slider_small.outerHeight() - sliderBorder.outerHeight();

  function isVisible() {
    let sliderTopPosition = slider[0].getBoundingClientRect().top;

    const topBorderPreccent =
      (sliderSmallHeight / 100) *
      (Math.abs(sliderTopPosition) / (sliderHeight / 100));

    if (sliderTopPosition < 0) {
      if (project_slider_small[0].getBoundingClientRect().top > 0) {
        sliderSmall.css({
          top: `${topBorderPreccent}px`,
        });

        sliderBorder.css({
          top:
            topBorderPreccent <= maxBorderTranslate
              ? topBorderPreccent
              : maxBorderTranslate,
        });
      }
    }
  }
  isVisible();

  // const lenis = new Lenis();
  // lenis.on('scroll', (e) => {
  //   isVisible();
  // });
  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  $(window).on('scroll', function () {
    isVisible();
  });

  // прокручивать к нужному слайду при клике на маленькие слайды
  $(document).on('click', '.project_slider_small .item', function (e) {
    e.preventDefault();
    let href = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(href).offset().top,
      },
      1500,
      'linear'
    );
    return false;
  });

  // прокрутка к низу слайдера
  $(document).on('click', '.project_slider_small_btn', function (e) {
    $('html, body').animate(
      {
        scrollTop:
          slider.offset().top + slider.outerHeight() - $(window).height(),
      },
      500,
      'linear'
    );
    return false;
  });

  // затемнять маленькие слайды, при ховере на один из них
  $('.project_slider_small .item').on('mouseenter', function (e) {
    $('.project_slider_small .item').not(this).css('opacity', '0.4');
  });

  $('.project_slider_small .item').on('mouseleave', function (e) {
    $('.project_slider_small .item').not(this).css('opacity', '1');
  });
});
