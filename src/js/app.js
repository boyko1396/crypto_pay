/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';
// smoothScroll anchor link
import SmoothScroll from './modules/SmoothScroll.js';
// switch theme
import SwitchTheme from './modules/SwitchTheme.js';
// cases slider swiper
import CasesSlider from './modules/CasesSlider.js';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  const switchThemeInstance = new SwitchTheme();
  const smoothScroll = new SmoothScroll();
});
