import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
const reviewsSwiper = document.querySelector('.reviews__swiper');
const juryListSwiper = document.querySelector('.jury__list-wrapper');

const getSlider = () => {
  let reviewsSlider;
  let juryListSlider;

  if (reviewsSwiper) {
    reviewsSlider = new Swiper(reviewsSwiper, {
      modules: [Navigation],

      direction: 'horizontal',
      loop: false,
      speed: 1000,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
  }

  if (juryListSwiper) {
    juryListSlider = new Swiper(juryListSwiper, {
      modules: [Navigation],

      direction: 'horizontal',
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          initialSlide: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          initialSlide: 0,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        }
      },
      navigation: {
        nextEl: '.jury__button--next',
        prevEl: '.jury__button--prev',
      },
    });
  }
  return { reviewsSlider, juryListSlider };
};

export { getSlider };
