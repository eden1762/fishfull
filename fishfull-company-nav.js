(function () {
  'use strict';

  var applying = false;
  var timer = 0;
  var navVersion = '20260812-idea-spirit-v2';
  var styleId = 'fishfull-shared-nav-style';

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

  function installNavStyle() {
    if (!document.head || document.getElementById(styleId)) return;
    var style = document.createElement('style');
    style.id = styleId;
    style.textContent = [
      '@media(max-width:1100px){',
      '.fishfull-nav-host{flex-wrap:wrap!important}',
      '.fishfull-nav-host [data-fishfull-nav-signature]{display:flex!important;order:50!important;flex:1 0 100%!important;width:100%!important;max-width:100%!important;overflow-x:auto!important;overflow-y:hidden!important;flex-wrap:nowrap!important;justify-content:flex-start!important;gap:6px!important;padding:6px 0 2px!important;-webkit-overflow-scrolling:touch;scrollbar-width:none}',
      '.fishfull-nav-host [data-fishfull-nav-signature]::-webkit-scrollbar{display:none}',
      '.fishfull-nav-host [data-fishfull-nav-signature] a{display:inline-flex!important;align-items:center!important;min-height:40px!important;flex:0 0 auto!important;white-space:nowrap!important}',
      '}'
    ].join('');
    document.head.appendChild(style);
  }

  function updateNav(nav) {
    var lang = language();
    var signature = navVersion + '|' + lang + '|' + currentKey();
    var host = nav.closest && nav.closest('header');
    if (host) host.classList.add('fishfull-nav-host');
    if (nav.getAttribute('data-fishfull-nav-signature') !== signature) {
      nav.innerHTML = markup(lang);
      nav.setAttribute('data-fishfull-nav-signature', signature);
      nav.setAttribute('aria-label', lang === 'en' ? 'Main navigation' : '主選單');
    }
  }

  function apply() {
    if (applying || !document.body) return;
    applying = true;
    try {
      installNavStyle();
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