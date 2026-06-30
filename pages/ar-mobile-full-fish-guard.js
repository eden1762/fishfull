(function () {
  'use strict';

  var timer = 0;

  function viewportHeight() {
    if (window.visualViewport && window.visualViewport.height) return window.visualViewport.height;
    return window.innerHeight || 720;
  }

  function isStageTight(model) {
    var stage = model && model.closest ? model.closest('.ar-stage, .model-stage, #fishfull-ar-stage') : null;
    var rect = stage && stage.getBoundingClientRect ? stage.getBoundingClientRect() : null;
    return !!(rect && rect.height && rect.height < 590);
  }

  function isTightPhoneViewport(model) {
    var phoneQuery = window.matchMedia && window.matchMedia('(max-width: 640px), (max-height: 620px)').matches;
    return !!(phoneQuery || viewportHeight() < 680 || isStageTight(model));
  }

  function fishDistance(model) {
    if (viewportHeight() < 560 || isStageTight(model)) return '4.35m';
    if (viewportHeight() < 680) return '4.05m';
    return '3.9m';
  }

  function orbitWithDistance(orbit, distance) {
    var parts = String(orbit || '68deg 78deg 3.2m').split(' ');
    if (parts.length < 3) return '68deg 78deg ' + distance;
    parts[parts.length - 1] = distance;
    return parts.join(' ');
  }

  function applyFullFishGuard() {
    var models = Array.prototype.slice.call(document.querySelectorAll('.page-ar-game model-viewer.ar-model'));
    models.forEach(function (model) {
      if (!model.dataset.fishfullBaseOrbit) {
        model.dataset.fishfullBaseOrbit = model.getAttribute('camera-orbit') || '68deg 78deg 3.2m';
        model.dataset.fishfullBaseFov = model.getAttribute('field-of-view') || '27deg';
      }

      if (isTightPhoneViewport(model)) {
        model.setAttribute('camera-orbit', orbitWithDistance(model.dataset.fishfullBaseOrbit, fishDistance(model)));
        model.setAttribute('field-of-view', viewportHeight() < 560 ? '34deg' : '32deg');
        model.setAttribute('min-camera-orbit', 'auto auto 3.25m');
        model.setAttribute('max-camera-orbit', 'auto auto 6.2m');
        model.setAttribute('interaction-prompt', 'none');
      } else {
        model.setAttribute('camera-orbit', model.dataset.fishfullBaseOrbit);
        model.setAttribute('field-of-view', model.dataset.fishfullBaseFov);
        model.setAttribute('min-camera-orbit', 'auto auto 2.4m');
        model.setAttribute('max-camera-orbit', 'auto auto 5m');
      }
    });
  }

  function scheduleGuard() {
    window.clearTimeout(timer);
    timer = window.setTimeout(applyFullFishGuard, 90);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleGuard);
  else scheduleGuard();

  window.addEventListener('resize', scheduleGuard, { passive: true });
  window.addEventListener('orientationchange', scheduleGuard, { passive: true });
  if (window.visualViewport) window.visualViewport.addEventListener('resize', scheduleGuard, { passive: true });
  new MutationObserver(scheduleGuard).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'camera-orbit', 'field-of-view'] });
})();