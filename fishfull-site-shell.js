(function () {
  'use strict';

  var logoSrc = '/fishfull.jpg';
  var copyrightText = 'Copyright © 2026Fishfull漁有料版權所有';
  var observerTimer = null;

  function currentLang() {
    return window.SCMLanguage && window.SCMLanguage.current ? window.SCMLanguage.current() : (localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh');
  }

  function logoAlt() {
    return currentLang() === 'en' ? 'FishFull official logo' : 'FishFull 漁有料官方商標';
  }

  function applyLogo() {
    var marks = document.querySelectorAll('.brand-sun, .brand-symbol');
    Array.prototype.forEach.call(marks, function (mark) {
      mark.classList.add('fishfull-logo-mark');
      mark.setAttribute('aria-hidden', 'false');
      var img = mark.querySelector('img');
      if (!img) {
        mark.textContent = '';
        img = document.createElement('img');
        img.width = 48;
        img.height = 48;
        img.loading = 'eager';
        img.decoding = 'async';
        mark.appendChild(img);
      }
      if (img.getAttribute('src') !== logoSrc) img.src = logoSrc;
      if (img.getAttribute('alt') !== logoAlt()) img.alt = logoAlt();
      Array.prototype.slice.call(mark.childNodes).forEach(function (node) {
        if (node !== img && node.nodeType !== 1) mark.removeChild(node);
      });
    });
  }

  function footerParent() {
    return document.querySelector('.page-shell') || document.querySelector('.page-home') || document.getElementById('root') || document.body;
  }

  function ensureFooter() {
    var footers = document.querySelectorAll('footer.site-footer');
    var footer = footers[0] || null;

    if (footers.length > 1) {
      Array.prototype.slice.call(footers, 1).forEach(function (extraFooter) {
        extraFooter.parentNode.removeChild(extraFooter);
      });
    }

    if (!footer) {
      footer = document.createElement('footer');
      footer.className = 'site-footer';
      footerParent().appendChild(footer);
    } else if (footer.parentNode !== footerParent() && document.body.getAttribute('data-page') === 'ar-game') {
      footerParent().appendChild(footer);
    }

    footer.setAttribute('aria-label', currentLang() === 'en' ? 'Copyright' : '版權聲明');
    if (footer.textContent !== copyrightText) footer.textContent = copyrightText;
  }

  function applyShell() {
    applyLogo();
    ensureFooter();
  }

  function scheduleApply() {
    window.clearTimeout(observerTimer);
    observerTimer = window.setTimeout(applyShell, 0);
    window.setTimeout(applyShell, 120);
  }

  function watchPageUpdates() {
    if (!window.MutationObserver) return;
    new MutationObserver(scheduleApply).observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    scheduleApply();
    watchPageUpdates();
  });
  document.addEventListener('scm-language-change', scheduleApply);
  window.addEventListener('load', scheduleApply);
})();