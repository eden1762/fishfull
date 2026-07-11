(function () {
  'use strict';

  var members = [
    {
      name: 'Jason',
      initials: 'J',
      photo: '/assets/profile/Jason.jpg',
      role: { zh: '創辦人暨 CEO', en: 'Founder & CEO' },
      skills: {
        zh: ['sustainability', 'project management', 'leadership'],
        en: ['Sustainability', 'Project management', 'Leadership']
      },
      intro: {
        zh: '哈囉，我是 Jason 簡嘉信！我一直希望能讓永續這件事變得更平易近人，平時我和朋友組隊推廣永續議題，也在網路上分享各種永續新知。我熱衷於將複雜難懂的議題，轉譯成大家日常都能輕鬆吸收的內容。期待能透過最簡單直接的分享，陪大家一起把這些理念落實在生活裡，讓永續成為一件自然而然的事。',
        en: 'Hi, I’m Jason Chien. I want sustainability to feel practical, friendly, and easy to bring into everyday life. I enjoy turning complex topics into clear, useful stories that people can actually use. Through FishFull, I hope better seafood choices can become a natural part of how we shop, cook, and support the ocean.'
      },
      experience: {
        zh: [
          '115年1月／個人發起「永續資訊道相報」LINE 社群，推廣永續資訊與新知。',
          '114年10月／參與臺北農業淨零工作坊，完成農業部門碳盤查訓練課程。',
          '114年9月2日／代表 FishFull 漁有料參加 2025 臺灣國際海洋青年論壇，榮獲青年組創新視界獎。',
          '114年8月／代表「回山海・青行動」參加新北 2025 國際青年氣候行動論壇，榮獲佳作。',
          '113年10月／代表環保星勢力國際服務志工隊，赴南韓參與第 27 屆 IAVE 國際志工大會。'
        ],
        en: [
          'Jan 2026 — Founded the “Sustainability News Sharing” LINE community to make sustainability updates easier to follow.',
          'Oct 2025 — Completed agricultural carbon-accounting training at the Taipei Agriculture Net-Zero Workshop.',
          'Sep 2, 2025 — Represented FishFull at the Taiwan International Ocean Youth Forum and received the Youth Innovation Vision Award.',
          'Aug 2025 — Represented the Back to Mountains and Sea Youth Action team at the New Taipei International Youth Climate Action Forum and received an Honorable Mention.',
          'Oct 2024 — Joined the 27th IAVE World Volunteer Conference in South Korea with the Environmental Rising Stars international volunteer team.'
        ]
      }
    },
    {
      name: '橘子',
      initials: '橘',
      photo: '/assets/profile/橘子.png',
      role: { zh: 'PM', en: 'Project Manager' },
      skills: {
        zh: ['teaching', 'project planning', 'sustainability'],
        en: ['Teaching', 'Project planning', 'Sustainability']
      },
      intro: {
        zh: '大家好！我是橘子（本名是王翊軒），現在就讀清大教育學院學士班大四。因為本人是橘色痴迷狂，很多東西都是橘色，故稱橘子 XD。自小便對環境保育產生熱忱，高中與大學時期累積了許多志工活動、永續專案及研究計畫相關經驗，包含碳匯主題課程設計與河川教育 LINE Chatbot 開發。很高興在這個團隊與各位夥伴相聚！',
        en: 'Hi! I’m Orange, also known as Wang Yi-Hsuan, a senior in the Interdisciplinary Program of Education at National Tsing Hua University. I’m famously obsessed with orange, so the nickname stuck XD. My passion for environmental conservation grew through volunteer work, sustainability projects, and research, including carbon-sequestration curriculum design and a river-education LINE chatbot. I’m excited to create learning experiences that make responsible seafood feel close to everyday life.'
      },
      experience: {
        zh: [
          '115年1月10日／參與聯合報「河好如初」設計思考工作坊決選，團體成果發表榮獲第一名及五萬元獎金。',
          '114年11月12日／第十屆「聯電綠獎」榮獲青年行動獎佳作，獎金一萬五千元。',
          '114年9月2日／參加 2025 臺灣國際海洋青年論壇，榮獲青年組創新視界獎。',
          '114年2月／國科會大學生專題研究計畫獲核定，題目為「碳匯課程設計：探討小學生學習過程中的態度與能力」，執行經費 48,000 元。',
          '113年8月／2024 新北氣候行動團隊創意徵件，榮獲銀獎（提案創意獎，全國第二）。'
        ],
        en: [
          'Jan 10, 2026 — Won first place and NT$50,000 at the United Daily News “River, Better Again” design-thinking workshop final showcase.',
          'Nov 12, 2025 — Received an Honorable Mention in the Youth Action category at the 10th UMC Green Award, with a NT$15,000 prize.',
          'Sep 2, 2025 — Received the Youth Innovation Vision Award at the 2025 Taiwan International Ocean Youth Forum.',
          'Feb 2025 — Awarded a National Science and Technology Council undergraduate research grant of NT$48,000 for a carbon-sequestration curriculum study focused on elementary students’ attitudes and abilities.',
          'Aug 2024 — Won Silver, ranking second nationwide, in the 2024 New Taipei Climate Action Team idea competition.'
        ]
      }
    },
    {
      name: '盧姸諠',
      initials: '姸',
      photo: '/assets/profile/盧姸諠.jpeg',
      role: { zh: '行銷部部長', en: 'Head of Marketing' },
      skills: {
        zh: ['leadership', 'project management', 'teaching'],
        en: ['Leadership', 'Project management', 'Teaching']
      },
      intro: {
        zh: '哈囉大家，我是姸諠。我最喜歡觀察＋思考，常常有好點子，不過行動力比較差，正在努力克服……經歷上，我在設計思考數據分析社團中擔任行銷，目前接任社長，也完成兩項數據分析與顧問的企業專案，寒假短期在環資基金會實習。稍微擅長社群圖文發想、基礎數據整理與分析，以及統整資料。希望把比較平淡、沒人注意的小事，透過各種方式變得有趣又吸睛！',
        en: 'Hi, I’m Yen-Hsuan. I love observing, questioning, and turning small details into fresh ideas. I have led marketing for a design-thinking and data-analysis club and now serve as its president. I have also completed two corporate data and consulting projects and interned with the Environmental Rights Foundation. I enjoy social content, practical data analysis, and making overlooked stories feel relevant, interesting, and worth sharing.'
      },
      experience: {
        zh: [
          '環境教育方法實作。',
          '環境與資源相關實習：循環經濟推廣專案、活動策劃與關係人聯繫。'
        ],
        en: [
          'Hands-on environmental education methods.',
          'Environmental and resource-sector internship covering circular-economy outreach, event planning, and stakeholder coordination.'
        ]
      }
    },
    {
      name: '龔依吟',
      initials: '吟',
      photo: '/assets/profile/龔依吟.png',
      role: { zh: '行銷部成員', en: 'Marketing Team' },
      skills: {
        zh: ['活動企劃', '跨部門溝通', '外部協調'],
        en: ['Event planning', 'Cross-team communication', 'External coordination']
      },
      intro: {
        zh: '我是龔依吟，可以叫我洗衣精，在漁有料團隊裡擔任行銷部文案製作的負責人。我結合數位工具整合與跨領域轉譯專長，致力於推動永續發展。曾獲中鼎永續生活實驗提案入選及茶產業創業工作坊銀獎，擅長將複雜的論文與產地數據結構化，轉化為直覺的食魚教育內容。我深信「唯有兼顧商業可行性，永續才能落地」，期盼以高效執行力為永續漁業創造實質影響力。',
        en: 'I’m Yi-Yin Kung, and you can call me Laundry Detergent. I create marketing copy for FishFull and combine digital tools with cross-disciplinary storytelling to move sustainability from ideas into action. I enjoy organizing research papers and origin data into seafood education that feels clear and intuitive. I believe sustainability works best when it also makes business sense, and I aim to turn that belief into real impact for responsible fisheries.'
      },
      experience: {
        zh: [
          '2026年2月／參與中興大學「興心茶語」永續茶產業工作坊，所屬團隊榮獲銀獎。',
          '2026年3月／中鼎永續生活實驗室入選團隊。'
        ],
        en: [
          'Feb 2026 — Joined National Chung Hsing University’s “Sustainable Tea Industry” workshop as a member of the Silver Award team.',
          'Mar 2026 — Selected for the CTCI Sustainable Living Lab.'
        ]
      }
    },
    {
      name: '劉道宗',
      initials: '宗',
      photo: '/assets/profile/劉道宗.jpg',
      role: { zh: '行銷部美工', en: 'Visual Designer' },
      skills: {
        zh: ['design', 'project planning'],
        en: ['Design', 'Project planning']
      },
      intro: {
        zh: '我叫劉道宗，也可以叫我阿宗，是科普漫畫家兼設計師，在漁有料團隊中擔任行銷組美工設計。平常除了會關注各類議題外，也會盡可能參與活動、多認識人並增進新知。',
        en: 'I’m Tao-Tsung Liu, or A-Tsung. I’m a science comic artist and designer, and I create visual work for FishFull’s marketing team. I follow a wide range of topics, join events whenever I can, meet new people, and keep learning so our seafood stories can stay fresh, accurate, and visually engaging.'
      },
      experience: {
        zh: ['文策院 ESG 辦公室永續活動 Pitch，連續兩年獲選提報。'],
        en: ['Selected to present sustainability event pitches through the Taiwan Creative Content Agency ESG Office for two consecutive years.']
      }
    },
    {
      name: '蔡福洋',
      initials: '洋',
      photo: '/assets/profile/蔡福洋.jpg',
      role: { zh: 'AR／VR 技術負責人', en: 'AR/VR Lead' },
      skills: {
        zh: ['integration', 'leadership', 'Goal-oriented'],
        en: ['Integration', 'Leadership', 'Goal-oriented']
      },
      intro: {
        zh: '大家好！我是蔡福洋，在漁有料團隊裡擔任 AR／VR 技術負責人。過去的跨領域背景，讓我從不把自己侷限在典型的框架裡。我十分熱衷於跨領域學習，也具備彈性，期許自己能靈活適應團隊中的各種場合與任務挑戰。喜歡嘗試新鮮事物，過去在永續、科技創新、外交、志工服務等領域都有涉獵！期待未來能發揮我的技術專長，同時帶著開放的心態與大家合作，一起激盪出更多創新的火花！',
        en: 'Hi! I’m Fu-Yang Tsai, FishFull’s AR/VR lead. My cross-disciplinary background keeps me from staying inside one box. I enjoy learning across fields, adapting to new challenges, and testing ideas that connect sustainability, technology, international exchange, and volunteer service. I’m excited to use immersive technology with an open, collaborative mindset and help create seafood experiences people can truly feel and remember.'
      },
      experience: {
        zh: [
          '2022／VR × SDGs 全國跨域盃虛擬實境大賽，決賽佳作。',
          '2023／基隆市海洋保育魚苗放流活動，擔任團隊代表。',
          '2024／第 64 屆高級中等學校北區科展工程學科，「海上搜救識別系統」榮獲特優。',
          '2026／AIESEC 國際經濟商管學生會會長。'
        ],
        en: [
          '2022 — Honorable Mention finalist in the national VR × SDGs Cross-Disciplinary Cup.',
          '2023 — Team representative at a Keelung marine-conservation fish-release event.',
          '2024 — Top Award in Engineering at the 64th Northern Taiwan High School Science Fair for a maritime search-and-rescue identification system.',
          '2026 — President of AIESEC, the international association of students in economics and business.'
        ]
      }
    },
    {
      name: '阿薛',
      initials: '薛',
      photo: '/assets/profile/阿薛.jpg',
      role: { zh: 'IT', en: 'IT' },
      skills: {
        zh: ['Software Engineering', 'map', 'teaching'],
        en: ['Software engineering', 'Maps', 'Teaching']
      },
      intro: {
        zh: '我是 FishFull 的 IT，負責把永續漁產、友善海鮮地圖與數位體驗串起來。I build tech that helps people find better seafood, support local fishers, and understand sustainability in a simple way. 希望用科技讓海鮮選擇更透明、更年輕、更有感。',
        en: 'I’m FishFull’s IT lead. I connect responsible seafood, friendly seafood maps, and digital experiences. I build tech that helps people find better seafood, support local fishers, and understand sustainability in a simple way. My goal is to make seafood choices more transparent, more approachable for younger audiences, and more connected to real life.'
      },
      experience: {
        zh: ['台大氣候行動社小編。', 'TWYCC 行銷部小編。', '奉茶計畫總統黑客松成員。'],
        en: ['Social media editor for the NTU Climate Action Club.', 'Marketing team social media editor at TWYCC.', 'Member of the Feng Cha Project team in the Presidential Hackathon.']
      }
    },
    {
      name: '黃冠豪',
      initials: '豪',
      photo: '/assets/profile/黃冠豪.jpeg',
      role: { zh: '未定', en: 'To be confirmed' },
      skills: {
        zh: ['teaching', 'sustainability', '外部協調'],
        en: ['Teaching', 'Sustainability', 'External coordination']
      },
      intro: {
        zh: '宜智科技 CFO，台大財金畢業，四次書卷獎、一次校長獎，並獲教育部總統教育獎奮發向上獎。大學期間建立 SDGs 社團，也在多項競賽中獲得冠亞軍。',
        en: 'CFO of Yi-Zhi Technology and a graduate of National Taiwan University’s Department of Finance. He received four Academic Achievement Awards, one President’s Award, and the Ministry of Education’s Presidential Education Award for perseverance. During university, he founded an SDGs club and earned top placements in multiple competitions.'
      },
      experience: {
        zh: ['在台大創立 SDGs 社團。', '在立法院與各國夥伴簽署永續 MOU。', '多個永續競賽冠軍與亞軍。'],
        en: ['Founded an SDGs club at National Taiwan University.', 'Signed sustainability MOUs with international partners at the Legislative Yuan.', 'Won first- and second-place honors in multiple sustainability competitions.']
      }
    }
  ];

  var copy = {
    zh: {
      meta: 'FishFull 漁有料｜關於我們',
      desc: '認識 FishFull 漁有料團隊：由永續、教育、行銷、設計、專案與沉浸科技夥伴，一起把好魚、好故事與好選擇帶進日常。',
      eyebrow: 'MEET THE CREW',
      headline: '一群把好魚、好故事與好選擇串在一起的人',
      lead: '我們來自永續、教育、行銷、設計、專案管理與科技。有人把研究說成人話，有人把產地故事做得吸睛，也有人把地圖、AR 與現場體驗接起來。目標很簡單：讓消費者更敢買、魚販更好賣、認真做漁業的人更容易被看見。',
      chips: ['8 位跨領域夥伴', '海鮮知識不再硬梆梆', '從產地一路聊到餐桌', '年輕世代也能秒懂'],
      artTitle: '不同專長，同一艘船',
      artText: '把永續、教育、商業溝通與數位體驗放在同一張航海圖上，讓每一條好魚都有更清楚的故事與更多被選擇的機會。',
      pulse: [
        ['消費者', '買得懂、煮得成'],
        ['魚販與店家', '更好介紹、更好成交'],
        ['漁業夥伴', '讓用心被市場看見']
      ],
      teamEyebrow: 'OUR TEAM',
      teamTitle: '認識漁有料夥伴',
      teamText: '每個人專長不同，但都在做同一件事：把複雜資訊變清楚，把好魚故事變有感，讓永續不只停在口號，而是真的進入市場與餐桌。',
      expTitle: '永續相關經歷',
      promiseEyebrow: 'HOW WE WORK',
      promiseTitle: '我們一起守住的三件事',
      promises: [
        ['先讓人看得懂', '不堆艱深名詞，從魚種、來源、口感到料理方式，都用買魚現場聽得懂的話說清楚。'],
        ['再讓店家用得上', '內容要能幫魚販介紹、幫消費者決定、幫漁業夥伴說出價值，才是真的有料。'],
        ['最後讓好魚被支持', '每一次更有把握的選擇，都有機會把支持帶回在地漁業、友善通路與健康海洋。']
      ]
    },
    en: {
      meta: 'FishFull | About Us',
      desc: 'Meet the FishFull crew bringing sustainability, seafood education, marketing, design, project leadership, maps, and immersive experiences together.',
      eyebrow: 'MEET THE CREW',
      headline: 'The crew connecting good catch, good stories, and better choices',
      lead: 'We bring together sustainability, education, marketing, design, project leadership, and technology. Some of us turn research into plain language, some make local seafood stories scroll-stopping, and some connect maps, AR, and real-world shopping. One shared goal: help shoppers buy with confidence, help seafood sellers tell a stronger story, and help responsible fishing get the attention it deserves.',
      chips: ['8 cross-disciplinary teammates', 'Seafood know-how, minus the lecture', 'From dock to dish', 'Made for the next generation'],
      artTitle: 'Different skills, one boat',
      artText: 'We put sustainability, education, business storytelling, and digital experiences on the same chart so every good catch has a clearer story and a better chance to be chosen.',
      pulse: [
        ['Shoppers', 'Choose with confidence and cook with less stress'],
        ['Fishmongers & shops', 'Explain faster and sell with a stronger story'],
        ['Fishing partners', 'Make responsible work visible in the market']
      ],
      teamEyebrow: 'OUR TEAM',
      teamTitle: 'Meet the FishFull crew',
      teamText: 'Different skills, one mission: make complex information clear, make seafood stories feel relevant, and move sustainability from a nice idea into real shopping and real meals.',
      expTitle: 'Sustainability experience',
      promiseEyebrow: 'HOW WE WORK',
      promiseTitle: 'Three things we protect in every project',
      promises: [
        ['Make it clear first', 'No jargon wall. Species, origin, flavor, and cooking should make sense right at the seafood counter.'],
        ['Make it useful in the market', 'Our content should help sellers explain, shoppers decide, and fishing partners show the value behind each catch.'],
        ['Send support back to better seafood', 'Every confident choice can move more support toward local fishing communities, responsible seafood channels, and a healthier ocean.']
      ]
    }
  };

  function isEn() {
    return localStorage.getItem('scm-language') === 'en';
  }

  function esc(value) {
    return String(value).replace(/[&<>'"]/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char];
    });
  }

  function nav(lang) {
    var items = lang === 'en'
      ? [
          ['Home', '/'],
          ['Our Idea', '/idea'],
          ['About Us', '/about'],
          ['Fish AR', '/ar'],
          ['Featured Fish', '/pages/fish.html'],
          ['Buy Nearby', '/pages/map.html'],
          ['Easy Recipes', '/pages/recipes.html']
        ]
      : [
          ['首頁', '/'],
          ['我們的理念', '/idea'],
          ['關於我們', '/about'],
          ['AR 看真魚', '/ar'],
          ['主推魚', '/pages/fish.html'],
          ['去附近買魚', '/pages/map.html'],
          ['零失敗食譜', '/pages/recipes.html']
        ];

    return items.map(function (item) {
      var current = item[1] === '/about' ? ' aria-current="page"' : '';
      return '<a href="' + item[1] + '"' + current + '>' + esc(item[0]) + '</a>';
    }).join('');
  }

  function memberCard(member, lang, text) {
    var skills = member.skills[lang].map(function (skill) {
      return '<span>' + esc(skill) + '</span>';
    }).join('');

    var experience = member.experience[lang].map(function (item) {
      return '<li>' + esc(item) + '</li>';
    }).join('');

    return [
      '<article class="member-card">',
        '<div class="portrait-wrap">',
          '<img class="portrait" src="' + esc(member.photo) + '" alt="' + esc(member.name + '｜' + member.role[lang]) + '" loading="lazy" decoding="async">',
          '<span class="portrait-fallback" aria-hidden="true">' + esc(member.initials) + '</span>',
        '</div>',
        '<div class="member-heading">',
          '<span class="role">' + esc(member.role[lang]) + '</span>',
          '<h3>' + esc(member.name) + '</h3>',
          '<div class="skills">' + skills + '</div>',
        '</div>',
        '<p class="intro">' + esc(member.intro[lang]) + '</p>',
        '<div class="experience">',
          '<h4>' + esc(text.expTitle) + '</h4>',
          '<ol>' + experience + '</ol>',
        '</div>',
      '</article>'
    ].join('');
  }

  function pulseTemplate(items) {
    return items.map(function (item) {
      return '<article><strong>' + esc(item[0]) + '</strong><span>' + esc(item[1]) + '</span></article>';
    }).join('');
  }

  function render() {
    var lang = isEn() ? 'en' : 'zh';
    var text = copy[lang];
    var root = document.getElementById('root');
    if (!root) return;

    document.documentElement.classList.toggle('lang-en', lang === 'en');
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';
    document.title = text.meta;

    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', text.desc);

    root.innerHTML = [
      '<div class="page">',
        '<header class="topbar">',
          '<a class="brand" href="/" aria-label="FishFull 漁有料">',
            '<img src="/fishfull.jpg" alt="FishFull 漁有料官方商標" width="46" height="46">',
            '<span class="brand-copy"><strong>FISHFULL Green Seafood</strong><span>漁有料</span></span>',
          '</a>',
          '<nav class="nav" aria-label="Main navigation">' + nav(lang) + '</nav>',
          '<div class="actions">',
            '<a class="icon-btn" href="/" aria-label="Home">⌂</a>',
            '<button class="icon-btn" id="lang-toggle" type="button" aria-label="Language">' + (lang === 'en' ? '中' : 'EN') + '</button>',
          '</div>',
        '</header>',
        '<main>',
          '<section class="hero">',
            '<div class="hero-copy">',
              '<p class="eyebrow">' + esc(text.eyebrow) + '</p>',
              '<h1>' + esc(text.headline) + '</h1>',
              '<p class="hero-lead">' + esc(text.lead) + '</p>',
              '<div class="hero-chips">' + text.chips.map(function (item) { return '<span>' + esc(item) + '</span>'; }).join('') + '</div>',
            '</div>',
            '<div class="hero-art">',
              '<div class="crew-number"><b>8</b><span>FISHFULL CREW</span></div>',
              '<div class="art-copy"><strong>' + esc(text.artTitle) + '</strong><span>' + esc(text.artText) + '</span></div>',
              '<div class="pulse-grid">' + pulseTemplate(text.pulse) + '</div>',
            '</div>',
          '</section>',
          '<section class="team-section">',
            '<div class="section-head">',
              '<p class="eyebrow">' + esc(text.teamEyebrow) + '</p>',
              '<h2>' + esc(text.teamTitle) + '</h2>',
              '<p>' + esc(text.teamText) + '</p>',
            '</div>',
            '<div class="team-grid">' + members.map(function (member) { return memberCard(member, lang, text); }).join('') + '</div>',
          '</section>',
          '<section class="promise-section">',
            '<div class="section-head">',
              '<p class="eyebrow">' + esc(text.promiseEyebrow) + '</p>',
              '<h2>' + esc(text.promiseTitle) + '</h2>',
            '</div>',
            '<div class="promise-grid">' + text.promises.map(function (item) {
              return '<article class="promise"><b>' + esc(item[0]) + '</b><p>' + esc(item[1]) + '</p></article>';
            }).join('') + '</div>',
          '</section>',
        '</main>',
      '</div>'
    ].join('');

    document.querySelectorAll('.portrait').forEach(function (image) {
      function fallback() {
        image.parentElement.classList.add('is-fallback');
      }
      image.addEventListener('error', fallback, { once: true });
      if (image.complete && image.naturalWidth === 0) fallback();
    });

    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        localStorage.setItem('scm-language', lang === 'en' ? 'zh' : 'en');
        render();
        document.dispatchEvent(new CustomEvent('scm-language-change'));
      });
    }
  }

  document.addEventListener('DOMContentLoaded', render);
})();
