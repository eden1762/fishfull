(function () {
  'use strict';

  var ITEMS = [
    {
      zhTitle: '資源狀態',
      enTitle: 'Resource Status',
      colorNameZh: '紅色',
      colorNameEn: 'red',
      color: '#ec3446',
      accent: '#ff8f98'
    },
    {
      zhTitle: '漁法資訊',
      enTitle: 'Fishing Method',
      colorNameZh: '藍色',
      colorNameEn: 'blue',
      color: '#1789e8',
      accent: '#80cfff'
    },
    {
      zhTitle: '產地與足跡',
      enTitle: 'Origin & Footprint',
      colorNameZh: '金色',
      colorNameEn: 'golden',
      color: '#d6a326',
      accent: '#ffe184'
    }
  ];

  var state = {
    activeIndex: 0,
    arOn: false,
    stream: null,
    animationId: 0,
    startedAt: performance.now(),
    stage: null,
    video: null,
    canvas: null,
    ctx: null,
    toastTimer: 0
  };

  function lang() {
    return localStorage.getItem('scm-language') === 'en' || document.documentElement.lang === 'en' ? 'en' : 'zh';
  }

  function text(zh, en) {
    return lang() === 'en' ? en : zh;
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
      '<canvas class="ar-fish-canvas"></canvas>',
      '<div class="ar-toolbar">',
      '  <div class="ar-toolbar-left">',
      '    <div class="ar-title-pill" data-ar-title></div>',
      '    <button type="button" class="ar-action-btn ar-toggle-btn" data-ar-toggle></button>',
      '  </div>',
      '  <div class="ar-toolbar-right">',
      '    <button type="button" class="ar-action-btn ar-photo-btn" data-ar-photo aria-label="拍照" title="拍照">📷</button>',
      '  </div>',
      '</div>',
      '<div class="ar-hint-pill" data-ar-hint></div>',
      '<div class="ar-toast" data-ar-toast></div>'
    ].join('');
    modelStage.appendChild(stage);

    state.stage = stage;
    state.video = stage.querySelector('.ar-camera');
    state.canvas = stage.querySelector('.ar-fish-canvas');
    state.ctx = state.canvas.getContext('2d');

    cards.forEach(function (card, index) {
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.dataset.arOption = String(index);
      card.addEventListener('click', function () { selectCard(index); });
      card.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectCard(index);
        }
      });
    });

    stage.querySelector('[data-ar-toggle]').addEventListener('click', toggleAr);
    stage.querySelector('[data-ar-photo]').addEventListener('click', takePhoto);

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden && state.arOn) stopCamera(false);
    });
    document.addEventListener('click', function (event) {
      if (event.target.closest && event.target.closest('.language-toggle')) {
        window.setTimeout(updateLanguage, 80);
        window.setTimeout(updateLanguage, 280);
      }
    });

    resizeCanvas();
    selectCard(0);
    updateLanguage();
    drawLoop();
  }

  function selectCard(index) {
    state.activeIndex = index;
    document.querySelectorAll('.sustainability-copy .label-card').forEach(function (card, i) {
      card.classList.toggle('is-selected', i === index);
      card.setAttribute('aria-pressed', i === index ? 'true' : 'false');
    });
    updateLanguage();
  }

  function updateLanguage() {
    if (!state.stage) return;
    var item = ITEMS[state.activeIndex];
    var title = state.stage.querySelector('[data-ar-title]');
    var hint = state.stage.querySelector('[data-ar-hint]');
    var toggle = state.stage.querySelector('[data-ar-toggle]');
    var photo = state.stage.querySelector('[data-ar-photo]');

    title.textContent = text('虛擬實境 AR + 3D 模型', 'Virtual AR + 3D Model');
    toggle.textContent = state.arOn ? text('AR：開啟', 'AR: On') : text('AR：關閉', 'AR: Off');
    toggle.classList.toggle('is-on', state.arOn);
    toggle.setAttribute('aria-pressed', state.arOn ? 'true' : 'false');
    toggle.setAttribute('aria-label', state.arOn ? text('關閉 AR 相機', 'Turn off AR camera') : text('開啟 AR 相機', 'Turn on AR camera'));

    photo.setAttribute('aria-label', text('拍照', 'Take photo'));
    photo.setAttribute('title', text('拍照', 'Take photo'));

    var cardTitle = lang() === 'en' ? item.enTitle : item.zhTitle;
    var colorName = lang() === 'en' ? item.colorNameEn : item.colorNameZh;
    hint.textContent = state.arOn
      ? text('目前顯示「' + cardTitle + '」：' + colorName + ' 3D 魚會游在相機畫面前。點拍照可擷取 AR 合成畫面。', 'Showing "' + cardTitle + '": a ' + colorName + ' 3D fish swims in front of the camera. Tap the camera button to capture the AR composite.')
      : text('目前顯示「' + cardTitle + '」：' + colorName + ' 3D 魚會游在網頁背景上。點拍照可擷取此框內畫面。', 'Showing "' + cardTitle + '": a ' + colorName + ' 3D fish swims over the page background. Tap the camera button to capture this frame.');
  }

  function resizeCanvas() {
    if (!state.canvas || !state.stage) return;
    var rect = state.stage.getBoundingClientRect();
    var ratio = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.max(1, Math.round(rect.width * ratio));
    var h = Math.max(1, Math.round(rect.height * ratio));
    if (state.canvas.width !== w || state.canvas.height !== h) {
      state.canvas.width = w;
      state.canvas.height = h;
    }
  }

  async function toggleAr() {
    if (state.arOn) {
      stopCamera(true);
      return;
    }
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showToast(text('此瀏覽器不支援相機 AR。', 'This browser does not support camera-based AR.'));
        return;
      }
      var stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false
      });
      state.stream = stream;
      state.video.srcObject = stream;
      await state.video.play();
      state.arOn = true;
      state.stage.classList.add('is-ar-on');
      updateLanguage();
    } catch (err) {
      state.arOn = false;
      state.stage.classList.remove('is-ar-on');
      updateLanguage();
      showToast(text('無法開啟相機，請確認瀏覽器權限與 HTTPS 網址。', 'Camera could not be opened. Please check browser permission and HTTPS access.'));
    }
  }

  function stopCamera(showMessage) {
    if (state.stream) {
      state.stream.getTracks().forEach(function (track) { track.stop(); });
    }
    state.stream = null;
    if (state.video) state.video.srcObject = null;
    state.arOn = false;
    if (state.stage) state.stage.classList.remove('is-ar-on');
    updateLanguage();
    if (showMessage) showToast(text('AR 已關閉。', 'AR is off.'));
  }

  function drawLoop(now) {
    resizeCanvas();
    drawScene(state.ctx, state.canvas.width, state.canvas.height, now || performance.now(), false);
    state.animationId = window.requestAnimationFrame(drawLoop);
  }

  function drawBackground(ctx, w, h) {
    var g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, '#dff7ff');
    g.addColorStop(.46, '#eef8ff');
    g.addColorStop(1, '#f8efff');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.globalAlpha = .28;
    for (var i = 0; i < 9; i++) {
      ctx.beginPath();
      ctx.arc(w * ((i * 127) % 1000) / 1000, h * ((i * 251 + 130) % 1000) / 1000, Math.min(w, h) * (0.045 + (i % 3) * .018), 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }
    ctx.restore();
  }

  function drawScene(ctx, w, h, now, includeVideo) {
    if (!ctx || !w || !h) return;
    ctx.clearRect(0, 0, w, h);

    if (includeVideo && state.arOn && state.video && state.video.readyState >= 2) {
      drawCoverVideo(ctx, state.video, w, h);
    } else if (!state.arOn) {
      drawBackground(ctx, w, h);
    }

    drawFish(ctx, w, h, now, ITEMS[state.activeIndex]);
  }

  function drawCoverVideo(ctx, video, w, h) {
    var vw = video.videoWidth || w;
    var vh = video.videoHeight || h;
    var scale = Math.max(w / vw, h / vh);
    var dw = vw * scale;
    var dh = vh * scale;
    var dx = (w - dw) / 2;
    var dy = (h - dh) / 2;
    ctx.drawImage(video, dx, dy, dw, dh);
    ctx.save();
    ctx.fillStyle = 'rgba(5, 42, 66, .08)';
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }

  function drawFish(ctx, w, h, now, item) {
    var t = (now - state.startedAt) / 1000;
    var swim = (Math.sin(t * .82) + 1) / 2;
    var x = w * (.18 + .64 * swim);
    var y = h * (.52 + Math.sin(t * 1.65) * .09);
    var scale = Math.min(w, h) / 500 * (1 + Math.sin(t * 2.2) * .045);
    var facing = Math.cos(t * .82) >= 0 ? 1 : -1;
    var tailWave = Math.sin(t * 8);

    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale * facing, scale);

    ctx.save();
    ctx.globalAlpha = .22;
    ctx.fillStyle = '#0b3148';
    ctx.beginPath();
    ctx.ellipse(0, 74, 114, 18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Tail
    ctx.save();
    ctx.translate(-116, 0);
    ctx.rotate(tailWave * .18);
    var tailGradient = ctx.createLinearGradient(-80, -56, 0, 56);
    tailGradient.addColorStop(0, item.accent);
    tailGradient.addColorStop(.54, item.color);
    tailGradient.addColorStop(1, '#7a2332');
    ctx.fillStyle = tailGradient;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-72, -62, -82, -8);
    ctx.quadraticCurveTo(-50, 0, -82, 58);
    ctx.quadraticCurveTo(-54, 48, 0, 0);
    ctx.fill();
    ctx.restore();

    // Body
    var bodyGradient = ctx.createRadialGradient(32, -38, 12, 10, 4, 128);
    bodyGradient.addColorStop(0, '#ffffff');
    bodyGradient.addColorStop(.18, item.accent);
    bodyGradient.addColorStop(.62, item.color);
    bodyGradient.addColorStop(1, shade(item.color, -.42));
    ctx.fillStyle = bodyGradient;
    ctx.beginPath();
    ctx.ellipse(0, 0, 128, 62, 0, 0, Math.PI * 2);
    ctx.fill();

    // Scales / shine
    ctx.save();
    ctx.clip();
    ctx.globalAlpha = .18;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    for (var i = -72; i <= 74; i += 30) {
      ctx.beginPath();
      ctx.arc(i, 4, 34, -1.2, 1.2);
      ctx.stroke();
    }
    ctx.globalAlpha = .32;
    ctx.beginPath();
    ctx.ellipse(36, -27, 54, 14, -.24, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.restore();

    // Fins
    ctx.fillStyle = shade(item.color, -.18);
    ctx.beginPath();
    ctx.moveTo(-8, -50);
    ctx.quadraticCurveTo(30, -104, 68, -44);
    ctx.quadraticCurveTo(28, -60, -8, -50);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(8, 46);
    ctx.quadraticCurveTo(34, 98, 72, 52);
    ctx.quadraticCurveTo(38, 60, 8, 46);
    ctx.fill();

    ctx.fillStyle = shade(item.color, -.28);
    ctx.beginPath();
    ctx.moveTo(-8, 14);
    ctx.quadraticCurveTo(36, 34, 76, 18);
    ctx.quadraticCurveTo(38, 58, -8, 14);
    ctx.fill();

    // Eye
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(82, -18, 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#153247';
    ctx.beginPath();
    ctx.arc(86, -17, 5, 0, Math.PI * 2);
    ctx.fill();

    // Mouth
    ctx.strokeStyle = 'rgba(50, 28, 35, .45)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(113, 7, 13, .1, .9);
    ctx.stroke();

    // Small floating bubbles for depth
    ctx.save();
    ctx.scale(facing, 1);
    ctx.globalAlpha = .46;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    for (var b = 0; b < 4; b++) {
      var bx = 138 + b * 25 + Math.sin(t * 2 + b) * 5;
      var by = -38 - b * 16 + Math.cos(t * 2.4 + b) * 6;
      ctx.beginPath();
      ctx.arc(bx, by, 6 + b * 1.8, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    ctx.restore();
  }

  function shade(hex, amount) {
    var c = hex.replace('#', '');
    var n = parseInt(c, 16);
    var r = Math.max(0, Math.min(255, (n >> 16) + Math.round(255 * amount)));
    var g = Math.max(0, Math.min(255, ((n >> 8) & 255) + Math.round(255 * amount)));
    var b = Math.max(0, Math.min(255, (n & 255) + Math.round(255 * amount)));
    return '#' + [r, g, b].map(function (v) { return v.toString(16).padStart(2, '0'); }).join('');
  }

  async function takePhoto() {
    if (!state.stage || !state.canvas) return;
    var rect = state.stage.getBoundingClientRect();
    var ratio = Math.min(window.devicePixelRatio || 1, 2);
    var output = document.createElement('canvas');
    output.width = Math.max(1, Math.round(rect.width * ratio));
    output.height = Math.max(1, Math.round(rect.height * ratio));
    var ctx = output.getContext('2d');
    drawScene(ctx, output.width, output.height, performance.now(), true);

    output.toBlob(async function (blob) {
      if (!blob) {
        showToast(text('拍照失敗，請再試一次。', 'Capture failed. Please try again.'));
        return;
      }
      var filename = 'sustainable-ar-' + new Date().toISOString().replace(/[:.]/g, '-') + '.png';
      var file = new File([blob], filename, { type: 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
        try {
          await navigator.share({ files: [file], title: text('永續漁獲 AR 照片', 'Sustainable Catch AR photo') });
          showToast(text('照片已送出，可在手機選單中儲存。', 'Photo is ready. Save it from your phone share menu.'));
          return;
        } catch (err) {
          // User may cancel the share sheet. Fall back to download below.
        }
      }
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
      showToast(text('照片已下載。手機可從下載項目儲存至相簿。', 'Photo downloaded. On mobile, save it to Photos from Downloads.'));
    }, 'image/png');
  }

  function showToast(message) {
    if (!state.stage) return;
    var toast = state.stage.querySelector('[data-ar-toast]');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(state.toastTimer);
    state.toastTimer = window.setTimeout(function () {
      toast.classList.remove('show');
    }, 2600);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForPage);
  } else {
    waitForPage();
  }
})();
