const messages = {
  zh: {
    pageTitle: '永續漁獲地圖 | 首頁',
    pageDescription: '輕量、清楚、適合海鮮市場現場使用的永續漁獲地圖首頁。',
    brandKicker: 'SUSTAINABLE CATCH MAP',
    brandName: '永續漁獲地圖',
    navAbout: '我們的理念',
    navMap: '友善海鮮地圖',
    navSustainability: 'AR 與永續標籤',
    heroEyebrow: '海邊市集也能秒懂的永續選擇',
    heroTitle: '用一個輕鬆的海邊入口，找到友善海鮮、理解永續標籤。',
    heroText: 'Sustainable Catch Map 整合 AI 推薦、漁獲資訊與永續標籤，幫助消費者在市場、餐廳與日常採買時快速做出更透明、更友善海洋的選擇。',
    ctaMap: '找附近友善海鮮',
    ctaAbout: '看見永續初衷',
    liteLabel: '市場現場友善版',
    liteTitle: '少動畫、快載入、好點選',
    liteText: '首頁不再依賴 3D Canvas 與大型互動動畫，用清楚入口與靜態視覺保留沉浸感。',
    quickEyebrow: '選一個想探索的方向',
    quickTitle: '三個入口保留原功能，畫面更簡潔清楚',
    cardAboutTitle: '我們的理念',
    cardAboutText: '看見永續初衷，了解為什麼每一次海鮮選擇都能支持海洋。',
    cardMapTitle: '附近的友善海鮮地圖',
    cardMapText: '找附近友善餐廳與海鮮據點，讓採買與用餐更安心。',
    cardSustainabilityTitle: 'AR 互動與永續標籤',
    cardSustainabilityText: '理解永續標籤、漁法、產地與資源狀態，讓資訊更容易被看見。',
    cardAction: '進入頁面',
    trustOneTitle: '輕量',
    trustOneText: '移除首頁大型 3D 動畫',
    trustTwoTitle: '清楚',
    trustTwoText: '三個主要功能一眼可點',
    trustThreeTitle: '開心',
    trustThreeText: '海洋、沙灘、陽光的明亮氛圍'
  },
  en: {
    pageTitle: 'Sustainable Catch Map | Home',
    pageDescription: 'A lightweight, clear home page designed for real seafood market conditions.',
    brandKicker: 'SUSTAINABLE CATCH MAP',
    brandName: 'Sustainable Catch Map',
    navAbout: 'Our Philosophy',
    navMap: 'Friendly Seafood Map',
    navSustainability: 'AR & Sustainability Labels',
    heroEyebrow: 'Sustainable choices that are easy to understand at the seaside market',
    heroTitle: 'Find ocean-friendly seafood and understand sustainability labels from one sunny beach entrance.',
    heroText: 'Sustainable Catch Map brings together AI recommendations, seafood information, and sustainability labels so shoppers can make clearer, more ocean-friendly choices in markets, restaurants, and everyday grocery trips.',
    ctaMap: 'Find friendly seafood nearby',
    ctaAbout: 'See our sustainability purpose',
    liteLabel: 'Market-ready version',
    liteTitle: 'Less animation, faster loading, easier tapping',
    liteText: 'The home page no longer depends on 3D Canvas or heavy animations. Clear entry points and static visuals keep the immersive feeling lightweight.',
    quickEyebrow: 'Choose what you want to explore',
    quickTitle: 'The three original functions stay, now with a simpler and clearer screen',
    cardAboutTitle: 'Our Philosophy',
    cardAboutText: 'See the sustainability purpose and learn why every seafood choice can support the ocean.',
    cardMapTitle: 'Nearby Friendly Seafood Map',
    cardMapText: 'Find friendly seafood restaurants and locations nearby, making shopping and dining easier to trust.',
    cardSustainabilityTitle: 'AR Interaction & Sustainability Labels',
    cardSustainabilityText: 'Understand sustainability labels, fishing methods, origins, and resource status with clearer information.',
    cardAction: 'Open page',
    trustOneTitle: 'Lightweight',
    trustOneText: 'Heavy home-page 3D animation removed',
    trustTwoTitle: 'Clear',
    trustTwoText: 'Three main functions are instantly tappable',
    trustThreeTitle: 'Joyful',
    trustThreeText: 'Bright ocean, beach, and sunshine mood'
  }
}

function getLanguage() {
  try {
    return window.localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh'
  } catch (error) {
    return 'zh'
  }
}

function setLanguage(lang) {
  const selected = lang === 'en' ? 'en' : 'zh'
  const dictionary = messages[selected]
  document.documentElement.lang = selected === 'en' ? 'en' : 'zh-Hant'
  document.title = dictionary.pageTitle

  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', dictionary.pageDescription)

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n')
    if (dictionary[key]) node.textContent = dictionary[key]
  })

  document.querySelectorAll('.language-toggle').forEach((button) => {
    const nextLabel = selected === 'en' ? '中' : 'EN'
    const ariaLabel = selected === 'en' ? 'Switch to Chinese' : '切換成英文'
    button.setAttribute('aria-label', ariaLabel)
    button.setAttribute('title', selected === 'en' ? '中文' : 'English')
    const icon = button.querySelector('[data-lang-icon]')
    if (icon) icon.textContent = nextLabel
  })

  try {
    window.localStorage.setItem('scm-language', selected)
  } catch (error) {
    // Ignore private-mode storage errors; the page still works.
  }
}

function initHome() {
  setLanguage(getLanguage())

  document.querySelectorAll('.language-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(getLanguage() === 'en' ? 'zh' : 'en')
    })
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHome)
} else {
  initHome()
}
