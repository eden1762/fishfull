(function () {
  'use strict';

  var members = [
    {
      name: 'Jason',
      initials: 'J',
      photo: '/assets/profile/Jason.jpg',
      role: { zh: '創辦人暨 CEO', en: 'Founder & CEO' },
      skills: {
        zh: ['永續生活', '專案協作', '團隊帶領'],
        en: ['Sustainable living', 'Project coordination', 'Team leadership']
      },
      intro: {
        zh: '哈囉，我是 Jason 簡嘉信！我一直希望能讓永續這件事變得更平易近人，平時我和朋友組隊推廣永續議題，也在網路上分享各種永續新知。我熱衷於把複雜難懂的議題，轉成大家日常都能輕鬆吸收的內容。期待用最簡單直接的分享，陪大家把理念放進生活裡，讓友善海洋、支持在地漁業與好好吃魚變成自然的選擇。',
        en: 'Hi, I’m Jason Chien. I want sustainability to feel practical, friendly, and easy to bring into everyday life. I enjoy turning complex topics into clear stories people can actually use. Through FishFull, I hope choosing good seafood, supporting local fishing communities, and caring for the ocean can feel like a natural part of daily life.'
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
      role: { zh: '教育與專案夥伴', en: 'Education & Project Partner' },
      skills: {
        zh: ['食魚教育', '活動規劃', '永續學習'],
        en: ['Seafood education', 'Activity planning', 'Sustainability learning']
      },
      intro: {
        zh: '大家好！我是橘子（本名是王翊軒），現在就讀清大教育學院學士班大四。因為本人是橘色痴迷狂，很多東西都是橘色，故稱橘子 XD。自小便對環境保育產生熱忱，高中與大學時期累積許多志工活動、永續行動與研究經驗，包含碳匯主題課程設計與河川教育 LINE 互動學習服務。很高興在這個團隊與大家一起把環境知識變成更好玩、更貼近日常的食魚體驗！',
        en: 'Hi! I’m Orange, also known as Wang Yi-Hsuan, a senior in the Interdisciplinary Program of Education at National Tsing Hua University. I’m famously obsessed with orange, so the nickname stuck XD. My passion for environmental conservation grew through volunteer work, sustainability projects, and research, including carbon-sequestration curriculum design and an interactive LINE learning experience for river education. I’m excited to make seafood and ocean learning more playful and useful in everyday life.'
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
        zh: ['內容企劃', '團隊協作', '資料整理'],
        en: ['Content planning', 'Team coordination', 'Data storytelling']
      },
      intro: {
        zh: '哈囉大家，我是姸諠。我最喜歡觀察＋思考，常常有好點子，也正在練習把想法更快變成行動。我在設計思考與數據分析社團負責行銷，目前接任社長，也完成兩項企業資料分析與顧問專案，並曾在環資基金會實習。我喜歡做社群圖文、整理資料與找出故事重點，希望把平常容易被忽略的魚、產地與環境小事，變得有趣又吸睛。',
        en: 'Hi, I’m Yen-Hsuan. I love observing, questioning, and turning small details into fresh ideas. I have led marketing for a design-thinking and data-analysis club and now serve as its president. I have also completed two corporate data and consulting projects and interned with the Environmental Rights Foundation. I enjoy social content, practical data storytelling, and making overlooked seafood and environmental stories feel relevant and worth sharing.'
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
        zh: ['活動企劃', '跨領域轉譯', '外部協調'],
        en: ['Event planning', 'Cross-field storytelling', 'External coordination']
      },
      intro: {
        zh: '我是龔依吟，可以叫我洗衣精，在漁有料團隊裡負責行銷文案。我擅長整理研究、產地資料與不同領域的觀點，再把它們轉成一般人看得懂、願意分享的食魚內容。曾獲中鼎永續生活實驗提案入選及茶產業創業工作坊銀獎。我相信永續要和真實市場、店家與消費者需求接得起來，才更有機會長久走下去，也期待替友善漁業創造更有感的影響。',
        en: 'I’m Yi-Yin Kung, and you can call me Laundry Detergent. I create marketing copy for FishFull and enjoy turning research, origin data, and cross-disciplinary ideas into seafood education that feels clear and shareable. I believe responsible seafood lasts when it also works for real shoppers, sellers, and fishing communities, and I hope to help create that kind of practical impact.'
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
      role: { zh: '視覺設計夥伴', en: 'Visual Designer' },
      skills: {
        zh: ['科普圖像', '視覺設計', '內容企劃'],
        en: ['Science illustration', 'Visual design', 'Content planning']
      },
      intro: {
        zh: '我叫劉道宗，也可以叫我阿宗，是科普漫畫家兼設計師，在漁有料團隊中負責視覺設計。平常除了關注各類議題，也喜歡參與活動、認識不同的人並持續學新東西，希望把魚種、產地與海洋故事畫得更直覺、更有記憶點。',
        en: 'I’m Tao-Tsung Liu, or A-Tsung. I’m a science comic artist and visual designer for FishFull. I follow a wide range of topics, join events whenever I can, meet new people, and keep learning so seafood species, origin, and ocean stories can feel clear, memorable, and visually engaging.'
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
      role: { zh: 'AR／VR 體驗夥伴', en: 'AR/VR Experience Lead' },
      skills: {
        zh: ['沉浸體驗', '跨域整合', '團隊合作'],
        en: ['Immersive experiences', 'Cross-field integration', 'Teamwork']
      },
      intro: {
        zh: '大家好！我是蔡福洋，在漁有料團隊裡負責 AR／VR 體驗。跨領域背景讓我很喜歡跳出既有框架，也樂於學習不同領域、適應新的任務。過去接觸過永續、科技創新、外交與志工服務，希望把這些經驗放進漁有料，讓大家不只看到魚名，而是能更直覺地認魚、理解魚，甚至把魚放進眼前的真實空間。',
        en: 'Hi! I’m Fu-Yang Tsai, FishFull’s AR/VR experience lead. My cross-disciplinary background keeps me from staying inside one box. I enjoy learning across fields and creating immersive experiences that help people recognize fish, understand seafood, and connect ocean stories with the real world around them.'
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
      role: { zh: '數位體驗夥伴', en: 'Digital Experience' },
      skills: {
        zh: ['互動體驗', '友善海鮮地圖', '食魚教育'],
        en: ['Interactive experiences', 'Seafood maps', 'Seafood education']
      },
      intro: {
        zh: '我是 FishFull 的數位體驗夥伴，負責把友善漁產、附近買魚地圖、AR 認魚與食魚教育串成順手的使用體驗。希望大家打開手機就能更快找到好魚、支持在地漁業，也能用簡單的方式理解來源、季節與料理，讓海鮮選擇更透明、更年輕、更有感。',
        en: 'I help shape FishFull’s digital experience by connecting responsible seafood, nearby seafood maps, AR fish viewing, and practical seafood education. The goal is simple: help people find good seafood, support local fishing communities, and understand origin, season, and cooking without making the experience feel complicated.'
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
      role: { zh: '角色規劃中', en: 'Role in progress' },
      skills: {
        zh: ['教育分享', '永續行動', '外部協調'],
        en: ['Education', 'Sustainability action', 'External coordination']
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
      meta: 'FishFull 漁有料｜理念與精神',
      desc: '認識 FishFull 漁有料團隊：由永續、食魚教育、行銷、視覺、AR／VR 與數位體驗夥伴，一起把好魚、好故事與好選擇帶進日常。',
      eyebrow: 'MEET THE CREW',
      headline: '一群把好魚、好故事與好選擇串在一起的人',
      lead: '我們來自永續、教育、行銷、設計、專案協作與互動體驗。有人把研究說成人話，有人把產地故事做得吸睛，也有人把附近買魚地圖、AR 認魚與現場體驗接起來。目標很簡單：讓漁產消費者更敢買、魚販更好介紹、認真做漁業的人更容易被看見。',
      chips: ['8 位跨領域夥伴', '海鮮知識不再硬梆梆', '從產地一路聊到餐桌', '年輕世代也能秒懂'],
      artTitle: '不同專長，同一艘船',
      artText: '把永續、食魚教育、店家溝通與互動體驗放在同一張航海圖上，讓每一條好魚都有更清楚的故事，也有更多被選擇的機會。',
      pulse: [
        ['漁產消費者', '買得懂、煮得成'],
        ['魚販與店家', '更好介紹、更好選魚'],
        ['漁業夥伴', '讓用心被市場看見']
      ],
      teamEyebrow: 'OUR TEAM',
      teamTitle: '認識漁有料夥伴',
      teamText: '每個人專長不同，但都在做同一件事：把複雜資訊變清楚，把好魚故事變有感，讓友善海洋不只停在口號，而是真的進入市場、店家與餐桌。',
      expTitle: '相關經歷',
      promiseEyebrow: 'HOW WE WORK',
      promiseTitle: '我們一起守住的三件事',
      promises: [
        ['先讓人看得懂', '不堆艱深名詞，從魚種、來源、鮮度、口感到料理方式，都用買魚現場聽得懂的話說清楚。'],
        ['再讓店家用得上', '內容要能幫魚販介紹、幫消費者決定、幫漁業夥伴說出價值，才是真的有料。'],
        ['最後讓好魚被支持', '每一次更有把握的選擇，都有機會把支持帶回在地漁業、友善通路與健康海洋。']
      ]
    },
    en: {
      meta: 'FishFull | Our Idea & Crew',
      desc: 'Meet the FishFull crew bringing responsible seafood, seafood education, storytelling, visual design, AR/VR, maps, and everyday seafood shopping together.',
      eyebrow: 'MEET THE CREW',
      headline: 'The crew connecting good catch, good stories, and better choices',
      lead: 'We bring together responsible seafood, education, marketing, visual design, project coordination, and interactive experiences. Some of us turn research into plain language, some make local seafood stories worth sharing, and some connect seafood maps, AR fish viewing, and real-world shopping. One shared goal: help shoppers buy with confidence, help fishmongers explain seafood clearly, and help responsible fishing get the attention it deserves.',
      chips: ['8 cross-disciplinary teammates', 'Seafood know-how, minus the lecture', 'From dock to dish', 'Made for the next generation'],
      artTitle: 'Different skills, one boat',
      artText: 'We put responsible seafood, education, seller communication, and interactive experiences on the same chart so every good catch has a clearer story and a better chance to be chosen.',
      pulse: [
        ['Seafood shoppers', 'Choose with confidence and cook with less stress'],
        ['Fishmongers & shops', 'Explain seafood clearly and help people choose'],
        ['Fishing partners', 'Make responsible work visible in the market']
      ],
      teamEyebrow: 'OUR TEAM',
      teamTitle: 'Meet the FishFull crew',
      teamText: 'Different skills, one mission: make complex information clear, make seafood stories feel relevant, and move responsible seafood from a nice idea into real shopping and real meals.',
      expTitle: 'Related experience',
      promiseEyebrow: 'HOW WE WORK',
      promiseTitle: 'Three things we protect in every project',
      promises: [
        ['Make it clear first', 'No jargon wall. Species, origin, freshness, flavor, and cooking should make sense right at the seafood counter.'],
        ['Make it useful at the counter', 'Our content should help fishmongers explain, shoppers decide, and fishing partners show the value behind each catch.'],
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
          '<nav class="topnav" aria-label="' + (lang === 'en' ? 'Main navigation' : '主選單') + '"></nav>',
          '<div class="actions nav-actions">',
            '<a class="icon-btn circle-link" href="https://www.instagram.com/fishfull_2025/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>',
            '<button class="icon-btn circle-link" id="lang-toggle" type="button" aria-label="Language"><span data-lang-icon>' + (lang === 'en' ? '中文' : 'EN') + '</span></button>',
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
        localStorage.setItem('fishfull-language', lang === 'en' ? 'zh' : 'en');
        render();
        document.dispatchEvent(new CustomEvent('scm-language-change'));
        document.dispatchEvent(new CustomEvent('fishfull-language-change'));
      });
    }
  }

  document.addEventListener('DOMContentLoaded', render);
})();
