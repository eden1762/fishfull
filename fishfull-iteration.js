(function () {
  'use strict';

  var arRoute = '/ar#fishfull-ar-stage';

  var copy = {
    zh: {
      eyebrow: '買魚小幫手',
      title: '從掃履歷到把魚煮上桌，一條路線走到底',
      body: '先掃魚貨 QR 看批次履歷與料理方向，再用 AR 看清魚種外型，接著找主推魚、附近合作點與零失敗食譜。FishFull 讓消費者不用猜，魚販也更好介紹。',
      cards: [
        ['掃魚貨 QR', '一次打開批次履歷、魚種介紹、新鮮挑法、料理建議與 AR 入口。', '/catch'],
        ['AR 看真魚', '只保留完整 3D 魚身與必要控制，選魚、旋轉、開相機，不讓資訊卡擋住魚。', arRoute],
        ['主推魚', '先看今天推薦哪一條，包含口感、份量、現場問法與料理搭配。', '/pages/fish.html'],
        ['附近合作點＋VR', '找市場、魚市、餐廳與漁港，點每家店先試逛 VR 示範再出發。', '/pages/map.html'],
        ['零失敗食譜', '清蒸、乾煎、煮湯都拆成簡單步驟，第一次煮魚也不容易翻車。', '/pages/recipes.html']
      ],
      cta: '照著「掃履歷 → AR 認魚 → 找合作點 → 帶食譜回家」走一輪，就能把不知道怎麼買，變成今晚真的吃得到。'
    },
    en: {
      eyebrow: 'Seafood buying helper',
      title: 'One clear route from catch history to dinner',
      body: 'Scan the catch QR for batch history and cooking direction, use AR to recognize the full fish, then find a featured species, a nearby seafood spot, and an easy recipe. FishFull makes the story clearer for shoppers and fishmongers.',
      cards: [
        ['Scan the Catch QR', 'Open batch history, species notes, freshness checks, cooking ideas, and the AR entry in one tap.', '/catch'],
        ['View Fish in AR', 'Keep the full 3D fish front and center. Pick, rotate, and use the camera without info cards blocking the view.', arRoute],
        ['Featured Fish', 'See one recommended fish with flavor, portions, counter questions, and recipe pairings.', '/pages/fish.html'],
        ['Nearby Spots + VR', 'Find markets, restaurants, fish markets, and ports, then preview each partner with a VR walk-through demo.', '/pages/map.html'],
        ['Easy Recipes', 'Steam, pan-fry, or make soup with clear, low-stress steps.', '/pages/recipes.html']
      ],
      cta: 'Follow “scan history → recognize in AR → find a seafood spot → take a recipe home” and turn seafood confusion into tonight’s meal.'
    }
  };

  function currentLang() {
    return window.SCMLanguage ? window.SCMLanguage.current() : (localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh');
  }

  function escapeHtml(value) {
    return window.SCMLanguage ? window.SCMLanguage.escapeHtml(value) : String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function injectStyle() {
    if (document.getElementById('fishfull-iteration-style')) return;
    var style = document.createElement('style');
    style.id = 'fishfull-iteration-style';
    style.textContent = [
      '.fishfull-loop{grid-column:1/-1;margin:clamp(18px,4vw,34px) auto 0;width:100%;padding:clamp(18px,4vw,34px);border-radius:32px;background:linear-gradient(135deg,rgba(255,255,255,.93),rgba(224,247,255,.88));box-shadow:0 24px 70px rgba(38,95,120,.16);border:1px solid rgba(66,148,178,.18)}',
      '.fishfull-loop__eyebrow{margin:0 0 10px;font-size:.82rem;letter-spacing:.16em;text-transform:uppercase;font-weight:900;color:#0f7898}',
      '.fishfull-loop h2{margin:0;font-size:clamp(1.8rem,4vw,3.1rem);line-height:1.08;color:#12354a}',
      '.fishfull-loop__body{max-width:900px;margin:14px 0 0;color:#3b5967;font-size:1.03rem;line-height:1.85;font-weight:700}',
      '.fishfull-loop__grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px;margin-top:22px}',
      '.fishfull-loop__card{display:block;padding:18px;border-radius:24px;background:rgba(255,255,255,.84);border:1px solid rgba(31,115,143,.12);text-decoration:none;color:inherit;transition:transform .18s ease,box-shadow .18s ease}',
      '.fishfull-loop__card:hover{transform:translateY(-3px);box-shadow:0 18px 36px rgba(31,92,120,.13)}',
      '.fishfull-loop__card:focus-visible{outline:3px solid rgba(15,120,152,.45);outline-offset:4px}',
      '.fishfull-loop__card strong{display:block;margin-bottom:8px;color:#0d4861;font-size:1.08rem}',
      '.fishfull-loop__card p{margin:0;color:#46616d;line-height:1.65;font-weight:650}',
      '.fishfull-loop__card[href="' + arRoute + '"],.fishfull-loop__card[href="/catch"]{background:linear-gradient(150deg,rgba(255,255,255,.96),rgba(226,250,246,.94));border-color:rgba(16,132,140,.25)}',
      '.fishfull-loop__cta{margin:20px 0 0;padding:14px 16px;border-radius:18px;background:#12354a;color:#fff;font-weight:900;line-height:1.55}',
      '@media (max-width:1100px){.fishfull-loop__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}',
      '@media (max-width:860px){.fishfull-loop__grid{grid-template-columns:1fr}.fishfull-loop{border-radius:24px}.fishfull-loop__card{min-height:auto}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function renderLoop() {
    var homeRoot = document.querySelector('.page-home .home-hero');
    if (!homeRoot) return;
    injectStyle();
    var text = copy[currentLang()] || copy.zh;
    var existing = document.getElementById('fishfull-behavior-loop');
    var html = [
      '<section class="fishfull-loop" id="fishfull-behavior-loop" aria-labelledby="fishfull-loop-title">',
        '<p class="fishfull-loop__eyebrow">' + escapeHtml(text.eyebrow) + '</p>',
        '<h2 id="fishfull-loop-title">' + escapeHtml(text.title) + '</h2>',
        '<p class="fishfull-loop__body">' + escapeHtml(text.body) + '</p>',
        '<div class="fishfull-loop__grid">',
          text.cards.map(function (item) {
            return '<a class="fishfull-loop__card" href="' + escapeHtml(item[2]) + '"><strong>' + escapeHtml(item[0]) + '</strong><p>' + escapeHtml(item[1]) + '</p></a>';
          }).join(''),
        '</div>',
        '<p class="fishfull-loop__cta">' + escapeHtml(text.cta) + '</p>',
      '</section>'
    ].join('');
    if (existing) existing.outerHTML = html;
    else homeRoot.insertAdjacentHTML('beforeend', html);
  }

  function scheduleRender() {
    window.requestAnimationFrame(function () {
      window.setTimeout(renderLoop, 0);
    });
  }

  document.addEventListener('DOMContentLoaded', scheduleRender);
  document.addEventListener('scm-language-change', scheduleRender);
  scheduleRender();
})();
