(function () {
  function getLanguage() {
    try { return localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh'; } catch (error) { return 'zh'; }
  }

  function applyLanguage(lang) {
    var selected = lang === 'en' ? 'en' : 'zh';
    document.documentElement.lang = selected === 'en' ? 'en' : 'zh-Hant';

    var title = document.body.getAttribute(selected === 'en' ? 'data-title-en' : 'data-title-zh');
    if (title) document.title = title;
    var descText = document.body.getAttribute(selected === 'en' ? 'data-desc-en' : 'data-desc-zh');
    var desc = document.querySelector('meta[name="description"]');
    if (desc && descText) desc.setAttribute('content', descText);

    document.querySelectorAll('[data-zh][data-en]').forEach(function (node) {
      node.textContent = node.getAttribute(selected === 'en' ? 'data-en' : 'data-zh');
    });

    document.querySelectorAll('.language-toggle').forEach(function (button) {
      button.setAttribute('aria-label', selected === 'en' ? 'Switch to Chinese' : '切換成英文');
      button.setAttribute('title', selected === 'en' ? '中文' : 'English');
      var icon = button.querySelector('[data-lang-icon]');
      if (icon) icon.textContent = selected === 'en' ? '中' : 'EN';
    });

    try { localStorage.setItem('scm-language', selected); } catch (error) {}
  }

  document.querySelectorAll('.language-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      applyLanguage(getLanguage() === 'en' ? 'zh' : 'en');
    });
  });

  applyLanguage(getLanguage());
})();
