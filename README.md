# FishFull 漁有料｜Sustainable Catch Map

讓每一次買魚，都成為守護海洋的選擇。

本版本已依照參賽文件與委員回饋，將網站文案調整為「低碳漁法核心、三方誘因系統、遊戲化永續任務、採購行為驗證」四個重點，並整理為可直接部署到 Vercel 的純靜態網站。

## 本次重點

- **漁業專業**：文案聚焦當季魚種、低碳漁法、產地足跡、友善捕撈與合作通路。
- **行銷專業**：用「掃碼 → 看懂 → 購買 → 食譜 → 回饋」設計採購轉換漏斗。
- **遊戲專業**：AR 永續任務、徽章、拍照與回饋，讓永續標籤變成可參與行動。
- **成效驗證**：除了 QR Code 與瀏覽量，新增永續魚種銷售量、食譜到採購轉換、再訪率與店家紀錄。
- **落地佐證**：新增 6–11 月時程、MOU、訪談紀錄、場勘照片、示範點位與成果報告的文字結構。

## 檔案結構

```text
index.html                 # 首頁 single source
home.css                   # 首頁樣式
home.js                    # 首頁文案與互動
site-i18n.js               # 全站語系切換
pages/about.html           # 我們的理念
pages/map.html             # 友善海鮮地圖
pages/sustainability.html  # AR 永續任務
pages/pages.js             # 三個子頁共用 single source renderer
pages/site-pages.css       # 三個子頁共用樣式
pages/sustainability-ar.js # AR 任務互動
pages/sustainability-ar.css
api/webhook.js             # 既有 API
vercel.json                # Vercel rewrites only，無 build output 子資料夾
```

## 部署方式

此專案不需要 React、JSX、Vite、dist 或 public build output。

1. 將整包檔案放在 GitHub repository 根目錄。
2. 確認 repository 內沒有舊的 `dist/`、`public/` 或重複的 `pages/about.js`、`pages/map.js`、`pages/sustainability.js`。
3. Push 到 GitHub。
4. Vercel 會直接以根目錄靜態檔案部署；`vercel.json` 只負責乾淨網址與 rewrites。

## 本機預覽

```bash
npm run preview
# open http://localhost:4173
```

也可以直接執行：

```bash
python3 -m http.server 4173
```
