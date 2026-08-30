(function () {
  'use strict';

  var applying = false;
  var timer = 0;
  var navVersion = '20260830-shared-header-v3';
  var styleId = 'fishfull-shared-nav-style';
  var instagramUrl = 'https://www.instagram.com/fishfull_2025/';

  var items = {
    zh: [
      ['qr', '掃漁貨QR', '/#qr-demo'],
      ['ar', 'AR看真魚', '/ar#fishfull-ar-stage'],
      ['fish', '主推魚', '/pages/fish'],
      ['map', '去附近買魚', '/map'],
      ['recipes', '零失敗食譜', '/recipes'],
      ['feedback', '十秒回饋', '/feedback'],
      ['spirit', '理念與精神', '/idea']
    ],
    en: [
      ['qr', 'Scan Catch QR', '/#qr-demo'],
      ['ar', 'See Fish in AR', '/ar#fishfull-ar-stage'],
      ['fish', 'Featured Fish', '/pages/fish'],
      ['map', 'Buy Seafood Nearby', '/map'],
      ['recipes', 'Easy Fish Recipes', '/recipes'],
      ['feedback', 'Quick Feedback', '/feedback'],
      ['spirit', 'Our Idea', '/idea']
    ]
  };

  function language() {
    if (window.SCMLanguage && typeof window.SCMLanguage.current === 'function') {
      return window.SCMLanguage.current() === 'en' ? 'en' : 'zh';
    }
    try {
      return localStorage.getItem('fishfull-language') === 'en' || localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh';
    } catch (error) {
      return 'zh';
    }
  }

  function isHomepage() {
    var path = window.location.pathname.replace(/\/$/, '') || '/';
    return path === '/';
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
      '.fishfull-shared-header{position:sticky!important;top:10px!important;z-index:40!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:14px!important;padding:10px 12px!important;border:1px solid rgba(255,255,255,.88)!important;border-radius:24px!important;background:rgba(255,255,255,.88)!important;-webkit-backdrop-filter:blur(18px)!important;backdrop-filter:blur(18px)!important;box-shadow:0 12px 35px rgba(6,73,87,.12)!important}',
      '.fishfull-shared-header [data-fishfull-nav-signature]{display:flex!important;align-items:center!important;justify-content:center!important;gap:5px!important;flex-wrap:wrap!important;min-width:0!important}',
      '.fishfull-shared-header [data-fishfull-nav-signature] a{display:inline-flex!important;align-items:center!important;min-height:40px!important;padding:9px 11px!important;border-radius:999px!important;color:#355c68!important;font-size:13px!important;font-weight:850!important;white-space:nowrap!important;transition:background .18s ease,color .18s ease,transform .18s ease!important;text-decoration:none!important}',
      '.fishfull-shared-header [data-fishfull-nav-signature] a:hover,.fishfull-shared-header [data-fishfull-nav-signature] a:focus-visible,.fishfull-shared-header [data-fishfull-nav-signature] a[aria-current="page"]{outline:none!important;background:#07566b!important;color:#fff!important;transform:translateY(-1px)!important}',
      '.fishfull-shared-header .nav-actions,.fishfull-shared-header .actions,.fishfull-shared-header .top-actions{display:inline-flex!important;align-items:center!important;gap:7px!important;flex:0 0 auto!important}',
      '.fishfull-shared-header .circle-link,.fishfull-shared-header .icon-btn,.fishfull-shared-header .top-btn{width:42px!important;min-width:42px!important;height:42px!important;min-height:42px!important;display:inline-grid!important;place-items:center!important;padding:0!important;border:1px solid rgba(8,91,108,.14)!important;border-radius:999px!important;background:#fff!important;color:#07566b!important;font-size:13px!important;font-weight:950!important;cursor:pointer!important;box-shadow:none!important;text-decoration:none!important}',
      '.fishfull-shared-header .circle-link:hover,.fishfull-shared-header .circle-link:focus-visible,.fishfull-shared-header .icon-btn:hover,.fishfull-shared-header .icon-btn:focus-visible,.fishfull-shared-header .top-btn:hover,.fishfull-shared-header .top-btn:focus-visible{outline:none!important;background:#ffb23f!important;color:#291700!important}',
      '@media(max-width:1100px){.fishfull-shared-header{align-items:flex-start!important;flex-wrap:wrap!important;border-radius:22px!important}.fishfull-shared-header [data-fishfull-nav-signature]{display:flex!important;order:50!important;flex:1 0 100%!important;width:100%!important;max-width:100%!important;overflow-x:auto!important;overflow-y:hidden!important;flex-wrap:nowrap!important;justify-content:flex-start!important;gap:6px!important;padding:6px 0 2px!important;-webkit-overflow-scrolling:touch;scrollbar-width:none!important}.fishfull-shared-header [data-fishfull-nav-signature]::-webkit-scrollbar{display:none!important}.fishfull-shared-header [data-fishfull-nav-signature] a{flex:0 0 auto!important}}',
      '@media(max-width:620px){.fishfull-shared-header{top:5px!important;padding:9px!important;border-radius:18px!important}.fishfull-shared-header .circle-link,.fishfull-shared-header .icon-btn,.fishfull-shared-header .top-btn{width:38px!important;min-width:38px!important;height:38px!important;min-height:38px!important}.fishfull-shared-header [data-fishfull-nav-signature] a{min-height:38px!important;padding:8px 10px!important;font-size:13px!important}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function actionContainer(header) {
    var actions = header.querySelector('.nav-actions, .actions, .top-actions');
    if (!actions) {
      actions = document.createElement('div');
      actions.className = 'nav-actions';
      header.appendChild(actions);
    } else {
      actions.classList.add('nav-actions');
    }
    return actions;
  }

  function ensureNav(header) {
    var nav = header.querySelector('.nav-links, .topnav, nav.nav, nav.links');
    if (nav) return nav;
    nav = document.createElement('nav');
    nav.className = 'topnav';
    var actions = header.querySelector('.nav-actions, .actions, .top-actions');
    header.insertBefore(nav, actions || null);
    return nav;
  }

  function updateNav(nav) {
    var lang = language();
    var signature = navVersion + '|' + lang + '|' + currentKey();
    var header = nav.closest && nav.closest('header');
    if (header) {
      header.classList.add('fishfull-nav-host', 'fishfull-shared-header');
      nav.classList.add('topnav');
      var embeddedLang = nav.querySelector('#lang, #lang-toggle, .language-toggle');
      if (embeddedLang && !isHomepage()) actionContainer(header).appendChild(embeddedLang);
    }
    if (nav.getAttribute('data-fishfull-nav-signature') !== signature) {
      nav.innerHTML = markup(lang);
      nav.setAttribute('data-fishfull-nav-signature', signature);
      nav.setAttribute('aria-label', lang === 'en' ? 'Main navigation' : '主選單');
    }
  }

  function makeInstagramLink() {
    var link = document.createElement('a');
    link.className = 'circle-link';
    link.href = instagramUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Instagram');
    link.textContent = 'IG';
    return link;
  }

  function makeLanguageButton() {
    var button = document.createElement('button');
    button.className = 'circle-link language-toggle';
    button.type = 'button';
    button.setAttribute('aria-label', language() === 'en' ? '切換成中文' : 'Switch to English');
    var span = document.createElement('span');
    span.setAttribute('data-lang-icon', '');
    span.textContent = language() === 'en' ? '中文' : 'EN';
    button.appendChild(span);
    return button;
  }

  function normalizeActions(header) {
    if (!header) return;

    if (isHomepage()) {
      var homepageActions = header.querySelector('.nav-actions, .actions, .top-actions');
      if (homepageActions) homepageActions.remove();
      return;
    }

    var actions = actionContainer(header);

    Array.prototype.forEach.call(actions.querySelectorAll('a'), function (link) {
      if (link.href && link.href.indexOf('instagram.com') !== -1) return;
      if ((link.textContent || '').trim() === '⌂' || actions.classList.contains('top-actions')) link.remove();
    });

    var ig = actions.querySelector('a[href*="instagram.com"]');
    if (!ig) {
      ig = makeInstagramLink();
      actions.insertBefore(ig, actions.firstChild);
    }
    ig.classList.add('circle-link');

    var langButton = actions.querySelector('#lang, #lang-toggle, .language-toggle');
    if (!langButton) {
      langButton = makeLanguageButton();
      actions.appendChild(langButton);
    }
    langButton.classList.add('circle-link');
    if (!langButton.querySelector('[data-lang-icon]')) {
      var existing = (langButton.textContent || '').trim();
      langButton.textContent = '';
      var icon = document.createElement('span');
      icon.setAttribute('data-lang-icon', '');
      icon.textContent = existing || (language() === 'en' ? '中文' : 'EN');
      langButton.appendChild(icon);
    }
  }

  function apply() {
    if (applying || !document.body) return;
    applying = true;
    try {
      installNavStyle();
      var headers = document.querySelectorAll('header.site-nav, header.topbar, header.top, header.idea-nav, header.page-nav');
      Array.prototype.forEach.call(headers, function (header) {
        header.classList.add('fishfull-nav-host', 'fishfull-shared-header');
        updateNav(ensureNav(header));
        normalizeActions(header);
      });
      var extraNavs = document.querySelectorAll('.page-nav .nav-links, .top .links');
      Array.prototype.forEach.call(extraNavs, updateNav);
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
  document.addEventListener('fishfull-language-change', schedule);
  window.addEventListener('hashchange', schedule);
  window.addEventListener('popstate', schedule);
  window.addEventListener('load', schedule);
})();
