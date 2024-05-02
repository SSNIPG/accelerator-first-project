import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

const hero = document.querySelector('.hero');
const heroSwiper = hero.querySelector('.hero__swiper');
const tours = document.querySelector('.tours');
const toursSwiper = tours.querySelector('.tours__swiper');
const instructors = document.querySelector('.instructors');
const instructorsSwiper = instructors.querySelector('.instructors__swiper');

const getSlider = () => {
  let heroSlider;
  let toursSlider;
  let instructorsSlider;

  if (heroSwiper) {
    heroSlider = new Swiper(heroSwiper, {
      modules: [Pagination],
      direction: 'horizontal',
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
      pagination: {
        el: '.hero__pagination',
        clickable: 'true',
      },
    });
  }

  if (toursSwiper) {
    toursSlider = new Swiper(toursSwiper, {
      modules: [Navigation],
      direction: 'horizontal',
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.tours__button--next',
        prevEl: '.tours__button--prev',
      },
    });
  }

  if (instructorsSwiper) {
    instructorsSlider = new Swiper(instructorsSwiper, {
      modules: [Navigation],
      direction: 'horizontal',
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          initialSlide: 2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: '.instructors__button--next',
        prevEl: '.instructors__button--prev',
      },
    });
  }
  return { heroSlider, toursSlider, instructorsSlider };
};

export { getSlider };
