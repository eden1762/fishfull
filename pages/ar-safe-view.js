(function () {
  'use strict';

  function isEnglish() {
    return document.documentElement.lang === 'en';
  }

  function text() {
    return isEnglish() ? 'Keep the whole fish in view' : '完整魚身留在框內';
  }

  function setLabel(frame) {
    var label = frame.querySelector('.ar-safe-view__label');
    if (!label) return;
    label.textContent = text();
  }

  function run() {
    var stage = document.querySelector('.ar-stage');
    if (!stage) {
      window.setTimeout(run, 160);
      return;
    }

    var frame = stage.querySelector('[data-ar-safe-view]');
    if (!frame) {
      frame = document.createElement('div');
      frame.className = 'ar-safe-view';
      frame.setAttribute('aria-hidden', 'true');
      frame.setAttribute('data-ar-safe-view', '1');
      frame.innerHTML = '<span class="ar-safe-view__corner"></span><span class="ar-safe-view__corner"></span><span class="ar-safe-view__corner"></span><span class="ar-safe-view__corner"></span><span class="ar-safe-view__line"></span><span class="ar-safe-view__label"></span>';
      stage.appendChild(frame);
    }

    setLabel(frame);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  document.addEventListener('scm-language-change', run);
})();