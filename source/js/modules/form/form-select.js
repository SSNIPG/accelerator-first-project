const form = document.querySelector('.form');
const formSelect = form.querySelector('.form__dropdown-button');
const formList = form.querySelector('.form__list');
const formListItems = form.querySelectorAll('.form__list-item');
const formInputHidden = form.querySelector('.form__input-hidden');

const onButtonDropdownClick = () => {
  formSelect.addEventListener('click', () => {
    formList.classList.toggle('form__list--open');
    formSelect.classList.toggle('form__dropdown-button--active');
  });

  formListItems.forEach((item) => {
    item.addEventListener('click', () => {
      formSelect.innerText = item.innerText;
      formInputHidden.value = item.dataset.value;
      formList.classList.remove('form__list--open');
      formSelect.classList.remove('form__dropdown-button--active');
    });
  });
};

export { onButtonDropdownClick };
