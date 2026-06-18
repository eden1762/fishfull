# Vercel 部署注意事項

若上傳本版本後網站仍顯示舊畫面，通常是以下原因：

1. GitHub 沒有推送到 Vercel 綁定的分支。
2. Vercel deployment 還在使用上一版快取。
3. 瀏覽器快取尚未更新。

建議流程：

```bash
git status
git add .
git commit -m "Redesign site as pure 2D yellow white black edition"
git push
```

推送完成後，到 Vercel 專案的 Deployments 查看最新一次部署是否成功。若仍舊畫面，請使用 Redeploy 並取消使用 build cache。
