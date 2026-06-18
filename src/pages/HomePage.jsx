import React from 'react'
import SiteNav from '../components/SiteNav'

const cards = [
  {
    className: 'card-blue',
    number: '01',
    icon: '☀',
    href: '/pages/about.html',
    title: '我們的理念',
    text: '看見永續初衷，了解為什麼每一次海鮮選擇都能支持海洋。'
  },
  {
    className: 'card-orange',
    number: '02',
    icon: '⌖',
    href: '/pages/map.html',
    title: '附近的友善海鮮地圖',
    text: '找附近友善餐廳與海鮮據點，讓採買與用餐更安心。'
  },
  {
    className: 'card-pink',
    number: '03',
    icon: '◎',
    href: '/pages/sustainability.html',
    title: 'AR 互動與永續標籤',
    text: '理解永續標籤、漁法、產地與資源狀態，讓資訊更容易被看見。'
  }
]

export default function HomePage() {
  return (
    <div className="page-home ocean-lite-home">
      <SiteNav />
      <main className="lite-home-main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="sun" aria-hidden="true" />
          <div className="cloud cloud-a" aria-hidden="true" />
          <div className="cloud cloud-b" aria-hidden="true" />
          <div className="ocean" aria-hidden="true">
            <span className="wave wave-a" />
            <span className="wave wave-b" />
            <span className="wave wave-c" />
          </div>
          <div className="sand" aria-hidden="true" />

          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">海邊市集也能秒懂的永續選擇</p>
              <h1 id="hero-title">用一個輕鬆的海邊入口，找到友善海鮮、理解永續標籤。</h1>
              <p className="hero-text">
                Sustainable Catch Map 整合 AI 推薦、漁獲資訊與永續標籤，幫助消費者在市場、餐廳與日常採買時快速做出更透明、更友善海洋的選擇。
              </p>
              <div className="hero-actions" aria-label="首頁主要行動">
                <a className="primary-action" href="/pages/map.html">找附近友善海鮮</a>
                <a className="secondary-action" href="/pages/about.html">看見永續初衷</a>
              </div>
            </div>

            <aside className="lite-panel" aria-label="輕量化設計重點">
              <span>市場現場友善版</span>
              <strong>少動畫、快載入、好點選</strong>
              <p>首頁不再依賴 3D Canvas 與大型互動動畫，用清楚入口與靜態視覺保留沉浸感。</p>
            </aside>
          </div>
        </section>

        <section className="quick-links" aria-labelledby="quick-title">
          <div className="section-heading">
            <p className="eyebrow">選一個想探索的方向</p>
            <h2 id="quick-title">三個入口保留原功能，畫面更簡潔清楚</h2>
          </div>
          <div className="journey-grid">
            {cards.map((card) => (
              <a key={card.href} className={`journey-card ${card.className}`} href={card.href}>
                <span className="card-number">{card.number}</span>
                <span className="card-icon" aria-hidden="true">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <strong>進入頁面</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="trust-strip" aria-label="首頁設計方向">
          <div><strong>輕量</strong><span>移除首頁大型 3D 動畫</span></div>
          <div><strong>清楚</strong><span>三個主要功能一眼可點</span></div>
          <div><strong>開心</strong><span>海洋、沙灘、陽光的明亮氛圍</span></div>
        </section>
      </main>
    </div>
  )
}
