// Swiper JS Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesToShow: 1,
  navigation: {
    nextEl: ".swiper-button-nexts",
    prevEl: ".swiper-button-prevs",
  },
  loop: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },

    501: {
      slidesPerView: 1,
    },

    769: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
// Swiper Testimonials
