const messages = {
  zh: {
    pageTitle: '永續漁獲地圖 | 首頁',
    pageDescription: '取消首頁 720 度旋轉與 3D 首頁入口，改為輕量、清楚、陽光海灘風格的永續漁獲地圖首頁。',
    brandKicker: 'SUSTAINABLE CATCH MAP',
    brandName: '永續漁獲地圖',
    navAbout: '我們的理念',
    navMap: '友善海鮮地圖',
    navSustainability: 'AR 與永續標籤',
    heroEyebrow: '市場現場也能快速使用',
    heroTitle: '海洋、沙灘、陽光，一眼找到友善海鮮。',
    heroText: '首頁取消 720 度旋轉與大型 3D 動畫，改成靜態沉浸式海邊背景。即使在海鮮市場網路不穩，也能快速載入、清楚點選。',
    badgeStatic: '不可旋轉背景',
    badgeInput: '純 input 按鈕',
    badgeFast: '市場友善',
    choiceEyebrow: 'CHOOSE YOUR JOURNEY',
    choiceTitle: '三個入口，像大型品牌首頁一樣直接、明亮、好點。',
    buttonAbout: '我們的理念｜看見永續初衷｜3D眼睛導覽',
    buttonAboutCompact: '我們的理念｜看見永續初衷',
    buttonAboutHint: '用最少負擔的入口，看懂團隊為什麼推動永續海鮮。',
    buttonMap: '附近的友善海鮮地圖｜找附近友善餐廳｜3D友善小魚',
    buttonMapCompact: '友善海鮮地圖｜找附近餐廳',
    buttonMapHint: '直接進入地圖，快速找到身邊可支持的友善店家。',
    buttonSustainability: 'AR互動與永續標籤｜理解永續標籤｜3D牛頓擺球組',
    buttonSustainabilityCompact: 'AR 永續標籤｜理解標籤',
    buttonSustainabilityHint: '把標籤、漁法、產地與資源狀態變成容易理解的資訊。',
    stripOneTitle: '取消旋轉',
    stripOneText: '不使用首頁 720 度可旋轉場景，降低市場現場載入負擔。',
    stripTwoTitle: '純按鈕入口',
    stripTwoText: '三個主要選項都改為 input[type=button]，互動更直覺。',
    stripThreeTitle: '明亮品牌感',
    stripThreeText: '使用海洋藍、沙灘米、陽光黃，呈現輕鬆簡潔的快樂氛圍。'
  },
  en: {
    pageTitle: 'Sustainable Catch Map | Home',
    pageDescription: 'A sunny, lightweight home page without the 720-degree rotating scene or heavy 3D home-page entry points.',
    brandKicker: 'SUSTAINABLE CATCH MAP',
    brandName: 'Sustainable Catch Map',
    navAbout: 'Our Philosophy',
    navMap: 'Friendly Seafood Map',
    navSustainability: 'AR & Sustainability Labels',
    heroEyebrow: 'Fast enough for real market conditions',
    heroTitle: 'Ocean, beach, sunshine — find friendly seafood at a glance.',
    heroText: 'The home page no longer uses the 720-degree rotating scene or heavy 3D animation. It now uses a static immersive beach background, so it loads faster and stays clear even in unstable seafood-market networks.',
    badgeStatic: 'Static background',
    badgeInput: 'Pure input buttons',
    badgeFast: 'Market friendly',
    choiceEyebrow: 'CHOOSE YOUR JOURNEY',
    choiceTitle: 'Three entries that feel direct, bright, and easy to tap like a major brand landing page.',
    buttonAbout: 'Our Philosophy | See the purpose | 3D Eye Guide',
    buttonAboutCompact: 'Our Philosophy | Purpose',
    buttonAboutHint: 'Understand why the team promotes sustainable seafood with a low-friction entry point.',
    buttonMap: 'Nearby Friendly Seafood Map | Find restaurants | 3D Friendly Fish',
    buttonMapCompact: 'Friendly Map | Restaurants',
    buttonMapHint: 'Go directly to the map and quickly find friendly places nearby.',
    buttonSustainability: 'AR & Sustainability Labels | Understand labels | 3D Newton Cradle',
    buttonSustainabilityCompact: 'AR Labels | Learn',
    buttonSustainabilityHint: 'Turn labels, fishing methods, origins, and resource status into easier information.',
    stripOneTitle: 'No rotation',
    stripOneText: 'The 720-degree rotating home scene is removed to reduce loading burden in market conditions.',
    stripTwoTitle: 'Pure button entry',
    stripTwoText: 'The three main options now use input[type=button] for a more direct interaction.',
    stripThreeTitle: 'Bright brand mood',
    stripThreeText: 'Ocean blue, beach sand, and sunshine yellow create a light, simple, joyful mood.'
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

  const useCompactButtonText = window.matchMedia('(max-width: 520px)').matches
  document.querySelectorAll('[data-i18n-value]').forEach((node) => {
    const fullKey = node.getAttribute('data-i18n-value')
    const compactKey = node.getAttribute('data-i18n-compact-value')
    const key = useCompactButtonText && compactKey ? compactKey : fullKey
    if (dictionary[key]) node.value = dictionary[key]
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

function initJourneyInputs() {
  document.querySelectorAll('.journey-input[type="button"]').forEach((input) => {
    input.addEventListener('click', () => {
      const route = input.getAttribute('data-route')
      if (route) window.location.href = route
    })
  })
}

function initHome() {
  setLanguage(getLanguage())
  initJourneyInputs()

  document.querySelectorAll('.language-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(getLanguage() === 'en' ? 'zh' : 'en')
    })
  })

  window.addEventListener('resize', () => {
    setLanguage(getLanguage())
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHome)
} else {
  initHome()
}
