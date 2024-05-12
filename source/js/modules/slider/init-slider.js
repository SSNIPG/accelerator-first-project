import Swiper from 'swiper';
import { Pagination, Navigation, Parallax } from 'swiper/modules';
import 'swiper/css';

const hero = document.querySelector('.hero');
const heroSwiper = hero.querySelector('.hero__swiper');
const tours = document.querySelector('.tours');
const toursSwiper = tours.querySelector('.tours__swiper');
const instructors = document.querySelector('.instructors');
const instructorsSwiper = instructors.querySelector('.instructors__swiper');
const reviews = document.querySelector('.reviews');
const reviewsSwiper = reviews.querySelector('.reviews__swiper');
const advantages = document.querySelector('.advantages');
const advantagesSwiper = advantages.querySelector('.advantages__swiper');
const gallery = document.querySelector('.gallery');
const gallerySwiper = gallery.querySelector('.gallery__swiper');

const getSlider = () => {
  let heroSlider;
  let toursSlider;
  let instructorsSlider;
  let reviewsSlider;
  let advantagesSlider;
  let gallerySlider;

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
        1440: {
          allowTouchMove: false,
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

  if (reviewsSwiper) {
    reviewsSlider = new Swiper(reviewsSwiper, {
      modules: [Navigation, Parallax],
      direction: 'horizontal',
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 'auto',
          loop: false,
          parallax: true,
          loopAddBlankSlides: false,
        },
        1440: {
          slidesPerView: 'auto',
          spaceBetween: 120,
        },
      },
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
  }

  if (advantagesSwiper) {
    advantagesSlider = new Swiper(advantagesSwiper, {
      modules: [Navigation, Parallax],
      direction: 'horizontal',
      loop: true,
      breakpoints: {
        320: {
          enabled: false,
        },
        768: {
          enabled: false,
        },
        1440: {
          enabled: true,
          spaceBetween: 30,
          slidesPerGroup: 2,
          slidesPerView: 'auto',
          parallax: true,
          loopAddBlankSlides: false,
          centeredSlides: true,
          initialSlide: 2,
        },
      },
      navigation: {
        nextEl: '.advantages__button--next',
        prevEl: '.advantages__button--prev',
      },
    });
  }

  if (gallerySwiper) {
    gallerySlider = new Swiper(gallerySwiper, {
      modules: [Navigation],
      direction: 'horizontal',
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1440: {
          enabled: false,
          slidesPerView: 5,
          spaceBetween: 5,
        },
      },
      navigation: {
        nextEl: '.gallery__button--next',
        prevEl: '.gallery__button--prev',
      },
    });
  }
  return { heroSlider, toursSlider, instructorsSlider, reviewsSlider, advantagesSlider, gallerySlider };
};

export { getSlider };
