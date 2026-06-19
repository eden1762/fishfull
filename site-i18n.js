(function () {
  'use strict';

  var STORAGE_KEY = 'scm-language';

  function current() {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'zh';
  }

  function set(next) {
    var lang = next === 'en' ? 'en' : 'zh';
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';
    updateButtons(lang);
    document.dispatchEvent(new CustomEvent('scm-language-change', { detail: { lang: lang } }));
  }

  function toggle() {
    set(current() === 'en' ? 'zh' : 'en');
  }

  function updateButtons(lang) {
    var nextLabel = lang === 'en' ? '中文' : 'EN';
    var title = lang === 'en' ? '切換成中文' : '切換成英文';
    document.querySelectorAll('.language-toggle').forEach(function (button) {
      button.setAttribute('aria-label', title);
      button.setAttribute('title', title);
      var icon = button.querySelector('[data-lang-icon]');
      if (icon) icon.textContent = nextLabel;
      else button.textContent = nextLabel;
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest && event.target.closest('.language-toggle');
    if (!button) return;
    event.preventDefault();
    toggle();
  });

  window.SCMLanguage = {
    current: current,
    set: set,
    toggle: toggle,
    escapeHtml: escapeHtml
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { set(current()); });
  } else {
    set(current());
  }
})();
