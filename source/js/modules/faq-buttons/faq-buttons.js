const faq = document.querySelector('.faq');
const faqItemInners = faq.querySelectorAll('.faq__item-inner');
const faqListButtons = faq.querySelectorAll('.faq__list-button');
const faqItem = faq.querySelectorAll('.faq__item');

function onNoInteractiveElementKeydown () {
  for (let i = 0; i < faqItemInners.length; i++) {
    faqItemInners[i].addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter' || evt.key === ' ') {
        faqItem[i].classList.toggle('faq__item--active');
        faqListButtons[i].classList.toggle('faq__list-button--active');
        evt.preventDefault();
      }
    });
  }
}

function onNoInteractiveElementClick() {
  for (let i = 0; i < faqItemInners.length; i++) {
    if (faqListButtons[i].disabled) {
      faqItem[i].classList.toggle('faq__item--disabled');
      faqItemInners[i].removeAttribute('tabindex');
    }
    faqItemInners[i].addEventListener('click', () => {
      if (!faqListButtons[i].disabled) {
        faqItem[i].classList.toggle('faq__item--active');
        faqListButtons[i].classList.toggle('faq__list-button--active');
      }
    });
  }
}

export { onNoInteractiveElementKeydown, onNoInteractiveElementClick };
