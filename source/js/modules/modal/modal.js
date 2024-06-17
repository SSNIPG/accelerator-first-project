
const formModal = document.querySelector('.form--modal');
const formSelectModal = formModal.querySelector('.form__dropdown-button--modal');
const formList = formModal.querySelector('.form__list');
const formListItems = formModal.querySelectorAll('.form__list-item');
const formInputHidden = formModal.querySelector('.form__input-hidden');
const pageModal = document.querySelector('.page-modal');
const pageModalButton = pageModal.querySelector('.page-modal__button');
const about = document.querySelector('.about');
const aboutButton = about.querySelector('.about__button');
const pageBody = document.querySelector('.page-body');

const onButtonDropdownModalClick = () => {
  formSelectModal.addEventListener('click', () => {
    formList.classList.toggle('form__list--open');
    formList.classList.toggle('form__list--modal');
    formSelectModal.classList.toggle('form__dropdown-button--active');
    formSelectModal.classList.toggle('form__dropdown-button--active-modal');
  });

  formListItems.forEach((item) => {
    item.addEventListener('click', () => {
      formSelectModal.innerText = item.innerText;
      formInputHidden.value = item.dataset.value;
      formList.classList.remove('form__list--open');
      formSelectModal.classList.remove('form__dropdown-button--active');
    });
  });
};

const onAboutButtonClick = () => {
  aboutButton.addEventListener('click', () => {
    window.scrollTo(0,0);
    pageModal.classList.remove('page-modal--closed');
    pageBody.classList.add('page-body__no-scrolling-modal');
  });
};


const onModalButtonClick = () => {
  pageModalButton.addEventListener('click', () => {
    pageModal.classList.add('page-modal--closed');
    pageBody.classList.remove('page-body__no-scrolling-modal');
  });
};

export { onButtonDropdownModalClick, onModalButtonClick, onAboutButtonClick };
