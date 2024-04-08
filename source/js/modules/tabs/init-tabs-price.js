const priceButton = document.querySelectorAll('.price__tab');
const priceItem = document.querySelectorAll('.price__item');

priceButton.forEach(onPriceTabClick);

function onPriceTabClick(items) {
  items.addEventListener('click', () => {
    const currentBtn = items;
    const tabId = currentBtn.getAttribute('data-price');
    const currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('price__tab--current')) {
      priceButton.forEach((item) => {
        item.classList.remove('price__tab--current');
      });

      priceItem.forEach((item) => {
        item.classList.remove('price__item--active');
      });

      currentBtn.classList.add('price__tab--current');
      currentTab.classList.add('price__item--active');
    }
  });
}

document.querySelector('.price__tab').click();
