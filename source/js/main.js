import { getSlider } from './modules/slider/init-slider';
import { onButtonClick, onLinkClick, onWindowClick } from './modules/menu-toggle/menu-toggle.js';
import { onNoInteractiveElementClick, onNoInteractiveElementKeydown } from './modules/faq-buttons/faq-buttons.js';
import { onButtonDropdownClick } from './modules/form/form-select.js';
import { onButtonDropdownModalClick, onModalButtonClick, onAboutButtonClick, } from './modules/modal/modal.js';

getSlider();
onButtonClick();
onLinkClick();
onWindowClick();
onNoInteractiveElementKeydown();
onNoInteractiveElementClick();
onButtonDropdownClick();
onButtonDropdownModalClick();
onModalButtonClick();
onAboutButtonClick();
