# Vercel 部署注意事項

本版本已移除 build 到新子資料夾的流程：

- `vercel.json` **沒有** `buildCommand`
- `vercel.json` **沒有** `outputDirectory`
- 專案內 **沒有** `dist/`
- 專案內 **沒有** `public/`
- 專案內 **沒有** `.jsx` 檔案
- 三個子頁使用 `pages/pages.js` 作為共用 single source，不再保留三份重複 bundle

## 建議 Vercel 設定

在 Vercel 專案設定中：

- Framework Preset：Other
- Build Command：留空
- Output Directory：留空
- Install Command：可留空或使用預設

若 Vercel 後台曾手動設定 Build Command 或 Output Directory，請清空，避免仍部署舊的 `public` 或 `dist` 輸出。

## GitHub 更新後網站沒變時

請依序檢查：

1. GitHub 是否真的 commit 了刪除舊檔案的變更。
2. Vercel 專案是否連到正確 repository 與 branch。
3. Vercel Deployment Logs 是否仍在執行舊的 build command。
4. 瀏覽器是否快取舊版，可用無痕視窗或 `Ctrl + F5` 測試。
5. 若要強制重部署，可在 Vercel Dashboard 對最新 commit 點選 Redeploy。
