import Swiper, { Pagination } from 'swiper';

class CasesSlider {
  constructor(selector, options) {
    this.selector = selector;
    this.options = options;
    Swiper.use([Pagination]);
    this.init();
    this.initCustomPagination();
  }

  init() {
    const sliderElement = document.querySelector(this.selector);
    if (sliderElement) {
      this.swiper = new Swiper(sliderElement, this.options);
    }
  }

  initCustomPagination() {
    const { el, clickable } = this.options.pagination;
    const paginationElement = document.querySelector(el);
    
    if (paginationElement) {
      this.swiper.on('slideChange', () => {
        this.updateCurrentSlideNumber();
      });

      this.updateCurrentSlideNumber();
      
      this.updateTotalSlidesNumber();
    }
  }

  updateCurrentSlideNumber() {
    const currentSlideNumber = this.swiper.realIndex + 1;
    const currentSlideElement = document.querySelector('.js-cases-slider-current-slide');
    
    if (currentSlideElement) {
      currentSlideElement.textContent = currentSlideNumber < 10 ? `0${currentSlideNumber}` : currentSlideNumber;
    }
  }

  updateTotalSlidesNumber() {
    const totalSlidesNumber = this.swiper.slides.length - this.swiper.loopedSlides * 2;
    const adjustedTotalSlidesNumber = Math.ceil(totalSlidesNumber / 1);
    
    const totalSlidesElement = document.querySelector('.js-cases-slider-total-slides');
    
    if (totalSlidesElement) {
      totalSlidesElement.textContent = adjustedTotalSlidesNumber < 10 ? `0${adjustedTotalSlidesNumber}` : adjustedTotalSlidesNumber;
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const reviewsSlider = new CasesSlider('.js-cases-slider-init', {
    mousewheelControl: true,
    slidesPerView: 1,
    speed: 400,
    loop: true,
    pagination: {
      el: '.js-cases-slider-pagination',
      clickable: true,
    },
  });
});

export default CasesSlider;
