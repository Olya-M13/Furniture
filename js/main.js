$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });

  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });

  $(".header__btn-menu").on("click", function () {
    $(".menu").toggleClass("menu--open");
  });

  if ($(window).width() < 651) {
    $(".work-path__item--measuring").appendTo($(".work-path__items-box"));
  }

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    // autoplay: true,
  });
  $(".contact-slider").slick({
    dots: true,
    slidesToShow: 10,
    slidesToScroll: 10,
    arrows: false,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".article-slider__box").slick({
    prevArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt=""></button>',
  });

  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
    animation: {
      effectsIn: "fade translateY(-100%)",
    },
  });
});
