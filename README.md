# My Personal Portfolio & CV

這是一個為資管所推甄與求職設計的韓系簡約風格個人網站。

## 版本更新 (v4 - 單頁面動態展示)
- 導入了 **SPA (Single Page Application)** 的概念，利用 JavaScript 彈出對話框 (Modal)，讓使用者「不需開啟新分頁」，就能在同一頁面瀏覽完整的專案詳細內容！
- 整合了 Google 文件中所有的 6 個專案，包含半導體 BI 看板、報到審核系統、AI依賴問卷研究等。
- 新增了 **「證照與進修」** 區塊，展示微軟 DP-900 準備進度、TOEIC 以及其他 Google/Coursera 相關認證。

## 專案架構
- `index.html`: 網站首頁（所有專案細節都隱藏於此檔的 modal 中）
- `assets/css/style.css`: 樣式設定 (新增 modal 彈窗樣式與毛玻璃特效)
- `assets/js/main.js`: 互動動畫與 Modal 啟動邏輯

## 部署
直接將解壓縮後的整個資料夾推上 GitHub，並在 Settings > Pages 中開啟部署即可！
