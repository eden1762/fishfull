(function () {
  'use strict';

  var copy = {
    zh: {
      brand: 'FishFull 漁有料',
      kicker: 'SUSTAINABLE CATCH MAP',
      nav: [
        { label: '我們的理念', href: '/pages/about.html' },
        { label: '友善海鮮地圖', href: '/pages/map.html' },
        { label: 'AR 永續任務', href: '/pages/sustainability.html' }
      ],
      eyebrow: '一掃即知・低碳漁法・採購行為驗證',
      headline: '讓每一次買魚，都成為守護海洋的選擇',
      intro: 'FishFull 漁有料把永續評級、低碳漁法、零失敗食譜與遊戲化任務整合成免下載網頁工具；消費者掃 QR Code 就能看懂魚種、知道怎麼煮，店家也能用採購前後數據證明永續海鮮真的被買單。',
      noSpin: '評審回饋已納入：不只看瀏覽量，也追蹤永續魚種銷售量、食譜到採購轉換與回訪行為。',
      visualTitle: '海鮮市場也能順暢展示的靜態首頁',
      visualText: '取消 720° 旋轉與沉重模型，以海洋、沙灘、陽光的 2D 視覺建立輕鬆入口；在市場弱網路、校園倡議與成果展攤位中，都能快速讀取、清楚點選。',
      visualTags: ['免下載', '弱網路友善', '純 HTML/CSS/JS'],
      actionTitle: '從理解，到購買，再回到數據驗證',
      actionHint: '三個入口皆為純 input[type=button]，避免重複網頁程式，讓維護者只看得到單一來源。',
      actions: [
        {
          tone: 'blue',
          href: '/pages/about.html',
          number: '01',
          title: '我們的理念',
          subtitle: '以低碳漁法為核心，串起居民、攤商與推廣者',
          badge: '策略與誘因',
          description: '回應委員 C：把「不會挑、不會煮」轉化為購買低碳漁法魚種的入口，讓消費者需求、攤商銷售與倡議推廣形成同一套行動迴圈。'
        },
        {
          tone: 'orange',
          href: '/pages/map.html',
          number: '02',
          title: '友善海鮮地圖',
          subtitle: '把 QR Code、通路與在地故事帶到採購現場',
          badge: '場域導入',
          description: '回應委員 D：以新北社區、校園與合作通路為落地場景，呈現可簽署 MOU、訪談紀錄、場勘照片與實際導入的準備度。'
        },
        {
          tone: 'pink',
          href: '/pages/sustainability.html',
          number: '03',
          title: 'AR 永續任務',
          subtitle: '用遊戲化徽章，讓永續標籤變成願意分享的行動',
          badge: '遊戲任務',
          description: '把紅黃綠燈評級、產地足跡與料理任務做成可互動、可拍照、可回饋的體驗，增加停留時間，也把學習導向實際採購。'
        }
      ],
      stats: [
        { value: '3秒', label: '看懂永續評級' },
        { value: '0APP', label: '掃碼即用' },
        { value: '前後測', label: '驗證採購改變' }
      ]
    },
    en: {
      brand: 'FishFull',
      kicker: 'SUSTAINABLE CATCH MAP',
      nav: [
        { label: 'Our Philosophy', href: '/pages/about.html' },
        { label: 'Friendly Seafood Map', href: '/pages/map.html' },
        { label: 'AR Missions', href: '/pages/sustainability.html' }
      ],
      eyebrow: 'Scan-to-know · Low-carbon fishing · Purchase verification',
      headline: 'Turn every seafood purchase into a choice for the ocean',
      intro: 'FishFull combines sustainability ratings, low-carbon fishing information, foolproof recipes, and gamified missions into a no-download web tool. Shoppers can scan a QR Code, understand what to buy and how to cook it, while partners can verify whether sustainable seafood sales actually increase.',
      noSpin: 'Committee feedback included: beyond views and scans, we track sustainable fish sales, recipe-to-purchase conversion, and repeat visits.',
      visualTitle: 'A static homepage that works in real seafood markets',
      visualText: 'The 720° rotation and heavy models are removed. A 2D ocean, beach, and sunshine interface keeps the site fast, readable, and easy to tap in weak-network markets, schools, and exhibition booths.',
      visualTags: ['No download', 'Weak-network friendly', 'Pure HTML/CSS/JS'],
      actionTitle: 'From learning to buying to measurable impact',
      actionHint: 'All three entries are pure input[type=button] controls, with single-source page code for easier maintenance.',
      actions: [
        {
          tone: 'blue',
          href: '/pages/about.html',
          number: '01',
          title: 'Our Philosophy',
          subtitle: 'A low-carbon fishing strategy connecting residents, vendors, and advocates',
          badge: 'Strategy loop',
          description: 'The site turns “I cannot choose or cook fish” into a gateway for choosing low-carbon seafood, connecting consumer needs, vendor sales, and advocacy into one action loop.'
        },
        {
          tone: 'orange',
          href: '/pages/map.html',
          number: '02',
          title: 'Friendly Seafood Map',
          subtitle: 'Bring QR Codes, channels, and local stories into the purchase scene',
          badge: 'Field pilot',
          description: 'The map frames New Taipei communities, campuses, and partner stores as pilot sites, with MOU evidence, interviews, field photos, and on-site implementation readiness.'
        },
        {
          tone: 'pink',
          href: '/pages/sustainability.html',
          number: '03',
          title: 'AR Missions',
          subtitle: 'Turn sustainability labels into interactive, shareable actions',
          badge: 'Game tasks',
          description: 'Traffic-light ratings, origin footprints, and cooking tasks become interactive missions that increase engagement and guide learning toward real purchases.'
        }
      ],
      stats: [
        { value: '3 sec', label: 'Understand rating' },
        { value: '0 app', label: 'Scan to use' },
        { value: 'Before/after', label: 'Verify purchase change' }
      ]
    }
  };

  function lang() {
    return window.SCMLanguage ? window.SCMLanguage.current() : (localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh');
  }

  function escapeHtml(value) {
    return window.SCMLanguage ? window.SCMLanguage.escapeHtml(value) : String(value);
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

  function setMeta(text, currentLang) {
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-Hant';
    document.title = currentLang === 'en'
      ? 'FishFull | Scan-to-know sustainable seafood action'
      : 'FishFull 漁有料｜一掃即知的永續海鮮行動';
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', text.intro);
  }

  function render() {
    var root = document.getElementById('root');
    if (!root) return;

    var currentLang = lang();
    var text = copy[currentLang];
    setMeta(text, currentLang);

    root.innerHTML = [
      '<div class="page-home">',
        '<header class="site-nav" aria-label="Main navigation">',
          '<a class="brand-mark" href="/" aria-label="' + escapeHtml(text.brand) + '">',
            '<span class="brand-sun" aria-hidden="true"></span>',
            '<span class="brand-text">',
              '<span class="brand-kicker">' + escapeHtml(text.kicker) + '</span>',
              '<strong>' + escapeHtml(text.brand) + '</strong>',
            '</span>',
          '</a>',
          '<nav class="nav-links" aria-label="Homepage links">' + navTemplate(text.nav) + '</nav>',
        '</header>',
        '<main class="home-hero">',
          '<section class="hero-copy" aria-labelledby="home-title">',
            '<p class="eyebrow">' + escapeHtml(text.eyebrow) + '</p>',
            '<h1 id="home-title">' + escapeHtml(text.headline) + '</h1>',
            '<p class="hero-intro">' + escapeHtml(text.intro) + '</p>',
            '<div class="no-spin-note">' + escapeHtml(text.noSpin) + '</div>',
            '<div class="hero-stats" aria-label="FishFull metrics">' + statsTemplate(text.stats) + '</div>',
          '</section>',
          '<section class="coast-panel" aria-label="Static coastal design summary">',
            '<div class="coast-sky" aria-hidden="true">',
              '<span class="static-sun"></span>',
              '<span class="cloud cloud-one"></span>',
              '<span class="cloud cloud-two"></span>',
            '</div>',
            '<div class="coast-water" aria-hidden="true"></div>',
            '<div class="coast-sand" aria-hidden="true"></div>',
            '<div class="coast-card">',
              '<h2>' + escapeHtml(text.visualTitle) + '</h2>',
              '<p>' + escapeHtml(text.visualText) + '</p>',
              '<div class="coast-tags">' + tagsTemplate(text.visualTags) + '</div>',
            '</div>',
          '</section>',
          '<section class="route-panel" aria-labelledby="route-title">',
            '<div class="route-heading">',
              '<p class="eyebrow">SELECT ROUTE</p>',
              '<h2 id="route-title">' + escapeHtml(text.actionTitle) + '</h2>',
              '<p>' + escapeHtml(text.actionHint) + '</p>',
            '</div>',
            '<div class="route-grid">' + actionsTemplate(text.actions) + '</div>',
          '</section>',
        '</main>',
      '</div>'
    ].join('');
  }

  function goTo(href) {
    if (href) window.location.href = href;
  }

  document.addEventListener('click', function (event) {
    var input = event.target.closest && event.target.closest('input[type="button"][data-href]');
    if (input) {
      goTo(input.getAttribute('data-href'));
      return;
    }

    var card = event.target.closest && event.target.closest('.route-card[data-href]');
    if (card) goTo(card.getAttribute('data-href'));
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    var card = event.target.closest && event.target.closest('.route-card[data-href]');
    if (!card || event.target.matches('input, button, a')) return;
    event.preventDefault();
    goTo(card.getAttribute('data-href'));
  });

  document.addEventListener('scm-language-change', render);
  render();
})();
