(function () {
  'use strict';

  var SPECIES = {
    crimsonBream: {
      zhTitle: '赤鯮',
      enTitle: 'Crimson Sea Bream',
      zhBody: '紅亮魚身、肉質細緻，適合清蒸、乾煎與宴客餐桌。',
      enBody: 'A red-toned fish with delicate meat, great for steaming or pan-frying.',
      src: '../assets/models/crimson-sea-bream.gltf',
      tone: 'bream',
      orbit: '68deg 80deg 4.1m'
    },
    mackerel: {
      zhTitle: '花腹鯖',
      enTitle: 'Pacific Mackerel',
      zhBody: '藍背銀腹、油脂香，適合乾煎、鹽烤，也很適合魚販一句話介紹。',
      enBody: 'A blue-backed oily fish, easy to recommend for grilling or pan-frying.',
      src: '../assets/models/pacific-mackerel.gltf',
      tone: 'mackerel',
      orbit: '70deg 82deg 4.3m'
    },
    mahiMahi: {
      zhTitle: '鬼頭刀',
      enTitle: 'Mahi-mahi',
      zhBody: '亮黃綠色、肉厚有存在感，適合香煎、烤魚與年輕人愛的餐盒料理。',
      enBody: 'A bright yellow-green fish with firm meat, good for searing, grilling, and bowls.',
      src: '../assets/models/mahi-mahi.gltf',
      tone: 'mahi',
      orbit: '64deg 78deg 4.5m'
    }
  };

  var KEYS = ['crimsonBream', 'mackerel', 'mahiMahi'];
  var state = { activeKey: 'crimsonBream', arOn: false, stream: null, stage: null, video: null, model: null, toastTimer: 0 };

  function lang() {
    return localStorage.getItem('scm-language') === 'en' || document.documentElement.lang === 'en' ? 'en' : 'zh';
  }

  function pick(zh, en) {
    return lang() === 'en' ? en : zh;
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function item() {
    return SPECIES[state.activeKey] || SPECIES.crimsonBream;
  }

  function waitForPage() {
    var modelStage = document.querySelector('.sustainability-layout .model-stage');
    var cards = document.querySelectorAll('.sustainability-copy .label-card');
    if (!modelStage || cards.length < 3) {
      window.setTimeout(waitForPage, 120);
      return;
    }
    init(modelStage, Array.prototype.slice.call(cards, 0, 3));
  }

  function init(modelStage, cards) {
    if (modelStage.dataset.arEnhanced === '1') return;
    modelStage.dataset.arEnhanced = '1';

    modelStage.innerHTML = '';
    var stage = document.createElement('div');
    stage.className = 'ar-stage';
    stage.innerHTML = [
      '<video class="ar-camera" playsinline muted></video>',
      '<div class="ar-ocean-glow" aria-hidden="true"></div>',
      '<model-viewer class="ar-model" camera-controls touch-action="pan-y" auto-rotate rotation-per-second="18deg" shadow-intensity="1" exposure="1" ar ar-modes="webxr scene-viewer quick-look" interaction-prompt="none">',
      '  <button type="button" class="ar-action-btn ar-real-ar-btn" slot="ar-button" data-real-ar></button>',
      '</model-viewer>',
      '<div class="ar-model-fallback" data-model-fallback>3D 魚種載入中</div>',
      '<div class="ar-toolbar">',
      '  <div class="ar-toolbar-left">',
      '    <div class="ar-title-pill" data-ar-title></div>',
      '    <button type="button" class="ar-action-btn ar-toggle-btn" data-ar-toggle></button>',
      '    <div class="ar-fish-options" data-fish-options></div>',
      '  </div>',
      '  <div class="ar-toolbar-right"><button type="button" class="ar-action-btn ar-photo-btn" data-ar-photo>📱</button></div>',
      '</div>',
      '<div class="ar-hint-pill" data-ar-hint></div>',
      '<div class="ar-toast" data-ar-toast></div>'
    ].join('');
    modelStage.appendChild(stage);

    state.stage = stage;
    state.video = stage.querySelector('.ar-camera');
    state.model = stage.querySelector('.ar-model');

    var options = stage.querySelector('[data-fish-options]');
    KEYS.forEach(function (key) {
      var fish = SPECIES[key];
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'ar-action-btn ar-fish-btn is-' + fish.tone;
      btn.dataset.fish = key;
      btn.addEventListener('click', function () { selectSpecies(key); });
      options.appendChild(btn);
    });

    cards.forEach(function (card, index) {
      var key = KEYS[index];
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.dataset.arOption = key;
      card.addEventListener('click', function () { selectSpecies(key); });
      card.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectSpecies(key);
        }
      });
    });

    stage.querySelector('[data-ar-toggle]').addEventListener('click', toggleAr);
    stage.querySelector('[data-ar-photo]').addEventListener('click', screenshotHint);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden && state.arOn) stopCamera(false);
    });
    document.addEventListener('click', function (event) {
      if (event.target.closest && event.target.closest('.language-toggle')) {
        window.setTimeout(updateLanguage, 80);
        window.setTimeout(updateLanguage, 280);
      }
    });

    selectSpecies('crimsonBream');
  }

  function selectSpecies(key) {
    if (!SPECIES[key]) return;
    state.activeKey = key;
    var fish = item();

    document.querySelectorAll('.sustainability-copy .label-card').forEach(function (card) {
      var cardFish = SPECIES[card.dataset.arOption] || fish;
      var selected = card.dataset.arOption === key;
      card.classList.toggle('is-selected', selected);
      card.setAttribute('aria-pressed', selected ? 'true' : 'false');
      card.innerHTML = '<h3>' + esc(pick(cardFish.zhTitle, cardFish.enTitle)) + '</h3><p>' + esc(pick(cardFish.zhBody, cardFish.enBody)) + '</p>';
    });

    state.stage.dataset.fishTone = fish.tone;
    state.stage.querySelectorAll('[data-fish]').forEach(function (btn) {
      var selected = btn.dataset.fish === key;
      btn.classList.toggle('is-selected', selected);
      btn.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });

    state.model.src = fish.src;
    state.model.alt = pick(fish.zhTitle + ' 3D 魚種模型', fish.enTitle + ' 3D fish model');
    state.model.setAttribute('camera-orbit', fish.orbit);
    updateLanguage();
  }

  function updateLanguage() {
    if (!state.stage) return;
    var fish = item();
    state.stage.querySelector('[data-ar-title]').textContent = pick('真魚種 3D：' + fish.zhTitle, 'Real Fish 3D: ' + fish.enTitle);

    var toggle = state.stage.querySelector('[data-ar-toggle]');
    toggle.textContent = state.arOn ? pick('相機AR：開', 'Camera AR: On') : pick('相機AR：關', 'Camera AR: Off');
    toggle.classList.toggle('is-on', state.arOn);
    toggle.setAttribute('aria-pressed', state.arOn ? 'true' : 'false');

    var realAr = state.stage.querySelector('[data-real-ar]');
    if (realAr) realAr.textContent = pick('放到現場', 'View in AR');

    state.stage.querySelector('[data-ar-photo]').setAttribute('aria-label', pick('查看截圖提示', 'Show screenshot tip'));

    state.stage.querySelectorAll('[data-fish]').forEach(function (btn) {
      var fishOption = SPECIES[btn.dataset.fish];
      btn.textContent = pick(fishOption.zhTitle, fishOption.enTitle);
      btn.setAttribute('aria-label', pick('選擇' + fishOption.zhTitle, 'Select ' + fishOption.enTitle));
      btn.setAttribute('title', pick('選擇' + fishOption.zhTitle, 'Select ' + fishOption.enTitle));
    });

    state.stage.querySelector('[data-ar-hint]').textContent = state.arOn
      ? pick('現在是「' + fish.zhTitle + '」。3D 魚種會疊在現場畫面上，也可按「放到現場」體驗。', 'Showing "' + fish.enTitle + '". The 3D fish is overlaid on the live view. Tap "View in AR" to try spatial viewing.')
      : pick('選一種真實魚種，看 3D 模型、口感特色與料理方向；打開相機後可把魚種疊在現場畫面上。', 'Choose a real fish species to view its 3D model and cooking direction. Turn on the camera to overlay it on the live view.');
  }

  async function toggleAr() {
    if (state.arOn) {
      stopCamera(true);
      return;
    }
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showToast(pick('這台裝置無法開啟相機畫面。', 'This device cannot open the camera view.'));
        return;
      }
      var stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false });
      state.stream = stream;
      state.video.srcObject = stream;
      await state.video.play();
      state.arOn = true;
      state.stage.classList.add('is-ar-on');
      updateLanguage();
      showToast(pick('相機已開，3D 魚種會疊在現場畫面上。', 'Camera is on. The 3D fish is overlaid on the live view.'));
    } catch (err) {
      state.arOn = false;
      state.stage.classList.remove('is-ar-on');
      updateLanguage();
      showToast(pick('相機沒有開啟，請確認權限或換手機瀏覽器試試。', 'Camera did not open. Check permission or try another mobile browser.'));
    }
  }

  function stopCamera(showMessage) {
    if (state.stream) state.stream.getTracks().forEach(function (track) { track.stop(); });
    state.stream = null;
    if (state.video) state.video.srcObject = null;
    state.arOn = false;
    if (state.stage) state.stage.classList.remove('is-ar-on');
    updateLanguage();
    if (showMessage) showToast(pick('相機已關閉。', 'Camera is off.'));
  }

  function screenshotHint() {
    showToast(pick('要保存畫面，請用手機截圖；想把模型放進空間，請按「放到現場」。', 'Take a phone screenshot to save the view. To place the model in space, tap "View in AR".'));
  }

  function showToast(message) {
    var toast = state.stage && state.stage.querySelector('[data-ar-toast]');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(state.toastTimer);
    state.toastTimer = window.setTimeout(function () { toast.classList.remove('show'); }, 2800);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', waitForPage);
  else waitForPage();
})();
