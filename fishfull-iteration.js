(function () {
  'use strict';

  var copy = {
    zh: {
      eyebrow: '買魚小幫手',
      title: '下一步不只是一句話，而是今天就能試買的路線',
      body: '先選一條主推魚、一家合作點、一份零失敗食譜。FishFull 把這三件事做成可點入口，讓消費者站在魚攤前不用猜，魚販也更好介紹。',
      cards: [
        ['主推魚', '先看今天推薦哪一條，包含口感、份量、問法與料理搭配。', '/pages/fish.html'],
        ['去附近買魚', '找市場、魚市、餐廳與漁港合作點，把知道變成真的去買。', '/pages/map.html'],
        ['零失敗食譜', '清蒸、乾煎、煮湯都拆成簡單步驟，第一次煮魚也不容易翻車。', '/pages/recipes.html'],
        ['十秒回饋', '買或沒買都留一句，讓下一次主推魚與店家介紹更貼近現場。', '/pages/feedback.html']
      ],
      cta: '從「主推魚 → 合作點 → 食譜 → 回饋」走一輪，就能知道哪條魚、哪句話、哪道菜最能讓人下手買。'
    },
    en: {
      eyebrow: 'Seafood buying helper',
      title: 'The next step is now a real buying route',
      body: 'Start with one featured fish, one partner spot, and one easy recipe. FishFull turns those steps into tappable entrances for shoppers and vendors.',
      cards: [
        ['Featured Fish', 'See one recommended fish with taste, portion, buying questions, and recipe pairing.', '/pages/fish.html'],
        ['Buy Nearby', 'Find partner markets, restaurants, fish markets, and ports.', '/pages/map.html'],
        ['Easy Recipes', 'Steam, pan-fry, or make soup with low-fail steps.', '/pages/recipes.html'],
        ['10-sec Feedback', 'Save one real note after buying or almost buying.', '/pages/feedback.html']
      ],
      cta: 'Run through “featured fish → partner spot → recipe → feedback” to learn what really moves people to buy.'
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
      '.fishfull-loop{grid-column:1/-1;margin:clamp(18px,4vw,34px) auto 0;width:100%;padding:clamp(18px,4vw,34px);border-radius:32px;background:linear-gradient(135deg,rgba(255,255,255,.92),rgba(224,247,255,.86));box-shadow:0 24px 70px rgba(38,95,120,.16);border:1px solid rgba(66,148,178,.18)}',
      '.fishfull-loop__eyebrow{margin:0 0 10px;font-size:.82rem;letter-spacing:.16em;text-transform:uppercase;font-weight:900;color:#0f7898}',
      '.fishfull-loop h2{margin:0;font-size:clamp(1.8rem,4vw,3.1rem);line-height:1.08;color:#12354a}',
      '.fishfull-loop__body{max-width:860px;margin:14px 0 0;color:#3b5967;font-size:1.03rem;line-height:1.85;font-weight:700}',
      '.fishfull-loop__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:22px}',
      '.fishfull-loop__card{display:block;padding:18px;border-radius:24px;background:rgba(255,255,255,.82);border:1px solid rgba(31,115,143,.12);text-decoration:none;color:inherit;transition:transform .18s ease,box-shadow .18s ease}',
      '.fishfull-loop__card:hover{transform:translateY(-3px);box-shadow:0 18px 36px rgba(31,92,120,.13)}',
      '.fishfull-loop__card strong{display:block;margin-bottom:8px;color:#0d4861;font-size:1.08rem}',
      '.fishfull-loop__card p{margin:0;color:#46616d;line-height:1.65;font-weight:650}',
      '.fishfull-loop__cta{margin:20px 0 0;padding:14px 16px;border-radius:18px;background:#12354a;color:#fff;font-weight:900;line-height:1.55}',
      '@media (max-width:860px){.fishfull-loop__grid{grid-template-columns:1fr}.fishfull-loop{border-radius:24px}}'
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
