(function () {
  'use strict';

  var overlay = null;
  var panorama = null;
  var stage = null;
  var title = null;
  var note = null;
  var navLink = null;
  var offset = -430;
  var minOffset = -1140;
  var maxOffset = 0;
  var dragging = false;
  var startX = 0;
  var startOffset = 0;

  function isEnglish() {
    return document.documentElement.lang === 'en' || localStorage.getItem('scm-language') === 'en';
  }

  function text(zh, en) {
    return isEnglish() ? en : zh;
  }

  function esc(value) {
    return String(value || '').replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function clamp(value) {
    return Math.max(minOffset, Math.min(maxOffset, value));
  }

  function updatePanorama(animate) {
    if (!panorama) return;
    if (!animate) stage.classList.add('is-dragging');
    panorama.style.transform = 'translate3d(' + offset + 'px,0,0)';
    if (!animate) {
      window.requestAnimationFrame(function () {
        stage.classList.remove('is-dragging');
      });
    }
  }

  function buildOverlay() {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.className = 'vr-demo-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = [
      '<section class="vr-demo-dialog" role="dialog" aria-modal="true" aria-labelledby="vr-demo-title">',
        '<header class="vr-demo-head">',
          '<div><p>360° STORE WALK-THROUGH DEMO</p><h2 id="vr-demo-title"></h2></div>',
          '<button class="vr-demo-close" type="button" data-vr-close aria-label="' + esc(text('關閉 VR 示範', 'Close VR demo')) + '">×</button>',
        '</header>',
        '<div class="vr-demo-stage" data-vr-stage tabindex="0" aria-label="' + esc(text('可左右拖曳的店內 VR 示範場景', 'Interactive store VR demo. Drag left and right to look around.')) + '">',
          '<div class="vr-demo-panorama" data-vr-panorama>',
            '<div class="vr-scene">',
              '<div class="vr-sign" data-vr-sign></div>',
              '<div class="vr-door"></div>',
              '<div class="vr-counter"></div>',
              '<div class="vr-cold-case"></div>',
              '<div class="vr-qr-stand"></div>',
              '<span class="vr-hotspot one">' + esc(text('魚貨櫃：看今日漁獲', 'Catch counter: see today’s seafood')) + '</span>',
              '<span class="vr-hotspot two">' + esc(text('冷藏櫃：看來源與保存', 'Chilled case: check origin and storage')) + '</span>',
              '<span class="vr-hotspot three">' + esc(text('掃碼區：開履歷與 AR', 'Scan station: open catch history and AR')) + '</span>',
            '</div>',
          '</div>',
          '<div class="vr-demo-hud">',
            '<button type="button" data-vr-left aria-label="' + esc(text('向左看', 'Look left')) + '">←</button>',
            '<span>' + esc(text('拖曳或按箭頭環視店內', 'Drag or use arrows to look around')) + '</span>',
            '<button type="button" data-vr-right aria-label="' + esc(text('向右看', 'Look right')) + '">→</button>',
          '</div>',
        '</div>',
        '<footer class="vr-demo-foot">',
          '<p data-vr-note></p>',
          '<a data-vr-nav target="_blank" rel="noopener noreferrer">' + esc(text('打開地圖導航', 'Open directions')) + '</a>',
        '</footer>',
      '</section>'
    ].join('');
    document.body.appendChild(overlay);

    panorama = overlay.querySelector('[data-vr-panorama]');
    stage = overlay.querySelector('[data-vr-stage]');
    title = overlay.querySelector('#vr-demo-title');
    note = overlay.querySelector('[data-vr-note]');
    navLink = overlay.querySelector('[data-vr-nav]');

    overlay.querySelector('[data-vr-close]').addEventListener('click', closeDemo);
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) closeDemo();
    });
    overlay.querySelector('[data-vr-left]').addEventListener('click', function () {
      offset = clamp(offset + 280);
      updatePanorama(true);
    });
    overlay.querySelector('[data-vr-right]').addEventListener('click', function () {
      offset = clamp(offset - 280);
      updatePanorama(true);
    });

    stage.addEventListener('pointerdown', beginDrag);
    stage.addEventListener('pointermove', moveDrag);
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);
    stage.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        offset = clamp(offset + 220);
        updatePanorama(true);
      } else if (event.key === 'ArrowRight') {
        offset = clamp(offset - 220);
        updatePanorama(true);
      } else if (event.key === 'Escape') {
        closeDemo();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && overlay.classList.contains('is-open')) closeDemo();
    });
  }

  function beginDrag(event) {
    if (event.target.closest('button, a')) return;
    dragging = true;
    startX = event.clientX;
    startOffset = offset;
    stage.classList.add('is-dragging');
    stage.setPointerCapture(event.pointerId);
  }

  function moveDrag(event) {
    if (!dragging) return;
    offset = clamp(startOffset + (event.clientX - startX));
    panorama.style.transform = 'translate3d(' + offset + 'px,0,0)';
  }

  function endDrag(event) {
    if (!dragging) return;
    dragging = false;
    stage.classList.remove('is-dragging');
    if (stage.hasPointerCapture && stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
  }

  function openDemo(card) {
    buildOverlay();
    var storeName = card.querySelector('strong') ? card.querySelector('strong').textContent.trim() : text('合作店家', 'Partner seafood spot');
    var typeArea = card.querySelector('span') ? card.querySelector('span').textContent.trim() : '';
    var address = card.querySelector('.address-link');
    var sign = overlay.querySelector('[data-vr-sign]');

    title.textContent = storeName + (typeArea ? '｜' + typeArea : '');
    sign.textContent = storeName;
    note.textContent = text(
      '這是可左右拖曳的 VR 功能示範。正式合作時，每家店可換成自己的 360° 實景，加入魚貨櫃、店員介紹、今日推薦與掃碼點。',
      'This is an interactive VR feature demo. Each partner can replace it with a real 360° store view and add catch counters, staff tips, featured seafood, and scan points.'
    );
    navLink.href = address ? address.href : '/map';
    offset = window.innerWidth < 720 ? -650 : -430;
    updatePanorama(true);

    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('vr-demo-open');
    window.setTimeout(function () {
      stage.focus({ preventScroll: true });
    }, 40);
  }

  function closeDemo() {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('vr-demo-open');
  }

  function buttonLabel() {
    return text('走進店裡 VR Demo', 'Enter store VR demo');
  }

  function enhanceCards() {
    document.querySelectorAll('.location-card').forEach(function (card) {
      var actions = card.querySelector('.location-actions');
      if (!actions || actions.querySelector('[data-vr-demo]')) return;
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'vr-demo-button';
      button.setAttribute('data-vr-demo', '');
      button.textContent = buttonLabel();
      button.setAttribute('aria-label', buttonLabel() + '：' + (card.querySelector('strong') ? card.querySelector('strong').textContent.trim() : ''));
      button.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        openDemo(card);
      });
      actions.insertBefore(button, actions.firstChild);
    });
  }

  function refreshLanguage() {
    document.querySelectorAll('[data-vr-demo]').forEach(function (button) {
      button.textContent = buttonLabel();
    });
    if (overlay && overlay.classList.contains('is-open')) closeDemo();
    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
      overlay = null;
      panorama = null;
      stage = null;
      title = null;
      note = null;
      navLink = null;
    }
    enhanceCards();
  }

  function scheduleEnhance() {
    window.requestAnimationFrame(function () {
      window.setTimeout(enhanceCards, 30);
    });
  }

  document.addEventListener('DOMContentLoaded', scheduleEnhance);
  document.addEventListener('scm-language-change', refreshLanguage);
  window.addEventListener('load', scheduleEnhance);

  if (window.MutationObserver) {
    new MutationObserver(scheduleEnhance).observe(document.getElementById('root') || document.body, {
      childList: true,
      subtree: true
    });
  }
})();
