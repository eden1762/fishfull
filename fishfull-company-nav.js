(function () {
  'use strict';

  var applying = false;
  var timer = 0;
  var navVersion = '20260812-idea-spirit-v1';

  var items = {
    zh: [
      ['qr', '掃漁貨QR', '/#qr-demo'],
      ['ar', 'AR看真魚', '/ar#fishfull-ar-stage'],
      ['fish', '主推魚', '/pages/fish.html'],
      ['map', '去附近買魚', '/pages/map.html'],
      ['recipes', '零失敗食譜', '/pages/recipes.html'],
      ['feedback', '十秒回饋', '/pages/feedback.html'],
      ['spirit', '理念與精神', '/idea']
    ],
    en: [
      ['qr', 'Scan Catch QR', '/#qr-demo'],
      ['ar', 'View Fish in AR', '/ar#fishfull-ar-stage'],
      ['fish', 'Featured Fish', '/pages/fish.html'],
      ['map', 'Buy Nearby', '/pages/map.html'],
      ['recipes', 'Easy Recipes', '/pages/recipes.html'],
      ['feedback', 'Quick Feedback', '/pages/feedback.html'],
      ['spirit', 'Idea & Spirit', '/idea']
    ]
  };

  function language() {
    if (window.SCMLanguage && typeof window.SCMLanguage.current === 'function') {
      return window.SCMLanguage.current() === 'en' ? 'en' : 'zh';
    }
    return localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh';
  }

  function currentKey() {
    var path = window.location.pathname.replace(/\/$/, '') || '/';
    if (path === '/' && window.location.hash === '#qr-demo') return 'qr';
    if (path === '/ar' || path === '/ar.html' || path === '/pages/ar') return 'ar';
    if (/^\/pages\/fish(?:\.html)?$/.test(path)) return 'fish';
    if (path === '/map' || /^\/pages\/map(?:\.html)?$/.test(path)) return 'map';
    if (path === '/recipes' || /^\/pages\/recipes(?:\.html)?$/.test(path)) return 'recipes';
    if (path === '/feedback' || /^\/pages\/feedback(?:\.html)?$/.test(path)) return 'feedback';
    if (path === '/idea' || path === '/about' || /^\/pages\/(?:idea|about)(?:\.html)?$/.test(path)) return 'spirit';
    return '';
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function markup(lang) {
    var active = currentKey();
    return items[lang].map(function (item) {
      var current = item[0] === active ? ' aria-current="page"' : '';
      return '<a href="' + esc(item[2]) + '" data-fishfull-nav-key="' + item[0] + '"' + current + '>' + esc(item[1]) + '</a>';
    }).join('');
  }

  function updateNav(nav) {
    var lang = language();
    var signature = navVersion + '|' + lang + '|' + currentKey();
    var nextMarkup = markup(lang);
    if (nav.getAttribute('data-fishfull-nav-signature') !== signature || nav.innerHTML !== nextMarkup) {
      nav.innerHTML = nextMarkup;
      nav.setAttribute('data-fishfull-nav-signature', signature);
      nav.setAttribute('aria-label', lang === 'en' ? 'Main navigation' : '主選單');
    }
  }

  function apply() {
    if (applying || !document.body) return;
    applying = true;
    try {
      var navs = document.querySelectorAll([
        'header.site-nav .nav-links',
        'header.topbar .topnav',
        'header.topbar .nav',
        'header.idea-nav nav',
        '.page-nav .nav-links',
        '.top .links'
      ].join(', '));
      Array.prototype.forEach.call(navs, updateNav);
    } finally {
      applying = false;
    }
  }

  function schedule() {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, 24);
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply();
    if (window.MutationObserver && document.body) {
      new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    }
  });

  document.addEventListener('scm-language-change', schedule);
  window.addEventListener('hashchange', schedule);
  window.addEventListener('popstate', schedule);
  window.addEventListener('load', schedule);
})();
