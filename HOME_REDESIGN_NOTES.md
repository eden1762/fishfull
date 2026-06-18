# 首頁全盤翻新說明

本版依照參賽 feedback 將首頁改成「海鮮市場現場友善」的輕量沉浸式首頁。

## 修改重點

1. **移除首頁大型 3D / Canvas 動畫依賴**
   - `index.html` 不再載入 `model-viewer`。
   - `home.js` 從大型 React/Three bundle 改成少量原生 JavaScript，只負責中英文切換。
   - 首頁視覺改用 CSS 漸層、靜態海洋/沙灘/陽光元素，降低網路不穩時的載入負擔。

2. **重新設計首頁資訊架構**
   - 首屏改成海洋、沙灘、陽光風格的 landing page。
   - 保留原本三個入口：
     - 我們的理念 / 看見永續初衷
     - 附近的友善海鮮地圖 / 找附近友善海鮮
     - AR 互動與永續標籤 / 理解永續標籤
   - 加入「市場現場友善版：少動畫、快載入、好點選」訊息，回應評審 feedback。

3. **保留既有功能**
   - 三個主要功能頁連結保留：`/pages/about.html`、`/pages/map.html`、`/pages/sustainability.html`。
   - Instagram 連結保留：`https://www.instagram.com/fishfull_2025/`。
   - 中英文切換保留，並沿用 `localStorage` 的 `scm-language`，所以首頁切換後進入子頁仍可延續語言設定。

4. **響應式與操作性調整**
   - 電腦版：固定頂部導覽、右側社群/語言按鈕。
   - 手機版：導覽可橫向滑動，底部保留 Instagram 與語言切換 dock。
   - 入口卡片加大，提升市場現場單手點選成功率。

## 主要修改檔案

- `index.html`
- `home.css`
- `home.js`
- `src/pages/HomePage.jsx`（保留原始碼版本的一致性）

## 驗證

- 已執行 `npm run build`，建置成功。
- 已檢查首頁連結檔案存在。
- 已檢查 `home.js` 語法。
