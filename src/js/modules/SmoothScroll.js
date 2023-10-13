class SmoothScroll {
  constructor() {
    this.navAnchors = document.querySelectorAll('.js-nav-anchor');
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.navAnchors.forEach(anchor => {
      anchor.addEventListener('click', e => this.handleAnchorClick(e));
    });
  }

  handleAnchorClick(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });

    }
  }
}

export default SmoothScroll;