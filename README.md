# Sustainable Catch Map — Pure 2D Edition

本版本將網站翻新為純 2D、黃白黑三色的輕量設計，重點是降低暈眩感、加快載入、讓市場現場使用者可以快速點選。

## 主要頁面

- `/`：純 2D 首頁，首頁只使用黃色、白色、黑色；Instagram icon 保留原社群色彩。
- `/pages/about.html`：我們的理念。
- `/pages/map.html`：友善海鮮據點清單。
- `/pages/sustainability.html`：永續標籤資訊卡。

## 設計原則

1. 固定版面，不使用動態場景。
2. 不使用大型動態視覺或沉重互動元件。
3. 首頁顏色限制為黃、白、黑三色，降低視覺雜訊。
4. 所有主要入口保留為清楚可點選的按鈕。

## 開發指令

```bash
npm install
npm run dev
npm run build
```

Vercel 部署時請以專案根目錄建置，建置指令使用 `npm run build`，輸出目錄為 `dist`。
