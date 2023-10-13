class SwitchTheme {
  constructor(colorSchemeMetaTagId = 'colorSchemeMetaTag', switchButtonSelector = '.js-switch-theme') {
    this.storageKey = 'theme-preference';
    this.colorSchemeMetaTag = document.getElementById(colorSchemeMetaTagId);
    this.theme = {
      value: this.getColorPreference(),
    };
    this.switchButton = document.querySelector(switchButtonSelector);

    this.onClick = this.onClick.bind(this);
    this.onMediaChange = this.onMediaChange.bind(this);

    this.initialize();
  }

  initialize() {
    this.reflectPreference();
    this.switchButton.addEventListener('click', this.onClick);
    window.matchMedia(`(prefers-color-scheme: ${this.colorScheme})`).addEventListener('change', this.onMediaChange);
  }

  getColorPreference() {
    return localStorage.getItem(this.storageKey) ||
      (window.matchMedia(`(prefers-color-scheme: ${this.colorScheme})`).matches ? 'dark' : 'light');
  }

  setPreference() {
    localStorage.setItem(this.storageKey, this.theme.value);
    this.reflectPreference();
  }

  reflectPreference() {
    document.firstElementChild.setAttribute('data-theme', this.theme.value);
    this.colorSchemeMetaTag?.setAttribute('content', this.theme.value);
    this.switchButton?.setAttribute('aria-label', this.theme.value);
    this.switchButton?.classList.toggle('is-active', this.theme.value === 'dark');
  }

  onClick() {
    this.theme.value = this.theme.value === 'light' ? 'dark' : 'light';
    this.setPreference();
  }

  onMediaChange({ matches: isDark }) {
    this.theme.value = isDark ? 'dark' : 'light';
    this.setPreference();
  }
}

export default SwitchTheme;
