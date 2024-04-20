const headerWrapper = document.querySelector('.header__wrapper');
const headerToggle = headerWrapper.querySelector('.header__toggle');
const navList = headerWrapper.querySelector('.nav__list');

const onButtonClick = () => {
  headerToggle.addEventListener('click', () => {
    headerToggle.classList.toggle('header__toggle--open');
    navList.classList.toggle('nav__list--mobile');
  });
};

export { onButtonClick };
