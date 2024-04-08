const tabsButton = document.querySelectorAll('.tab__button');
const tabFaq = document.querySelectorAll('.tab-faq');
const tabFaqInner = document.querySelectorAll('.tab-faq__item-inner');

tabsButton.forEach(onTabClick);

function onTabClick(items) {
  items.addEventListener('click', () => {
    const currentBtn = items;
    const tabId = currentBtn.getAttribute('data-tab');
    const currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('tab__button--active')) {
      tabsButton.forEach((item) => {
        item.classList.remove('tab__button--active');
      });

      tabFaq.forEach((item) => {
        item.classList.remove('tab-faq--active');
      });

      currentBtn.classList.add('tab__button--active');
      currentTab.classList.add('tab-faq--active');
    }
  });
}

document.querySelector('.tab__button').click();

tabFaqInner.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (tab.parentNode.classList.contains('tab-faq__item--active')) {
      tab.parentNode.classList.toggle('tab-faq__item--active');
    } else {
      tabFaqInner.forEach(() => tab.parentNode.classList.remove('tab-faq__item--active'));
      tab.parentNode.classList.add('tab-faq__item--active');
    }
  });
});

export { tabsButton, onTabClick };
