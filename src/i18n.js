export class i18n {
  constructor(lang = "en") {
    this.lang = lang;
    this.translations = {};
  }

  async load(path = "../../locales/") {
    const res = await fetch(`${path}${this.lang}.json`);
    this.translations = await res.json();
  }

  t(key) {
    return this.translations[key] || key;
  }
}
