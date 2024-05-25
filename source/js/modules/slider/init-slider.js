import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
const promoSwiper = document.querySelector('.promo__swiper');

const getSlider = () => {
  let promoSlider;

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
  return { promoSlider };
};

export { getSlider };
