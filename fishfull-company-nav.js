(function () {
  'use strict';

  var applying = false;
  var timer = 0;

  function language() {
    if (window.SCMLanguage && typeof window.SCMLanguage.current === 'function') {
      return window.SCMLanguage.current() === 'en' ? 'en' : 'zh';
    }
    return localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh';
  }

  function labels() {
    return language() === 'en'
      ? { idea: 'Our Idea', about: 'About Us' }
      : { idea: '我們的理念', about: '關於我們' };
  }

  function normalizedPath(link) {
    try {
      return new URL(link.getAttribute('href') || '', window.location.origin).pathname.replace(/\/$/, '') || '/';
    } catch (_error) {
      return link.getAttribute('href') || '';
    }
  }

  function isIdeaText(text) {
    return text === '我們的理念' || text === 'Our Idea';
  }

  function isAboutText(text) {
    return text === '關於我們' || text === 'About Us';
  }

  function createLink(text, href) {
    var link = document.createElement('a');
    link.textContent = text;
    link.setAttribute('href', href);
    link.setAttribute('data-fishfull-company-link', href.slice(1));
    return link;
  }

  function setCurrent(link, href) {
    var path = window.location.pathname.replace(/\/$/, '') || '/';
    var matches = href === '/idea'
      ? (path === '/idea' || path === '/pages/idea' || path === '/pages/idea.html')
      : (path === '/about' || path === '/pages/about' || path === '/pages/about.html');

    if (matches) link.setAttribute('aria-current', 'page');
    else if (link.getAttribute('aria-current') === 'page') link.removeAttribute('aria-current');
  }

  function updateNav(nav) {
    var text = labels();
    var links = Array.prototype.slice.call(nav.querySelectorAll(':scope > a'));
    if (!links.length) links = Array.prototype.slice.call(nav.querySelectorAll('a'));

    var ideaLink = null;
    var aboutLink = null;

    links.forEach(function (link) {
      var label = (link.textContent || '').replace(/\s+/g, ' ').trim();
      var path = normalizedPath(link);

      if (isIdeaText(label)) {
        ideaLink = ideaLink || link;
      } else if (isAboutText(label)) {
        aboutLink = aboutLink || link;
      } else if (path === '/idea' || path === '/pages/idea' || path === '/pages/idea.html') {
        ideaLink = ideaLink || link;
      } else if (path === '/about' || path === '/pages/about' || path === '/pages/about.html') {
        aboutLink = aboutLink || link;
      }
    });

    if (!ideaLink) {
      ideaLink = createLink(text.idea, '/idea');
      nav.appendChild(ideaLink);
    }

    ideaLink.textContent = text.idea;
    ideaLink.setAttribute('href', '/idea');
    ideaLink.setAttribute('data-fishfull-company-link', 'idea');

    if (!aboutLink || aboutLink === ideaLink) {
      aboutLink = createLink(text.about, '/about');
      if (ideaLink.nextSibling) nav.insertBefore(aboutLink, ideaLink.nextSibling);
      else nav.appendChild(aboutLink);
    }

    aboutLink.textContent = text.about;
    aboutLink.setAttribute('href', '/about');
    aboutLink.setAttribute('data-fishfull-company-link', 'about');

    if (ideaLink.nextElementSibling !== aboutLink) {
      nav.insertBefore(aboutLink, ideaLink.nextElementSibling);
    }

    setCurrent(ideaLink, '/idea');
    setCurrent(aboutLink, '/about');
  }

  function apply() {
    if (applying || !document.body) return;
    applying = true;
    try {
      var navs = document.querySelectorAll('header nav, .site-nav .nav-links, .page-nav .nav-links, .topbar .nav, .top .links');
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
      new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true, characterData: true });
    }
  });

  document.addEventListener('scm-language-change', schedule);
  window.addEventListener('load', schedule);
})();
