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
  // слайдер
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
    duration: 30000,
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
});
