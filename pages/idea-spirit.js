(function () {
  'use strict';

  var copy = {
    zh: {
      title: 'FishFull 漁有料｜理念與精神',
      desc: 'FishFull 漁有料理念與精神：把魚貨來源、當季魚種、選魚方法、料理建議與友善漁業故事，整理成消費者、魚販、漁業夥伴與年輕人都好懂、好用的海鮮選擇指南；並認識漁有料夥伴。',
      heroEyebrow: 'IDEA & SPIRIT',
      heroTitle: '讓每一條好魚，都更容易被看懂、被選擇、被好好吃完',
      heroLead: 'FishFull 漁有料把魚貨來源、季節、魚種特色、新鮮挑法、料理方向與產地故事，整理成魚攤前看得懂、手機上查得到、回家真的用得上的內容。消費者少一點選擇焦慮，魚販多一套好介紹的方法，漁業夥伴的用心也更容易被市場看見。',
      heroChips: ['買魚不靠猜', '魚販介紹更順手', '產地故事有感', '年輕人也秒懂'],
      artTitle: '從產地到餐桌，資訊一路接得上',
      artText: '我們不把永續變成考題，而是把它變成下一次買魚會用到的判斷、問法與料理靈感。',
      pulse: [['消費者', '敢問、敢買、敢煮'], ['魚販與店家', '好魚更好介紹'], ['漁業夥伴', '讓用心被看見']],
      introEyebrow: 'WHAT WE BELIEVE',
      introTitle: '永續海鮮要先好懂、好買、好煮，才會走進日常',
      introText: '海鮮背後有季節、產地、漁法、鮮度與料理學問，但買魚的人不需要先變成專家。FishFull 做的，是把專業整理成現場聽得懂、手機滑得順、今晚就能用的資訊，讓好選擇自然發生。',
      audiences: [
        ['消費者', '看懂來源、口感、季節與料理方式，第一次逛魚攤也能自然開口問，買回家更有把握。'],
        ['魚販與店家', '把產地、魚種特色、新鮮挑法與料理建議說得又快又清楚，忙碌時也能讓客人秒懂重點。'],
        ['漁業從業者', '讓友善作法、在地知識與魚貨價值被更多人看見，讓市場支持更有機會回到產地與認真做事的人。']
      ],
      principlesEyebrow: 'OUR SPIRIT',
      principlesTitle: '我們一起守住的三個精神',
      principles: [
        ['資訊說人話', '少一點硬梆梆術語，多一點「這條魚吃起來怎樣、怎麼挑、今晚怎麼煮」的實用答案。'],
        ['市場要用得上', '內容不只好看，還要能幫消費者做決定、幫魚販介紹、幫產地把價值講清楚。'],
        ['好魚要有回頭客', '一次買對只是開始；當人更敢買、願意再煮、願意再回來，好魚才真的有長期支持。']
      ],
      routeEyebrow: 'FROM CATCH TO TABLE',
      routeTitle: '從一掃到一餐，把每一步接起來',
      routeText: '不用一次讀完整個網站。照著這條路走，就能從認魚、找魚一路到上桌，再用十秒留下真實感受。',
      routeOpen: '打開',
      route: [
        ['01', '掃漁貨QR', '先看魚貨來源、魚種特色與料理方向。', '/#qr-demo'],
        ['02', 'AR看真魚', '把魚的完整外型放到眼前，認魚更直覺。', '/ar#fishfull-ar-stage'],
        ['03', '主推魚', '不知道挑哪條，就從今天最適合入門的魚開始。', '/pages/fish.html'],
        ['04', '去附近買魚', '找到市場、魚市、餐廳與漁港，直接去現場。', '/pages/map.html'],
        ['05', '零失敗食譜', '先決定怎麼煮，買魚就少一點壓力。', '/pages/recipes.html'],
        ['06', '十秒回饋', '買或沒買都能留一句，讓下一次推薦更貼近現場。', '/pages/feedback.html']
      ]
    },
    en: {
      title: 'FishFull | Idea & Spirit',
      desc: 'FishFull helps seafood shoppers, fishmongers, and fishing communities turn catch origin, seasonality, species know-how, cooking tips, and responsible seafood stories into everyday choices. Meet the FishFull crew and the values behind the work.',
      heroEyebrow: 'IDEA & SPIRIT',
      heroTitle: 'Good seafood should be easy to understand, easy to choose, and worth coming back for',
      heroLead: 'FishFull turns catch origin, seasonality, species know-how, freshness cues, cooking ideas, and local fishing stories into tools people can actually use at the seafood counter and at home. Less jargon, more “I know what to buy tonight.”',
      heroChips: ['No-guesswork seafood', 'Counter-friendly stories', 'Origin that feels real', 'Made for the next generation'],
      artTitle: 'From dock to dish, keep the story connected',
      artText: 'Responsible seafood should not feel like homework. It should help with the next question, the next purchase, and the next meal.',
      pulse: [['Shoppers', 'Ask, choose, and cook with confidence'], ['Fishmongers & shops', 'Tell a stronger catch story'], ['Fishing communities', 'Make responsible work visible']],
      introEyebrow: 'WHAT WE BELIEVE',
      introTitle: 'Responsible seafood works when it fits real life',
      introText: 'Seafood comes with seasons, origins, fishing practices, freshness, and cooking know-how—but shoppers should not need a seafood degree. FishFull turns that expertise into clear, useful guidance that works at the counter, on a phone, and in a weeknight kitchen.',
      audiences: [
        ['Shoppers', 'Know where the catch came from, what it tastes like, when it is in season, and how to cook it—so a first market visit feels a lot less intimidating.'],
        ['Fishmongers & shops', 'Explain origin, species, freshness, and cooking in a fast, natural way, even when the counter is busy and customers need the short version.'],
        ['Fishing communities', 'Make responsible practices, local knowledge, and the value behind each catch visible where buying decisions actually happen.']
      ],
      principlesEyebrow: 'OUR SPIRIT',
      principlesTitle: 'Three things we want every FishFull experience to keep',
      principles: [
        ['Plain language wins', 'Skip the jargon wall. Tell people what the fish tastes like, how to check it, and what they can cook tonight.'],
        ['Useful at the counter', 'Content should help shoppers decide, help seafood sellers explain, and help origin stories carry real value into the market.'],
        ['Build repeat seafood confidence', 'One good purchase is a start. When people come back, try another species, and cook it again, better seafood habits can stick.']
      ],
      routeEyebrow: 'FROM CATCH TO TABLE',
      routeTitle: 'One simple route from “What fish is this?” to dinner',
      routeText: 'You do not need to read the whole site first. Follow the flow to recognize the catch, find a place to buy it, cook it, and leave a quick real-world note.',
      routeOpen: 'Open',
      route: [
        ['01', 'Scan Catch QR', 'Check catch origin, species highlights, and cooking direction.', '/#qr-demo'],
        ['02', 'View Fish in AR', 'See the full fish shape in your space and recognize it faster.', '/ar#fishfull-ar-stage'],
        ['03', 'Featured Fish', 'Not sure what to buy? Start with today’s approachable pick.', '/pages/fish.html'],
        ['04', 'Buy Nearby', 'Find markets, fish markets, restaurants, and fishing ports.', '/pages/map.html'],
        ['05', 'Easy Recipes', 'Choose the cooking plan before you buy and take the stress down a notch.', '/pages/recipes.html'],
        ['06', 'Quick Feedback', 'Bought it or skipped it? Leave one quick note so the next recommendation gets better.', '/pages/feedback.html']
      ]
    }
  };

  function lang() {
    if (window.SCMLanguage && typeof window.SCMLanguage.current === 'function') {
      return window.SCMLanguage.current() === 'en' ? 'en' : 'zh';
    }
    return localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh';
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function cards(items, className) {
    return items.map(function (item, index) {
      return '<article class="' + className + '"><span class="spirit-index">0' + (index + 1) + '</span><h3>' + esc(item[0]) + '</h3><p>' + esc(item[1]) + '</p></article>';
    }).join('');
  }

  function route(items, openLabel) {
    return items.map(function (item) {
      return '<a class="spirit-route-card" href="' + esc(item[3]) + '"><span>' + esc(item[0]) + '</span><h3>' + esc(item[1]) + '</h3><p>' + esc(item[2]) + '</p><strong>' + esc(openLabel) + ' →</strong></a>';
    }).join('');
  }

  function setMeta(text) {
    document.title = text.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', text.desc);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', text.title);
    if (ogDesc) ogDesc.setAttribute('content', text.heroLead);
  }

  function apply() {
    var currentLang = lang();
    var text = copy[currentLang];
    var main = document.querySelector('.page main');
    var hero = document.querySelector('.page .hero');
    var team = document.querySelector('.page .team-section');
    if (!main || !hero || !team) return;

    setMeta(text);
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-Hant';
    team.id = 'team';
    team.setAttribute('data-preserved-team-section', 'true');

    var heroEyebrow = hero.querySelector('.hero-copy .eyebrow');
    var heroTitle = hero.querySelector('.hero-copy h1');
    var heroLead = hero.querySelector('.hero-lead');
    var heroChips = hero.querySelector('.hero-chips');
    if (heroEyebrow) heroEyebrow.textContent = text.heroEyebrow;
    if (heroTitle) heroTitle.textContent = text.heroTitle;
    if (heroLead) heroLead.textContent = text.heroLead;
    if (heroChips) heroChips.innerHTML = text.heroChips.map(function (item) { return '<span>' + esc(item) + '</span>'; }).join('');

    var artTitle = hero.querySelector('.art-copy strong');
    var artText = hero.querySelector('.art-copy span');
    var pulseGrid = hero.querySelector('.pulse-grid');
    if (artTitle) artTitle.textContent = text.artTitle;
    if (artText) artText.textContent = text.artText;
    if (pulseGrid) {
      pulseGrid.innerHTML = text.pulse.map(function (item) {
        return '<article><strong>' + esc(item[0]) + '</strong><span>' + esc(item[1]) + '</span></article>';
      }).join('');
    }

    var old = document.getElementById('fishfull-spirit');
    if (old) old.remove();

    var section = document.createElement('section');
    section.id = 'fishfull-spirit';
    section.className = 'spirit-section';
    section.innerHTML = [
      '<div class="spirit-heading">',
        '<p class="eyebrow">' + esc(text.introEyebrow) + '</p>',
        '<h2>' + esc(text.introTitle) + '</h2>',
        '<p>' + esc(text.introText) + '</p>',
      '</div>',
      '<div class="spirit-audience-grid">' + cards(text.audiences, 'spirit-audience-card') + '</div>',
      '<div class="spirit-principles">',
        '<div class="spirit-heading compact">',
          '<p class="eyebrow">' + esc(text.principlesEyebrow) + '</p>',
          '<h2>' + esc(text.principlesTitle) + '</h2>',
        '</div>',
        '<div class="spirit-principle-grid">' + cards(text.principles, 'spirit-principle-card') + '</div>',
      '</div>',
      '<div class="spirit-route">',
        '<div class="spirit-heading compact">',
          '<p class="eyebrow">' + esc(text.routeEyebrow) + '</p>',
          '<h2>' + esc(text.routeTitle) + '</h2>',
          '<p>' + esc(text.routeText) + '</p>',
        '</div>',
        '<div class="spirit-route-grid">' + route(text.route, text.routeOpen) + '</div>',
      '</div>'
    ].join('');

    main.insertBefore(section, team);
  }

  document.addEventListener('DOMContentLoaded', apply);
  document.addEventListener('scm-language-change', function () {
    window.setTimeout(apply, 0);
  });
  window.addEventListener('load', apply);
})();
