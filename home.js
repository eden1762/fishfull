(function () {
  'use strict';

  var copy = {
    zh: {
      brand: 'FishFull 漁有料',
      kicker: 'SUSTAINABLE CATCH MAP',
      nav: [
        { label: '掃魚貨 QR', href: '#qr-demo' },
        { label: 'AR 看真魚', href: '/ar#fishfull-ar-stage' },
        { label: '我們的理念', href: '/pages/about.html' },
        { label: '主推魚', href: '/pages/fish.html' },
        { label: '去附近買魚', href: '/pages/map.html' },
        { label: '零失敗食譜', href: '/pages/recipes.html' },
        { label: '十秒回饋', href: '/pages/feedback.html' }
      ],
      eyebrow: '掃履歷・看真魚・找好店・帶食譜回家',
      headline: '掃一下，這條魚從哪來、怎麼挑、怎麼煮都看得懂',
      intro: 'FishFull 漁有料把魚貨履歷、魚種介紹、料理方式、AR 真魚查看與附近買點排成一條順手路線。消費者買得更安心，魚販更好介紹，漁業夥伴也能把好魚的故事說清楚。',
      noSpin: '最快玩法：掃 QR 看完整魚貨小卡；想先認魚，就直接打開 AR，把魚放進眼前的空間慢慢看。',
      qrTitle: '現場先掃這張魚貨 QR',
      qrBody: '這張示範 QR 會打開一份完整魚貨小卡：看批次履歷、魚種特色、新鮮挑法、料理建議，再一鍵進 AR 看魚的實際外型。',
      qrCta: '打開魚貨小卡 →',
      qrAlt: 'FishFull 漁有料魚貨履歷示範 QR Code',
      qrHref: '/catch',
      qrSteps: ['看批次履歷', '認識魚種', '學挑新鮮', '選料理方式', 'AR 看真魚'],
      visualTitle: '從海裡到餐桌，一路都看得見',
      visualText: '海浪帶來當季漁獲，魚販把來源與鮮度說清楚，消費者再用 AR 認魚、用食譜把好魚端上桌。',
      visualTags: ['魚貨履歷', 'AR 認魚', '附近買點', '店家 VR', '家常食譜'],
      actionTitle: '你現在想從哪一步開始？',
      actionHint: '掃履歷、看真魚、找魚、找店、看食譜與回饋，都整理成手機上一點就到的入口。',
      routeEyebrow: 'START HERE',
      actions: [
        { tone: 'blue', href: '/catch', number: '01', title: '掃碼看魚貨', subtitle: '履歷、介紹、挑法、料理一次看', badge: '最快上手', description: '適合魚攤、店家與活動現場。客人掃一下，就能知道這批魚從哪來、怎麼挑、怎麼煮。' },
        { tone: 'orange', href: '/ar#fishfull-ar-stage', number: '02', title: 'AR 看真魚', subtitle: '只看魚的完整外型，畫面乾淨不擋魚', badge: '手機必玩', description: '選魚種、拖曳旋轉，再開相機把魚放進現場。沒有資訊卡蓋住畫面，認魚更直覺。' },
        { tone: 'pink', href: '/pages/fish.html', number: '03', title: '找想買的魚', subtitle: '不知道買哪條，就先看今日主推魚', badge: '選魚不尷尬', description: '用口感、份量、現場問法與料理搭配，讓第一次買魚的人少一點猶豫。' },
        { tone: 'blue', href: '/pages/map.html', number: '04', title: '找附近合作點', subtitle: '看市場、魚市、餐廳與漁港，還能逛 VR', badge: '直接去買', description: '點店家看位置與 VR 示範場景，先逛一圈，再打開導航去現場。' },
        { tone: 'orange', href: '/pages/recipes.html', number: '05', title: '拿零失敗食譜', subtitle: '清蒸、乾煎、煮湯，今晚就能上桌', badge: '不翻車', description: '買之前先知道怎麼煮，讓「我不會」變成「今晚可以試」。' },
        { tone: 'pink', href: '/pages/feedback.html', number: '06', title: '留下十秒回饋', subtitle: '買或沒買都能回一句現場真話', badge: '快速記錄', description: '讓店家知道哪段介紹最有用，也讓下一次推薦更貼近大家真的想吃的魚。' }
      ],
      stats: [
        { value: '1 掃', label: '開啟完整魚貨小卡' },
        { value: 'AR', label: '看清魚種實際外型' },
        { value: 'VR', label: '先逛合作店家場景' }
      ]
    },
    en: {
      brand: 'FishFull',
      kicker: 'SUSTAINABLE CATCH MAP',
      nav: [
        { label: 'Scan Catch QR', href: '#qr-demo' },
        { label: 'View Fish in AR', href: '/ar#fishfull-ar-stage' },
        { label: 'Our Idea', href: '/pages/about.html' },
        { label: 'Featured Fish', href: '/pages/fish.html' },
        { label: 'Buy Nearby', href: '/pages/map.html' },
        { label: 'Easy Recipes', href: '/pages/recipes.html' },
        { label: 'Quick Feedback', href: '/pages/feedback.html' }
      ],
      eyebrow: 'Trace the catch · See the fish · Find a spot · Cook with confidence',
      headline: 'One scan shows where the catch came from, what it is, and how to cook it',
      intro: 'FishFull puts catch history, species notes, cooking ideas, a clean AR fish view, and nearby seafood spots into one easy flow. Shoppers get confidence, fishmongers get a clearer story, and seafood producers can show the value behind each catch.',
      noSpin: 'Fastest route: scan the catch QR for the full story. Want to recognize the fish first? Open AR and place the fish in your space.',
      qrTitle: 'Scan this catch QR demo',
      qrBody: 'The demo catch page includes batch history, species highlights, freshness checks, cooking ideas, and a one-tap AR view of the fish.',
      qrCta: 'Open the catch card →',
      qrAlt: 'FishFull demo catch traceability QR code',
      qrHref: '/catch',
      qrSteps: ['Catch history', 'Species guide', 'Freshness check', 'Cooking ideas', 'AR fish view'],
      visualTitle: 'From the sea to your table, the story stays visible',
      visualText: 'Seasonal catch comes in with the tide, fishmongers explain origin and freshness, and shoppers use AR and easy recipes to turn a good fish into dinner.',
      visualTags: ['Catch history', 'AR fish view', 'Nearby spots', 'Store VR', 'Easy recipes'],
      actionTitle: 'Where do you want to start?',
      actionHint: 'Scan the catch, view the fish, find a species, visit a seafood spot, grab a recipe, or leave quick feedback.',
      routeEyebrow: 'START HERE',
      actions: [
        { tone: 'blue', href: '/catch', number: '01', title: 'Scan the Catch', subtitle: 'History, species, freshness, and cooking in one place', badge: 'Fastest start', description: 'Made for seafood counters, shops, and events. One scan gives shoppers a clear, useful catch story.' },
        { tone: 'orange', href: '/ar#fishfull-ar-stage', number: '02', title: 'View Fish in AR', subtitle: 'A clean full-fish view with nothing covering the model', badge: 'Phone favorite', description: 'Pick a species, rotate the full fish, then open the camera and place it in your space. No info cards blocking the view.' },
        { tone: 'pink', href: '/pages/fish.html', number: '03', title: 'Find a Fish', subtitle: 'Start with one featured catch for today', badge: 'Easy choice', description: 'Use flavor, portions, counter questions, and recipe pairings to make seafood shopping feel less intimidating.' },
        { tone: 'blue', href: '/pages/map.html', number: '04', title: 'Find Seafood Spots', subtitle: 'Explore markets, restaurants, ports, and fish markets with VR demos', badge: 'Go get it', description: 'Open a shop card, try its walk-through demo, then launch directions when you are ready to visit.' },
        { tone: 'orange', href: '/pages/recipes.html', number: '05', title: 'Grab an Easy Recipe', subtitle: 'Steam, pan-fry, or make soup tonight', badge: 'Low-stress cooking', description: 'Knowing the cooking plan before you buy turns “I cannot cook fish” into “I can make this tonight.”' },
        { tone: 'pink', href: '/pages/feedback.html', number: '06', title: 'Leave Quick Feedback', subtitle: 'Share one honest seafood-shopping note', badge: 'Quick check-in', description: 'Help seafood sellers learn which details made the choice easier and what shoppers want next.' }
      ],
      stats: [
        { value: '1 scan', label: 'Open the full catch card' },
        { value: 'AR', label: 'See the real species shape' },
        { value: 'VR', label: 'Preview a partner spot' }
      ]
    }
  };

  function lang() {
    return window.SCMLanguage ? window.SCMLanguage.current() : (localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh');
  }

  function escapeHtml(value) {
    return window.SCMLanguage ? window.SCMLanguage.escapeHtml(value) : String(value);
  }

  function logoAlt(currentLang) {
    return currentLang === 'en' ? 'FishFull official logo' : 'FishFull 漁有料官方商標';
  }

  function navTemplate(items) {
    return items.map(function (item) {
      return '<a href="' + escapeHtml(item.href) + '">' + escapeHtml(item.label) + '</a>';
    }).join('');
  }

  function actionsTemplate(actions) {
    return actions.map(function (item) {
      var aria = item.title + ' / ' + item.subtitle + ' / ' + item.badge;
      return [
        '<article class="route-card route-' + escapeHtml(item.tone) + '" data-href="' + escapeHtml(item.href) + '" tabindex="0">',
          '<div class="route-meta">',
            '<span class="route-number">' + escapeHtml(item.number) + '</span>',
            '<span class="route-badge">' + escapeHtml(item.badge) + '</span>',
          '</div>',
          '<input type="button" class="route-button" value="' + escapeHtml(item.title) + '" aria-label="' + escapeHtml(aria) + '" data-href="' + escapeHtml(item.href) + '">',
          '<h2>' + escapeHtml(item.subtitle) + '</h2>',
          '<p>' + escapeHtml(item.description) + '</p>',
        '</article>'
      ].join('');
    }).join('');
  }

  function statsTemplate(stats) {
    return stats.map(function (item) {
      return '<div class="stat-pill"><strong>' + escapeHtml(item.value) + '</strong><span>' + escapeHtml(item.label) + '</span></div>';
    }).join('');
  }

  function tagsTemplate(tags) {
    return tags.map(function (tag) {
      return '<span>' + escapeHtml(tag) + '</span>';
    }).join('');
  }

  function qrStepsTemplate(steps) {
    return steps.map(function (step) {
      return '<span>' + escapeHtml(step) + '</span>';
    }).join('');
  }

  function qrDemoTemplate(text) {
    return [
      '<section class="qr-demo-card" id="qr-demo" aria-label="' + escapeHtml(text.qrTitle) + '">',
        '<a class="qr-image-link" href="' + escapeHtml(text.qrHref) + '" aria-label="' + escapeHtml(text.qrCta) + '">',
          '<img src="/assets/fishfull-demo-qr.svg?v=20260710" width="164" height="164" loading="eager" decoding="async" alt="' + escapeHtml(text.qrAlt) + '">',
        '</a>',
        '<div class="qr-demo-copy">',
          '<p class="qr-label">CATCH QR DEMO</p>',
          '<h2>' + escapeHtml(text.qrTitle) + '</h2>',
          '<p>' + escapeHtml(text.qrBody) + '</p>',
          '<div class="qr-step-row">' + qrStepsTemplate(text.qrSteps) + '</div>',
          '<a class="qr-demo-link" href="' + escapeHtml(text.qrHref) + '">' + escapeHtml(text.qrCta) + '</a>',
        '</div>',
      '</section>'
    ].join('');
  }

  function oceanSceneTemplate() {
    return [
      '<svg class="ocean-scene" viewBox="0 0 800 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">',
        '<defs>',
          '<linearGradient id="seaSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eaffff"/><stop offset=".48" stop-color="#bfeef5"/><stop offset=".49" stop-color="#59c7d0"/><stop offset="1" stop-color="#087d91"/></linearGradient>',
          '<linearGradient id="fishTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#71e0c1"/><stop offset="1" stop-color="#078b7a"/></linearGradient>',
          '<linearGradient id="fishBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7fe4ff"/><stop offset="1" stop-color="#0879b5"/></linearGradient>',
          '<linearGradient id="fishGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe46d"/><stop offset="1" stop-color="#ef9c19"/></linearGradient>',
        '</defs>',
        '<rect width="800" height="620" fill="url(#seaSky)"/>',
        '<circle cx="650" cy="90" r="54" fill="#fff6b0" opacity=".9"/>',
        '<g class="wave-lines" fill="none" stroke="#ffffff" stroke-linecap="round">',
          '<path d="M-40 290 C80 235 160 335 280 280 S490 240 610 290 S760 330 860 270" stroke-width="22" opacity=".88"/>',
          '<path d="M-60 326 C70 282 160 366 300 322 S520 284 660 330 S780 356 870 315" stroke-width="9" opacity=".62"/>',
        '</g>',
        '<g class="scene-creature creature-one" transform="translate(470 215)">',
          '<ellipse cx="0" cy="0" rx="88" ry="43" fill="url(#fishTeal)"/>',
          '<path d="M76 -8 L132 -48 L121 2 L134 46 L76 12 Z" fill="#087d79"/>',
          '<path d="M-12 -39 Q16 -72 44 -38" fill="#41b8a0"/>',
          '<path d="M-8 39 Q18 72 46 35" fill="#087d79" opacity=".85"/>',
          '<circle cx="-48" cy="-8" r="10" fill="#fff"/><circle cx="-48" cy="-8" r="4" fill="#14384b"/>',
          '<path d="M-69 12 Q-54 24 -38 13" fill="none" stroke="#075b66" stroke-width="4" stroke-linecap="round"/>',
        '</g>',
        '<g class="scene-creature creature-two" transform="translate(245 380) scale(.72)">',
          '<ellipse cx="0" cy="0" rx="88" ry="43" fill="url(#fishBlue)"/>',
          '<path d="M76 -8 L132 -48 L121 2 L134 46 L76 12 Z" fill="#086b9d"/>',
          '<path d="M-5 -39 Q18 -72 48 -35" fill="#45b8df"/>',
          '<circle cx="-48" cy="-8" r="10" fill="#fff"/><circle cx="-48" cy="-8" r="4" fill="#14384b"/>',
        '</g>',
        '<g class="scene-creature creature-three" transform="translate(590 430) scale(.58)">',
          '<ellipse cx="0" cy="0" rx="88" ry="43" fill="url(#fishGold)"/>',
          '<path d="M76 -8 L132 -48 L121 2 L134 46 L76 12 Z" fill="#e88e14"/>',
          '<path d="M-5 -39 Q18 -72 48 -35" fill="#ffc83f"/>',
          '<circle cx="-48" cy="-8" r="10" fill="#fff"/><circle cx="-48" cy="-8" r="4" fill="#14384b"/>',
        '</g>',
        '<g class="sea-plants" fill="none" stroke-linecap="round">',
          '<path d="M55 620 C28 548 86 520 58 442 C38 388 72 354 78 315" stroke="#0b7c63" stroke-width="22"/>',
          '<path d="M110 620 C148 545 90 510 128 438 C151 394 122 352 136 320" stroke="#21a97d" stroke-width="18"/>',
          '<path d="M735 620 C770 555 712 517 742 452 C764 406 730 370 748 325" stroke="#0b7c63" stroke-width="23"/>',
          '<path d="M680 620 C645 548 704 500 672 430 C653 389 684 356 670 320" stroke="#2bbd88" stroke-width="17"/>',
        '</g>',
        '<g fill="#e7c97c" opacity=".9"><circle cx="175" cy="560" r="8"/><circle cx="205" cy="584" r="5"/><circle cx="626" cy="565" r="7"/><circle cx="655" cy="592" r="5"/></g>',
      '</svg>'
    ].join('');
  }

  function setMeta(text, currentLang) {
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-Hant';
    document.title = currentLang === 'en' ? 'FishFull | Catch QR, AR fish view, seafood spots' : 'FishFull 漁有料｜魚貨履歷、AR 看魚、附近買魚';
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', text.intro);
  }

  function render() {
    var root = document.getElementById('root');
    if (!root) return;
    var currentLang = lang();
    var text = copy[currentLang] || copy.zh;
    setMeta(text, currentLang);
    root.innerHTML = [
      '<div class="page-home">',
        '<header class="site-nav" aria-label="Main navigation">',
          '<a class="brand-mark" href="/" aria-label="' + escapeHtml(text.brand) + '">',
            '<span class="fishfull-logo-mark home-brand-logo"><img src="/fishfull.jpg" width="44" height="44" loading="eager" decoding="async" alt="' + escapeHtml(logoAlt(currentLang)) + '"></span>',
            '<span class="brand-text"><span class="brand-kicker">' + escapeHtml(text.kicker) + '</span><strong>' + escapeHtml(text.brand) + '</strong></span>',
          '</a>',
          '<nav class="nav-links" aria-label="Homepage links">' + navTemplate(text.nav) + '</nav>',
        '</header>',
        '<main class="home-hero">',
          '<section class="hero-copy" aria-labelledby="home-title">',
            '<p class="eyebrow">' + escapeHtml(text.eyebrow) + '</p>',
            '<h1 id="home-title">' + escapeHtml(text.headline) + '</h1>',
            '<p class="hero-intro">' + escapeHtml(text.intro) + '</p>',
            '<div class="no-spin-note">' + escapeHtml(text.noSpin) + '</div>',
            qrDemoTemplate(text),
            '<div class="hero-stats" aria-label="FishFull highlights">' + statsTemplate(text.stats) + '</div>',
          '</section>',
          '<section class="coast-panel" aria-label="' + escapeHtml(text.visualTitle) + '">',
            oceanSceneTemplate(),
            '<div class="coast-card"><h2>' + escapeHtml(text.visualTitle) + '</h2><p>' + escapeHtml(text.visualText) + '</p><div class="coast-tags">' + tagsTemplate(text.visualTags) + '</div></div>',
          '</section>',
          '<section class="route-panel" aria-labelledby="route-title">',
            '<div class="route-heading"><p class="eyebrow">' + escapeHtml(text.routeEyebrow) + '</p><h2 id="route-title">' + escapeHtml(text.actionTitle) + '</h2><p>' + escapeHtml(text.actionHint) + '</p></div>',
            '<div class="route-grid">' + actionsTemplate(text.actions) + '</div>',
          '</section>',
        '</main>',
      '</div>'
    ].join('');
  }

  function bindRoutes() {
    document.addEventListener('click', function (event) {
      var target = event.target.closest('[data-href]');
      if (!target) return;
      window.location.href = target.getAttribute('data-href');
    });
    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      var target = event.target.closest('.route-card[data-href]');
      if (!target) return;
      event.preventDefault();
      window.location.href = target.getAttribute('data-href');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    render();
    bindRoutes();
  });
  document.addEventListener('scm-language-change', render);
})();
