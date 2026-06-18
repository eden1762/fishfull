# 首頁改版說明：static-sunny-input-home-v1

本次修改的是專案根目錄的首頁原始檔，不是只修改 `dist`。

## 已修改檔案

- `index.html`
- `home.css`
- `home.js`

## 修改重點

1. 取消首頁 720 度海洋／沙灘／陽光可旋轉功能。
   - 首頁不再使用 Canvas 或可旋轉 3D 場景。
   - 改成純 CSS 靜態海洋、沙灘、陽光背景。

2. 三個首頁主要選項改為真正的 `input[type=button]`。
   - `.journey-input[type="button"]` 共 3 個。
   - 使用 `data-route` 搭配 `home.js` 點擊導頁。
   - 手機寬度小於 520px 時會自動切成較短按鈕文字，避免文字過長不好點。

3. 視覺方向改成輕鬆、簡潔、開心。
   - 色彩以海洋藍、沙灘米、陽光黃、粉藍／粉橘／粉紅入口為主。
   - 使用玻璃感導覽列與大型品牌式 landing page 版面。

## 驗證

已執行：

```bash
npm ci
npm run build
```

建置成功，`dist/` 已重新產生。
