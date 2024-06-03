import { getSlider } from './modules/slider/init-slider';
import { onButtonClick, onLinkClick, onWindowClick } from './modules/menu-toggle/menu-toggle.js';
import { onNoInteractiveElementClick, onNoInteractiveElementKeydown } from './modules/faq-buttons/faq-buttons.js';

getSlider();
onButtonClick();
onLinkClick();
onWindowClick();
onNoInteractiveElementKeydown();
onNoInteractiveElementClick();
