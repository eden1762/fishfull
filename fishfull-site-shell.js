(function () {
  'use strict';

  var logoSrc = '/fishfull.jpg';
  var brandEnglish = 'FISHFULL Green Seafood';
  var brandChinese = '漁有料';
  var copyrightText = 'Copyright © 2026Fishfull漁有料版權所有';
  var cleanupStyleId = 'fishfull-shell-cleanup-style';
  var legacyBrandClass = ['brand', 'logo', 'img'].join('-');
  var generatedTrademarkSelector = [
    '[data-generated-logo]',
    '[data-generated-mark]',
    '[data-ai-logo]',
    '.generated-logo',
    '.generated-mark',
    '.ai-logo',
    '.ai-generated-logo',
    '.' + legacyBrandClass,
    'svg.' + legacyBrandClass,
    '.fish-logo',
    '.fish-icon',
    '.fish-badge',
    '.round-fish-logo',
    '.legacy-fishfull-mark'
  ].join(', ');
  var observerTimer = 0;
  var applying = false;

  function currentLang() {
    return window.SCMLanguage && window.SCMLanguage.current ? window.SCMLanguage.current() : (localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh');
  }

  function logoAlt() {
    return currentLang() === 'en' ? 'FISHFULL Green Seafood logo, 漁有料' : 'FISHFULL Green Seafood 漁有料商標';
  }

  function installCleanupStyle() {
    if (!document.head || document.getElementById(cleanupStyleId)) return;
    var style = document.createElement('style');
    style.id = cleanupStyleId;
    style.textContent = [
      'footer.site-footer.fishfull-global-footer::before{content:none!important;display:none!important;background:none!important;background-image:none!important;border:0!important;box-shadow:none!important;}',
      'svg.' + legacyBrandClass + ',.' + legacyBrandClass + '[data-generated-logo],.generated-logo,.generated-mark,.ai-logo,.ai-generated-logo,.round-fish-logo,.legacy-fishfull-mark{display:none!important;}',
      '.fishfull-brand-lockup{display:flex!important;align-items:center!important;gap:10px!important;min-width:0!important;text-decoration:none!important;color:inherit!important}',
      '.fishfull-brand-lockup .fishfull-logo-mark{display:grid!important;place-items:center!important;flex:0 0 auto!important;width:46px!important;height:46px!important;overflow:hidden!important;border-radius:50%!important;background:#fff!important}',
      '.fishfull-brand-lockup .fishfull-logo-mark img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important}',
      '.fishfull-brand-copy{display:grid!important;gap:2px!important;min-width:0!important;line-height:1!important}',
      '.fishfull-brand-copy strong{font-size:clamp(14px,2.4vw,22px)!important;font-weight:1000!important;letter-spacing:.01em!important;white-space:nowrap!important}',
      '.fishfull-brand-copy b{font-size:clamp(12px,2vw,18px)!important;color:#087d72!important;letter-spacing:.08em!important;white-space:nowrap!important}',
      '@media(max-width:520px){.fishfull-brand-lockup .fishfull-logo-mark{width:40px!important;height:40px!important}.fishfull-brand-copy strong{font-size:13px!important}.fishfull-brand-copy b{font-size:12px!important}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function isBrandContainer(node) {
    return !!(node && node.closest && node.closest('.brand-mark, a.brand, .site-nav, .page-nav, .topbar, .top'));
  }

  function isLogoImage(img) {
    if (!img || !img.matches || !img.matches('img')) return false;
    var src = img.getAttribute('src') || '';
    var alt = img.getAttribute('alt') || '';
    var className = img.className || '';
    if (src === logoSrc) return true;
    return /logo|brand|商標/i.test(alt + ' ' + className) || isBrandContainer(img);
  }

  function hasOfficialLogo(node) {
    if (!node) return false;
    if (node.matches && node.matches('img') && node.getAttribute('src') === logoSrc) return true;
    return !!(node.querySelector && node.querySelector('img[src="' + logoSrc + '"]'));
  }

  function removeNode(node) {
    if (node && node.parentNode) node.parentNode.removeChild(node);
  }

  function setOfficialLogo(holder) {
    if (!holder) return null;
    holder.classList.add('fishfull-logo-mark');
    holder.setAttribute('aria-hidden', 'false');
    var img = holder.matches && holder.matches('img') ? holder : holder.querySelector('img');

    if (holder.matches && holder.matches('img')) {
      var wrap = document.createElement('span');
      wrap.className = 'fishfull-logo-mark';
      holder.parentNode.insertBefore(wrap, holder);
      wrap.appendChild(holder);
      holder = wrap;
      img = holder.querySelector('img');
    }

    if (!img) {
      holder.textContent = '';
      img = document.createElement('img');
      img.width = 48;
      img.height = 48;
      img.loading = 'eager';
      img.decoding = 'async';
      holder.appendChild(img);
    }

    if (img.getAttribute('src') !== logoSrc) img.setAttribute('src', logoSrc);
    if (img.getAttribute('alt') !== logoAlt()) img.setAttribute('alt', logoAlt());

    Array.prototype.slice.call(holder.children).forEach(function (child) {
      if (child !== img) removeNode(child);
    });
    return holder;
  }

  function removeGeneratedTrademarkVisuals() {
    if (!document.querySelectorAll) return;
    Array.prototype.slice.call(document.querySelectorAll(generatedTrademarkSelector)).forEach(function (node) {
      if (!node || hasOfficialLogo(node)) return;
      removeNode(node);
    });
  }

  function removeAlternateTrademarkVisuals() {
    if (!document.querySelectorAll) return;
    Array.prototype.slice.call(document.querySelectorAll('img')).forEach(function (img) {
      if (!isLogoImage(img) || img.getAttribute('src') === logoSrc) return;
      var removable = img.closest('.home-brand-logo, .brand-symbol, .brand-sun, .generated-logo, .generated-mark, .ai-logo, .ai-generated-logo, .' + legacyBrandClass + ', .fish-logo, .fish-icon, .fish-badge, .round-fish-logo, .legacy-fishfull-mark');
      removeNode(removable || img);
    });
  }

  function dedupeBrandLogos() {
    Array.prototype.slice.call(document.querySelectorAll('.brand-mark, a.brand')).forEach(function (container) {
      var holders = Array.prototype.slice.call(container.querySelectorAll('.fishfull-logo-mark, .home-brand-logo, .brand-symbol, .brand-sun'));
      Array.prototype.slice.call(container.querySelectorAll('img')).forEach(function (img) {
        if (!isLogoImage(img)) return;
        var holder = img.closest('.fishfull-logo-mark, .home-brand-logo, .brand-symbol, .brand-sun') || img;
        if (holders.indexOf(holder) === -1) holders.push(holder);
      });
      if (!holders.length) return;
      var keeper = holders.filter(hasOfficialLogo)[0] || holders[0];
      keeper = setOfficialLogo(keeper);
      holders.forEach(function (holder) {
        if (holder !== keeper && holder.parentNode && !keeper.contains(holder)) removeNode(holder);
      });
    });
  }

  function brandMarkup() {
    return '<span class="fishfull-logo-mark"><img src="' + logoSrc + '" width="46" height="46" loading="eager" decoding="async" alt="' + logoAlt() + '"></span><span class="fishfull-brand-copy"><strong>' + brandEnglish + '</strong><b>' + brandChinese + '</b></span>';
  }

  function ensureCompleteBrand() {
    Array.prototype.slice.call(document.querySelectorAll('.brand-mark, a.brand')).forEach(function (container) {
      if (!container.closest('header, .site-nav, .page-nav, .topbar, .top')) return;
      container.classList.add('fishfull-brand-lockup');
      container.setAttribute('aria-label', brandEnglish + ' ' + brandChinese);
      if (!container.querySelector('img[src="' + logoSrc + '"]') || container.textContent.indexOf(brandEnglish) === -1 || container.textContent.indexOf(brandChinese) === -1) {
        container.innerHTML = brandMarkup();
      }
    });
  }

  function applyLogo() {
    Array.prototype.slice.call(document.querySelectorAll('.brand-sun, .brand-symbol, .brand-mark .fishfull-logo-mark, .brand .fishfull-logo-mark')).forEach(setOfficialLogo);
    dedupeBrandLogos();
    removeAlternateTrademarkVisuals();
    removeGeneratedTrademarkVisuals();
    ensureCompleteBrand();
  }

  function removeLegacyLabelPageLinks() {
    Array.prototype.slice.call(document.querySelectorAll('a')).forEach(function (link) {
      var href = link.getAttribute('href') || '';
      var text = (link.textContent || '').replace(/\s+/g, ' ').trim();
      if (/\/sustainability(?:\.html)?(?:[?#]|$)/i.test(href) || text === '玩標籤' || text === 'Label Missions') removeNode(link);
    });
  }

  function replaceForbiddenVisibleText() {
    if (!document.body || !window.TreeWalker) return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!node.nodeValue || !parent || (parent.closest && parent.closest('script, style, template'))) return NodeFilter.FILTER_REJECT;
        return /FISHFULL MAP|SUSTAINABLE CATCH MAP/i.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      node.nodeValue = node.nodeValue.replace(/FISHFULL MAP/gi, brandEnglish).replace(/SUSTAINABLE CATCH MAP/gi, brandEnglish);
    });
  }

  function updateDocumentTitle() {
    var current = document.title || '';
    var suffix = current.split(/[｜|]/).filter(function (part) {
      return part && !/fishfull|漁有料|sustainable catch map/i.test(part);
    }).join('｜').trim();
    document.title = brandEnglish + '｜' + brandChinese + (suffix ? '｜' + suffix : '');
  }

  function removeLegacyGlobalFooter() {
    Array.prototype.slice.call(document.querySelectorAll('footer.fishfull-global-footer')).forEach(removeNode);
  }

  function footerParent() {
    return document.querySelector('.page-shell') || document.querySelector('.page-home') || document.getElementById('root') || document.querySelector('.page') || document.body;
  }

  function removeDuplicateCopyrightText(footer) {
    if (!document.body || !window.TreeWalker) return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || node.nodeValue.indexOf(copyrightText) === -1) return NodeFilter.FILTER_REJECT;
        if (footer && footer.contains(node.parentNode)) return NodeFilter.FILTER_REJECT;
        var parent = node.parentElement;
        if (parent && parent.closest && parent.closest('script, style, template')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      node.nodeValue = node.nodeValue.split(copyrightText).join('').replace(/\s+/g, ' ').trim();
    });
  }

  function ensureCopyrightFooter() {
    if (!document.body) return;
    var parent = footerParent();
    var footer = document.querySelector('footer.site-footer[data-fishfull-copyright="true"]');
    if (!footer) {
      footer = document.createElement('footer');
      footer.className = 'site-footer';
      footer.setAttribute('data-fishfull-copyright', 'true');
    }
    footer.setAttribute('aria-label', currentLang() === 'en' ? 'Copyright' : '版權資訊');
    if (footer.textContent !== copyrightText) footer.textContent = copyrightText;
    removeDuplicateCopyrightText(footer);
    Array.prototype.slice.call(document.querySelectorAll('footer.site-footer')).forEach(function (node) {
      if (node !== footer && node.textContent && node.textContent.indexOf(copyrightText) !== -1) removeNode(node);
    });
    if (footer.parentNode !== parent) parent.appendChild(footer);
  }

  function applyShell() {
    if (applying) return;
    applying = true;
    try {
      installCleanupStyle();
      removeLegacyGlobalFooter();
      applyLogo();
      removeLegacyLabelPageLinks();
      replaceForbiddenVisibleText();
      updateDocumentTitle();
      ensureCopyrightFooter();
    } finally {
      applying = false;
    }
  }

  function scheduleApply() {
    window.clearTimeout(observerTimer);
    observerTimer = window.setTimeout(applyShell, 20);
  }

  function watchPageUpdates() {
    if (!window.MutationObserver || !document.body) return;
    new MutationObserver(scheduleApply).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyShell();
    watchPageUpdates();
  });
  document.addEventListener('scm-language-change', scheduleApply);
  window.addEventListener('load', scheduleApply);
})();
