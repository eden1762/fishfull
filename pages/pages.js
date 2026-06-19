(function () {
  'use strict';

  var pages = {
    about: {
      zh: {
        title: '我們的理念',
        metaTitle: 'FishFull 漁有料｜我們的理念',
        description: 'FishFull 漁有料以低碳漁法為核心，串起居民、攤商、餐飲與推廣者，讓永續海鮮從資訊導覽走向可驗證的採購行動。',
        eyebrow: 'LOW-CARBON SEAFOOD ACTION',
        headline: '不是叫大家「多看資訊」，而是讓低碳漁法真的被選擇',
        lead: 'FishFull 漁有料把居民的料理門檻、攤商的推廣困境、推廣者的教育任務串成同一個採購迴圈：掃碼看懂、安心購買、照著食譜煮、回饋數據，最後用前後比較證明永續消費行為是否改變。',
        badges: ['低碳漁法核心', '三方誘因系統', '採購前後測'],
        sections: [
          {
            kind: 'cards',
            eyebrow: 'COMMITTEE C RESPONSE',
            title: '三種受眾不再各做各的，而是同一條行動鏈',
            body: '以推動低碳漁法為主軸，將居民、友善攤商／餐飲、推廣者設計成彼此有誘因的互動模式。',
            cards: [
              { icon: '👥', title: '居民與自煮族', body: '痛點是「不會挑、不會煮」。網站提供紅黃綠燈評級、當季魚種、零失敗食譜，降低第一次購買低碳魚種的心理成本。' },
              { icon: '🧊', title: '友善魚攤與綠色餐飲', body: '痛點是「生態價值難以被看見」。QR Code 牌卡把漁法、產地、料理建議放到冷藏櫃旁，讓店家能把專業說清楚。' },
              { icon: '📣', title: '推廣者與校園社區', body: '痛點是「倡議難轉為行動」。遊戲化任務與採購回饋表單，讓活動成效不只停在宣傳，而能回收行為數據。' }
            ]
          },
          {
            kind: 'flow',
            eyebrow: 'ACTION LOOP',
            title: 'FishFull 採購轉換模型',
            body: '把「料理教學」直接連到「買低碳漁法魚種」：食譜不是獨立內容，而是降低購買阻力的轉換工具。',
            steps: [
              { label: '掃', title: '魚攤 QR Code', body: '合作通路冷藏櫃旁放置牌卡。' },
              { label: '懂', title: '3秒永續評級', body: '當季、漁法、產地、建議料理一頁看完。' },
              { label: '買', title: '選擇友善魚種', body: '將「知道」轉成實際購買。' },
              { label: '煮', title: '零失敗食譜', body: '降低回家處理魚的失敗焦慮。' },
              { label: '證', title: '前後行為追蹤', body: '比較導入前後的銷售量、回訪與回饋。' }
            ]
          },
          {
            kind: 'metrics',
            eyebrow: 'COMMITTEE A RESPONSE',
            title: '成效驗證：從瀏覽量升級為採購行為改變',
            body: '除了 QR Code 掃描與頁面停留，新增能讓評審信服的前後比較指標。',
            metrics: [
              { value: '導入前後', label: '合作通路永續魚種銷售量差異' },
              { value: '食譜→購買', label: '食譜點擊後的購買回饋與再訪率' },
              { value: '店家紀錄', label: '友善魚種銷售品項、數量與詢問次數' },
              { value: '行動回饋', label: '消費者是否從價格盲選改成看漁法與季節' }
            ]
          },
          {
            kind: 'timeline',
            eyebrow: 'COMMITTEE B・D RESPONSE',
            title: '11 月前完成首波實踐：每月都留下可查核佐證',
            body: '把原本 6–11 月計畫拆成評審看得懂的落地證據，避免只寫願景。',
            rows: [
              { month: '06月', title: '資料庫與魚種選題', body: '建立評級、季節、漁法、食譜欄位；整理授權申請與資料來源紀錄。' },
              { month: '07月', title: 'MOU 與示範場域確認', body: '準備合作意向書、店家訪談紀錄、場域照片與 QR Code 牌卡版型。' },
              { month: '08月', title: '新北社區／校園小測', body: '帶工具到現場測試，記錄使用者卡點、詢問問題與採購意願。' },
              { month: '09月', title: '正式導入合作通路', body: '店家說明、牌卡上架、社群導流與第一輪銷售資料紀錄。' },
              { month: '10月', title: '消費行為追蹤', body: '追蹤永續魚種銷售、食譜點擊、回訪率與消費者回饋。' },
              { month: '11月', title: '實驗報告與成果展', body: '輸出前後比較、個案故事、可複製導入模組與下一階段合作名單。' }
            ]
          }
        ]
      },
      en: {
        title: 'Our Philosophy',
        metaTitle: 'FishFull | Our Philosophy',
        description: 'FishFull connects residents, seafood vendors, restaurants, and advocates around low-carbon fishing, turning information into measurable purchase action.',
        eyebrow: 'LOW-CARBON SEAFOOD ACTION',
        headline: 'Not more information, but low-carbon seafood that people actually choose',
        lead: 'FishFull connects the cooking barrier, vendor promotion challenge, and advocacy mission into one purchase loop: scan, understand, buy, cook, and verify behavioral change with before-and-after data.',
        badges: ['Low-carbon core', 'Stakeholder incentives', 'Before/after measurement'],
        sections: [
          { kind: 'cards', eyebrow: 'STAKEHOLDER LOOP', title: 'Three audiences, one connected action chain', body: 'Residents, vendors, restaurants, and advocates are designed as mutually reinforcing participants.', cards: [
            { icon: '👥', title: 'Residents and home cooks', body: 'Traffic-light ratings, seasonal fish, and foolproof recipes reduce the barrier to buying low-carbon seafood.' },
            { icon: '🧊', title: 'Friendly vendors and green restaurants', body: 'QR Code cards beside seafood displays help partners explain fishing methods, origin, and ecological value.' },
            { icon: '📣', title: 'Advocates and campuses', body: 'Missions and feedback forms turn campaigns into measurable purchase behavior, not just awareness.' }
          ]},
          { kind: 'flow', eyebrow: 'ACTION LOOP', title: 'FishFull purchase conversion model', body: 'Recipes are not separate content; they are conversion tools that reduce purchase anxiety.', steps: [
            { label: 'Scan', title: 'QR Code at the stall', body: 'Cards are placed at partner channels.' },
            { label: 'Know', title: '3-second rating', body: 'Season, method, origin, and cooking ideas in one view.' },
            { label: 'Buy', title: 'Choose friendly seafood', body: 'Turn awareness into a purchase.' },
            { label: 'Cook', title: 'Foolproof recipe', body: 'Reduce the fear of cooking fish.' },
            { label: 'Verify', title: 'Track behavior', body: 'Compare sales, revisits, and feedback before and after launch.' }
          ]},
          { kind: 'metrics', eyebrow: 'MEASUREMENT', title: 'From page views to real purchase change', body: 'The site adds evidence that can convince judges and partners.', metrics: [
            { value: 'Before/after', label: 'Sustainable fish sales at partner channels' },
            { value: 'Recipe → buy', label: 'Recipe clicks, purchase feedback, and revisit rate' },
            { value: 'Vendor logs', label: 'Friendly species sold, quantity, and customer questions' },
            { value: 'Action feedback', label: 'Whether shoppers moved beyond price-only choice' }
          ]},
          { kind: 'timeline', eyebrow: 'ROADMAP', title: 'Evidence-ready implementation before November', body: 'Each month leaves field evidence, not just a plan.', rows: [
            { month: 'Jun', title: 'Database and species scope', body: 'Set rating, season, fishing method, recipe fields, and source records.' },
            { month: 'Jul', title: 'MOU and pilot sites', body: 'Prepare letters, interview notes, field photos, and QR card design.' },
            { month: 'Aug', title: 'New Taipei community / campus test', body: 'Test on site and record user barriers and purchase intent.' },
            { month: 'Sep', title: 'Channel launch', body: 'Partner onboarding, card placement, social traffic, and first sales records.' },
            { month: 'Oct', title: 'Behavior tracking', body: 'Track sustainable fish sales, recipe clicks, revisits, and feedback.' },
            { month: 'Nov', title: 'Report and showcase', body: 'Deliver before/after analysis, case stories, and the replicable model.' }
          ]}
        ]
      }
    },
    map: {
      zh: {
        title: '友善海鮮地圖',
        metaTitle: 'FishFull 漁有料｜友善海鮮地圖',
        description: '用友善海鮮地圖呈現合作通路、示範場域、低碳漁法與採購任務，把 QR Code 帶進真實魚攤、餐廳、社區與校園。',
        eyebrow: 'FIELD PILOT MAP',
        headline: '把永續海鮮放到使用者真的會購買的地方',
        lead: '地圖不只是找店，而是把魚攤、餐廳、社區、校園與倡議活動串成一條可追蹤的採購路徑。每個點位都能放上 QR Code 牌卡、推薦低碳漁法魚種、食譜任務與銷售前後測。',
        badges: ['合作通路', '場勘佐證', '銷售追蹤'],
        filters: ['全部', '市場', '餐廳', '社區', '校園'],
        locations: [
          { id: 1, type: '市場', name: '板橋友善漁獲市場', area: '新北市板橋區', species: '鬼頭刀、白帶魚、鯖魚', tag: '低碳漁法示範點', note: '適合放置 QR Code 牌卡與採購前後測表單。', x: 58, y: 58 },
          { id: 2, type: '餐廳', name: '叩米友善餐桌', area: '台北都會示範通路', species: '當季魚種料理、零失敗食譜', tag: '料理轉換示範', note: '把「不知道怎麼煮」變成願意下單的餐桌故事。', x: 72, y: 36 },
          { id: 3, type: '市場', name: '八斗子友善魚攤', area: '基隆八斗子', species: '在地當季漁獲、定置網魚種', tag: '漁法與產地故事', note: '以漁人訪談與現地照片補強落地可信度。', x: 83, y: 24 },
          { id: 4, type: '社區', name: '新北社區食魚小行動', area: '新北市在地社區', species: '家常料理任務', tag: '小型倡議活動', note: '可蒐集家庭料理回饋、購買意願與再訪率。', x: 48, y: 44 },
          { id: 5, type: '校園', name: '校園永續海鮮任務站', area: '新北校園／青年活動', species: '標籤解謎、徽章任務', tag: '遊戲化教育', note: '用遊戲任務把永續標籤從知識變成分享。', x: 38, y: 28 }
        ],
        playbook: {
          eyebrow: 'MARKETING FUNNEL',
          title: '採購現場的行銷設計',
          body: '每個合作點位都用同一套「看見價值 → 降低門檻 → 形成購買 → 回收數據」流程。',
          cards: [
            { icon: '🏷️', title: '冷藏櫃旁 QR Code', body: '讓資訊出現在購買當下，而不是活動結束後才想起來。' },
            { icon: '🟢', title: '紅黃綠燈採購提示', body: '用最直覺的符號降低判斷成本，讓低碳漁法更容易被選。' },
            { icon: '🍳', title: '食譜任務與店家推薦', body: '把料理焦慮轉成「今天就能煮」的購買理由。' },
            { icon: '📊', title: '店家與消費者回饋', body: '收集銷售量、詢問次數、回訪與心得，做出可驗證成效。' }
          ]
        }
      },
      en: {
        title: 'Friendly Seafood Map',
        metaTitle: 'FishFull | Friendly Seafood Map',
        description: 'The map connects partner channels, pilot sites, low-carbon fishing information, and purchase missions across markets, restaurants, communities, and campuses.',
        eyebrow: 'FIELD PILOT MAP',
        headline: 'Put sustainable seafood where people actually buy seafood',
        lead: 'The map is more than a store finder. It connects stalls, restaurants, communities, campuses, and campaigns into a measurable purchase pathway with QR cards, low-carbon recommendations, recipe missions, and before/after sales tracking.',
        badges: ['Partner channels', 'Field evidence', 'Sales tracking'],
        filters: ['All', 'Market', 'Restaurant', 'Community', 'Campus'],
        locations: [
          { id: 1, type: 'Market', name: 'Banqiao Friendly Seafood Market', area: 'Banqiao, New Taipei', species: 'Mahi-mahi, cutlassfish, mackerel', tag: 'Low-carbon pilot', note: 'QR cards and before/after purchase forms can be placed here.', x: 58, y: 58 },
          { id: 2, type: 'Restaurant', name: 'Friendly Seafood Table', area: 'Taipei demo channel', species: 'Seasonal dishes and recipes', tag: 'Cooking conversion', note: 'Turns “I cannot cook fish” into a story that supports ordering.', x: 72, y: 36 },
          { id: 3, type: 'Market', name: 'Badouzi Friendly Fish Stall', area: 'Badouzi, Keelung', species: 'Local seasonal catch and set-net fish', tag: 'Fishing method story', note: 'Interviews and field photos strengthen implementation credibility.', x: 83, y: 24 },
          { id: 4, type: 'Community', name: 'New Taipei Community Fish Action', area: 'Local community site', species: 'Home cooking missions', tag: 'Small advocacy action', note: 'Collect cooking feedback, purchase intent, and revisit data.', x: 48, y: 44 },
          { id: 5, type: 'Campus', name: 'Campus Seafood Mission Station', area: 'New Taipei campus / youth event', species: 'Label puzzles and badges', tag: 'Gamified education', note: 'Turns sustainability labels into shareable learning missions.', x: 38, y: 28 }
        ],
        playbook: {
          eyebrow: 'MARKETING FUNNEL',
          title: 'Marketing design at the purchase scene',
          body: 'Each pilot point follows the same flow: show value, lower barriers, create purchases, and collect evidence.',
          cards: [
            { icon: '🏷️', title: 'QR Code by the display', body: 'Information appears at the moment of purchase, not after the campaign ends.' },
            { icon: '🟢', title: 'Traffic-light guidance', body: 'Simple symbols reduce decision cost and make low-carbon seafood easier to choose.' },
            { icon: '🍳', title: 'Recipe missions', body: 'Cooking anxiety becomes a reason to buy today.' },
            { icon: '📊', title: 'Feedback and sales logs', body: 'Sales, questions, revisits, and comments become measurable impact evidence.' }
          ]
        }
      }
    },
    sustainability: {
      zh: {
        title: 'AR 永續任務',
        metaTitle: 'FishFull 漁有料｜AR 永續任務',
        description: '透過 AR 永續任務、徽章與拍照分享，把紅黃綠燈評級、漁法資訊、產地足跡與零失敗食譜轉化為可參與的遊戲化學習。',
        eyebrow: 'GAMEFUL SUSTAINABILITY LABELS',
        headline: '把永續標籤變成一場可以完成、可以分享、可以導向購買的任務',
        lead: '遊戲化不是為了炫技，而是為了讓使用者在魚攤前願意停下來：掃描標籤、解鎖漁法故事、取得食譜任務、拍照分享，最後回到合作通路完成友善採購。',
        badges: ['徽章任務', '拍照分享', '採購回饋'],
        labels: [
          { title: '資源狀態', body: '用紅黃綠燈提示當季與資源狀況，幫助使用者 3 秒內判斷是否適合購買。' },
          { title: '漁法資訊', body: '標示定置網、延繩釣、養殖等方式，讓低碳漁法與友善捕撈的差異看得懂。' },
          { title: '產地與足跡', body: '呈現產地、運輸距離與在地採購指標，把生態價值連回真實通路與漁人故事。' }
        ],
        missions: {
          eyebrow: 'PLAYER JOURNEY',
          title: '四步驟任務設計：讓永續資訊有下一步',
          body: '每一步都設計成可點擊、可回饋、可被店家記錄的行動。',
          cards: [
            { icon: '🔍', title: '掃描解鎖', body: '掃描 QR Code 後看到今日推薦魚種與永續評級。' },
            { icon: '🎖️', title: '完成徽章', body: '回答漁法與產地小問題，取得「低碳漁法徽章」。' },
            { icon: '🍽️', title: '帶走食譜', body: '選擇清蒸、乾煎、味噌湯等零失敗料理任務。' },
            { icon: '🧾', title: '回饋採購', body: '完成購買或料理後回填心得，成為成效驗證資料。' }
          ]
        },
        arHint: '點選左側三張標籤卡，可切換右側互動物件；開啟 AR 後可使用相機畫面，未開啟時也能在網頁內展示。'
      },
      en: {
        title: 'AR Missions',
        metaTitle: 'FishFull | AR Missions',
        description: 'AR missions, badges, and photo sharing turn ratings, fishing methods, origin footprints, and recipes into participatory learning.',
        eyebrow: 'GAMEFUL SUSTAINABILITY LABELS',
        headline: 'Turn sustainability labels into missions that users can complete, share, and bring back to purchase',
        lead: 'Gamification is not decoration. It gives shoppers a reason to stop at the seafood stall: scan a label, unlock the fishing story, take a recipe mission, share a photo, and return to a partner channel to purchase.',
        badges: ['Badge missions', 'Photo sharing', 'Purchase feedback'],
        labels: [
          { title: 'Resource Status', body: 'Traffic-light cues help users judge seasonality and resource status in three seconds.' },
          { title: 'Fishing Method', body: 'Shows set nets, longline fishing, aquaculture, and the difference between low-carbon and conventional choices.' },
          { title: 'Origin and Footprint', body: 'Connects origin, transport distance, local sourcing, and fisher stories back to real channels.' }
        ],
        missions: {
          eyebrow: 'PLAYER JOURNEY',
          title: 'Four mission steps: give sustainability information a next action',
          body: 'Every step is clickable, recordable, and useful for partners.',
          cards: [
            { icon: '🔍', title: 'Scan to unlock', body: 'See today’s recommended species and sustainability rating.' },
            { icon: '🎖️', title: 'Earn a badge', body: 'Answer a fishing-method or origin question to earn a low-carbon badge.' },
            { icon: '🍽️', title: 'Take a recipe', body: 'Choose steaming, pan-frying, miso soup, or another foolproof task.' },
            { icon: '🧾', title: 'Submit feedback', body: 'Purchase and cooking feedback becomes impact evidence.' }
          ]
        },
        arHint: 'Tap the three label cards to switch the interactive object on the right. Turn on AR to use the camera, or keep it off for an in-page demo.'
      }
    }
  };

  function lang() {
    return window.SCMLanguage ? window.SCMLanguage.current() : (localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh');
  }

  function esc(value) {
    return window.SCMLanguage ? window.SCMLanguage.escapeHtml(value) : String(value);
  }

  function pageKey() {
    return document.body.dataset.page || 'about';
  }

  function nav(currentKey, data) {
    var currentLang = lang();
    var labels = currentLang === 'en'
      ? { home: 'Home', about: 'Our Philosophy', map: 'Map', sustainability: 'AR Missions', instagram: 'Instagram' }
      : { home: '首頁', about: '我們的理念', map: '友善海鮮地圖', sustainability: 'AR 永續任務', instagram: 'Instagram' };
    var links = [
      { key: 'about', label: labels.about, href: '/pages/about.html' },
      { key: 'map', label: labels.map, href: '/pages/map.html' },
      { key: 'sustainability', label: labels.sustainability, href: '/pages/sustainability.html' }
    ];
    return [
      '<header class="topbar">',
        '<a class="brand" href="/">',
          '<span class="brand-symbol" aria-hidden="true">◐</span>',
          '<span><small>SUSTAINABLE CATCH MAP</small><strong>FishFull 漁有料</strong></span>',
        '</a>',
        '<nav class="topnav" aria-label="' + esc(currentLang === 'en' ? 'Main navigation' : '主選單') + '">',
          '<a href="/">' + esc(labels.home) + '</a>',
          links.map(function (item) {
            return '<a href="' + esc(item.href) + '"' + (item.key === currentKey ? ' aria-current="page"' : '') + '>' + esc(item.label) + '</a>';
          }).join(''),
        '</nav>',
        '<div class="nav-actions">',
          '<a class="circle-link" href="https://www.instagram.com/fishfull_2025/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>',
          '<button class="circle-link language-toggle" type="button"><span data-lang-icon>' + (currentLang === 'en' ? '中文' : 'EN') + '</span></button>',
        '</div>',
      '</header>'
    ].join('');
  }

  function hero(data) {
    return [
      '<section class="page-hero">',
        '<div class="hero-text">',
          '<p class="eyebrow">' + esc(data.eyebrow) + '</p>',
          '<h1>' + esc(data.headline) + '</h1>',
          '<p>' + esc(data.lead) + '</p>',
          '<div class="badge-row">' + data.badges.map(function (badge) { return '<span>' + esc(badge) + '</span>'; }).join('') + '</div>',
        '</div>',
        '<div class="hero-card" aria-hidden="true">',
          '<span class="sun-dot"></span>',
          '<strong>' + esc(data.title) + '</strong>',
          '<em>FishFull</em>',
          '<div class="wave-lines"><i></i><i></i><i></i></div>',
        '</div>',
      '</section>'
    ].join('');
  }

  function cardSection(section) {
    return [
      '<section class="content-section">',
        '<div class="section-heading">',
          '<p class="eyebrow">' + esc(section.eyebrow) + '</p>',
          '<h2>' + esc(section.title) + '</h2>',
          '<p>' + esc(section.body) + '</p>',
        '</div>',
        '<div class="info-grid">',
          section.cards.map(function (card) {
            return '<article class="info-card"><span class="card-icon" aria-hidden="true">' + esc(card.icon) + '</span><h3>' + esc(card.title) + '</h3><p>' + esc(card.body) + '</p></article>';
          }).join(''),
        '</div>',
      '</section>'
    ].join('');
  }

  function flowSection(section) {
    return [
      '<section class="content-section flow-section">',
        '<div class="section-heading">',
          '<p class="eyebrow">' + esc(section.eyebrow) + '</p>',
          '<h2>' + esc(section.title) + '</h2>',
          '<p>' + esc(section.body) + '</p>',
        '</div>',
        '<div class="flow-line">',
          section.steps.map(function (step) {
            return '<article class="flow-step"><span>' + esc(step.label) + '</span><h3>' + esc(step.title) + '</h3><p>' + esc(step.body) + '</p></article>';
          }).join(''),
        '</div>',
      '</section>'
    ].join('');
  }

  function metricsSection(section) {
    return [
      '<section class="content-section metrics-section">',
        '<div class="section-heading">',
          '<p class="eyebrow">' + esc(section.eyebrow) + '</p>',
          '<h2>' + esc(section.title) + '</h2>',
          '<p>' + esc(section.body) + '</p>',
        '</div>',
        '<div class="metric-grid">',
          section.metrics.map(function (metric) {
            return '<article class="metric-card"><strong>' + esc(metric.value) + '</strong><span>' + esc(metric.label) + '</span></article>';
          }).join(''),
        '</div>',
      '</section>'
    ].join('');
  }

  function timelineSection(section) {
    return [
      '<section class="content-section timeline-section">',
        '<div class="section-heading">',
          '<p class="eyebrow">' + esc(section.eyebrow) + '</p>',
          '<h2>' + esc(section.title) + '</h2>',
          '<p>' + esc(section.body) + '</p>',
        '</div>',
        '<div class="timeline-list">',
          section.rows.map(function (row) {
            return '<article class="timeline-row"><time>' + esc(row.month) + '</time><div><h3>' + esc(row.title) + '</h3><p>' + esc(row.body) + '</p></div></article>';
          }).join(''),
        '</div>',
      '</section>'
    ].join('');
  }

  function renderAbout(data) {
    return data.sections.map(function (section) {
      if (section.kind === 'cards') return cardSection(section);
      if (section.kind === 'flow') return flowSection(section);
      if (section.kind === 'metrics') return metricsSection(section);
      if (section.kind === 'timeline') return timelineSection(section);
      return '';
    }).join('');
  }

  function renderMap(data) {
    var active = sessionStorage.getItem('fishfull-map-filter') || data.filters[0];
    var allToken = data.filters[0];
    if (data.filters.indexOf(active) === -1) active = allToken;
    var visible = data.locations.filter(function (item) { return active === allToken || item.type === active; });
    return [
      '<section class="content-section map-section">',
        '<div class="section-heading">',
          '<p class="eyebrow">FIELD EVIDENCE</p>',
          '<h2>' + esc(lang() === 'en' ? 'Pilot locations and implementation evidence' : '示範點位與落地佐證') + '</h2>',
          '<p>' + esc(lang() === 'en' ? 'Filter pilot locations and see how each point supports purchase conversion and data tracking.' : '篩選示範點位，查看每個地點如何支援採購轉換與行為追蹤。') + '</p>',
        '</div>',
        '<div class="filter-row">',
          data.filters.map(function (filter) {
            return '<button type="button" class="filter-chip' + (filter === active ? ' is-active' : '') + '" data-filter="' + esc(filter) + '">' + esc(filter) + '</button>';
          }).join(''),
        '</div>',
        '<div class="map-layout">',
          '<div class="static-map" aria-label="' + esc(data.title) + '">',
            '<div class="map-coast"></div>',
            '<div class="map-land"></div>',
            visible.map(function (item) {
              return '<button type="button" class="map-pin" style="--x:' + item.x + '%;--y:' + item.y + '%" aria-label="' + esc(item.name) + '"><span>' + esc(item.id) + '</span></button>';
            }).join(''),
          '</div>',
          '<div class="location-list">',
            visible.map(function (item) {
              return '<article class="location-card"><div><strong>' + esc(item.name) + '</strong><span>' + esc(item.type) + '｜' + esc(item.area) + '</span></div><p>' + esc(item.species) + '</p><small>' + esc(item.tag) + '</small><em>' + esc(item.note) + '</em></article>';
            }).join(''),
          '</div>',
        '</div>',
      '</section>',
      cardSection(data.playbook)
    ].join('');
  }

  function renderSustainability(data) {
    return [
      '<section class="content-section sustainability-layout">',
        '<div class="sustainability-copy">',
          '<div class="section-heading">',
            '<p class="eyebrow">LABEL SYSTEM</p>',
            '<h2>' + esc(lang() === 'en' ? 'Interactive labels for decision, learning, and feedback' : '讓標籤同時負責判斷、學習與回饋') + '</h2>',
            '<p>' + esc(data.arHint) + '</p>',
          '</div>',
          '<div class="label-grid">',
            data.labels.map(function (item) {
              return '<article class="label-card"><h3>' + esc(item.title) + '</h3><p>' + esc(item.body) + '</p></article>';
            }).join(''),
          '</div>',
        '</div>',
        '<section class="model-stage" aria-label="AR demo"></section>',
      '</section>',
      cardSection(data.missions)
    ].join('');
  }

  function footer() {
    return [
      '<footer class="site-footer">',
        '<strong>FishFull 漁有料</strong>',
        '<span>' + esc(lang() === 'en' ? 'Scan to know. Buy to protect the ocean.' : '一掃即知，讓每一次買魚都成為守護海洋的選擇。') + '</span>',
      '</footer>'
    ].join('');
  }

  function setMeta(data) {
    document.documentElement.lang = lang() === 'en' ? 'en' : 'zh-Hant';
    document.title = data.metaTitle;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', data.description);
  }

  function render() {
    var key = pageKey();
    var data = pages[key][lang()] || pages[key].zh;
    var root = document.getElementById('root');
    if (!root) return;
    setMeta(data);
    var body = key === 'about' ? renderAbout(data) : key === 'map' ? renderMap(data) : renderSustainability(data);
    root.innerHTML = '<div class="page-shell page-' + esc(key) + '">' + nav(key, data) + '<main>' + hero(data) + body + '</main>' + footer() + '</div>';
  }

  document.addEventListener('click', function (event) {
    var filter = event.target.closest && event.target.closest('[data-filter]');
    if (!filter) return;
    sessionStorage.setItem('fishfull-map-filter', filter.dataset.filter);
    render();
  });

  document.addEventListener('scm-language-change', function () {
    sessionStorage.removeItem('fishfull-map-filter');
    render();
  });

  render();
})();
