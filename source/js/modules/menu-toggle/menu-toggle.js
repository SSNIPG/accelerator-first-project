const promoHeaderWrapper = document.querySelector('.promo__header-wrapper');
const promoMenuButton = promoHeaderWrapper.querySelector('.promo__menu-button');
const nav = promoHeaderWrapper.querySelector('.nav');
const pageBody = document.querySelector('.page-body');
const navLinksList = nav.querySelectorAll('.nav__link--list');
let navSubList;

const onButtonClick = () => {
  promoMenuButton.addEventListener('click', () => {
    promoMenuButton.classList.toggle('promo__menu-button--active');
    nav.classList.toggle('nav--open');
    pageBody.classList.toggle('page-body__no-scrolling');
  });
};

const onLinkClick = () => {
  navLinksList.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      link.classList.toggle('nav__link--list-ative');

      navSubList = link.nextElementSibling;
      navSubList.classList.toggle('nav__sub-list--closed');
    });
  });
};

const onWindowClick = () => {
  document.addEventListener('click', (e) => {
    if (!promoMenuButton.contains(e.target) && !nav.contains(e.target)) {
      promoMenuButton.classList.remove('promo__menu-button--active');
      nav.classList.remove('nav--open');
      pageBody.classList.remove('page-body__no-scrolling');
    }
  });
};
export { onButtonClick, onLinkClick, onWindowClick };
