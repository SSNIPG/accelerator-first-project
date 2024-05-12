const headerWrapper = document.querySelector('.header__wrapper');
const headerToggle = headerWrapper.querySelector('.header__toggle');
const navList = headerWrapper.querySelector('.nav__list');
const hero = document.querySelector('.hero');
const heroSwiper = hero.querySelector('.hero__swiper');
const pageBody = document.querySelector('.page-body');
const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('.nav__link');

const onButtonClick = () => {
  headerToggle.addEventListener('click', () => {
    headerToggle.classList.toggle('header__toggle--open');
    navList.classList.toggle('nav__list--opened');
    heroSwiper.classList.toggle('hero__swiper--overlay');
    pageBody.classList.toggle('page-body__no-scrolling');
  });
};

const onLinkClick = () => {
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (headerToggle.classList.contains('header__toggle--open')) {
        headerToggle.classList.toggle('header__toggle--open');
        navList.classList.toggle('nav__list--opened');
        heroSwiper.classList.toggle('hero__swiper--overlay');
        pageBody.classList.toggle('page-body__no-scrolling');
      }
    });
  });
};
export { onButtonClick, onLinkClick };
