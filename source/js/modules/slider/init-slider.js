import Swiper from 'swiper';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
const promo = document.querySelector('.promo');
const promoSwiper = promo.querySelector('.promo__swiper');
const programs = document.querySelector('.programs');
const programsSwiper = programs.querySelector('.programs__swiper');
const programsBtnNext = programs.querySelector('.programs__button--next');
const programsBtnPrev = programs.querySelector('.programs__button--prev');

const getSlider = () => {
  let promoSlider;
  let programsSlider;

  if (promoSwiper) {
    promoSlider = new Swiper(promoSwiper, {
      modules: [Pagination],

      direction: 'horizontal',
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
      pagination: {
        el: '.promo__pagination',
        clickable: 'true',
      },
    });
  }
  // promoSlider.on('slideChange', () => {
  //   const activeSlide = document.querySelector('.swiper-slide-active');
  //   const pagination = document.querySelector('.promo__pagination');
  //   const contentHeight = activeSlide.querySelector('.promo__content').offsetHeight;

  //   pagination.style.bottom = `${ contentHeight }px`;
  //   // pagination.style.left = `${0}px`;
  // });

  if (programsSwiper) {
    programsSlider = new Swiper(programsSwiper, {
      modules: [Navigation, Pagination, Scrollbar],
      direction: 'horizontal',
      loop: false,
      allowTouchMove: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          // slidesPerView: 2,
          slidesPerView: 'auto',
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3,
          // slidesPerView: 'auto',
          spaceBetween: 32,
          allowTouchMove: false,
        },
      },
      scrollbar: {
        el: '.programs__scrollbar',
        draggable: true,
      },
      navigation: {
        nextEl: programsBtnNext,
        prevEl: programsBtnPrev,
      },
    });
  }
  return { promoSlider, programsSlider };
};

export { getSlider };
