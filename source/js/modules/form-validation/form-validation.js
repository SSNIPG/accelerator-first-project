const form = document.querySelector('.form');
const formInputPhone = form.querySelector('.form__input--phone');
const formInputEmail = form.querySelector('.form__input--email');

const checksValidityForm = () => {
  form.addEventListener('submit', (evt) => {
    if (!formInputPhone.checkValidity()) {

      formInputPhone.classList.add('form__input--error');

      evt.preventDefault();
    }

    if (!formInputEmail.checkValidity()) {

      formInputEmail.classList.add('form__input--error');

      evt.preventDefault();
    }
  });
};

export { checksValidityForm };
