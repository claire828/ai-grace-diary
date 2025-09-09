# Diary AI 專案開發基礎設施 StoryBank

## 1. 服務架構總覽

本專案開發環境以 Docker Compose 管理，包含三大核心服務：

- **nginx (proxy)**：反向代理，統一入口，將流量導向 Node.js 應用
- **server (Node.js)**：主後端 API 伺服器，負責業務邏輯與資料存取
- **pg (PostgreSQL)**：資料庫服務，儲存所有日記資料

---

## 2. 各服務設定說明

### nginx (proxy)

- 使用 nginx:alpine 映像檔
- 監聽 80 port（瀏覽器預設 HTTP port）
- 掛載自訂 `nginx.conf`，將所有流量反向代理到 server 服務（port 3000）
- 加入 backend 虛擬網路，與 server、pg 互通

### server (Node.js)

- 使用自訂 `Dockerfile.dev` 建立 Node.js 開發環境
- 監聽 3000 port
- 透過環境變數連接 pg 資料庫
- 掛載原始碼與 node_modules，支援即時同步
- depends_on/links 連接 pg，確保啟動順序

### pg (PostgreSQL)

- 使用 postgres:14.5-alpine 映像檔
- 監聽 5432 port
- 啟動時自動執行 `src/database/init.sql`，建立資料表
- 可選擇性掛載資料持久化 volume
- 加入 backend 虛擬網路

---

## 3. 設定檔與流程連結

- `docker-compose.yml`：定義所有服務、網路、volume
- `nginx.conf`：設定反向代理規則，將 80 port 請求導向 server:3000
- `Dockerfile.dev`：Node.js 開發環境建置腳本
- `.env`：集中管理資料庫連線資訊，建議 docker-compose 也用 `${VAR_NAME}` 讀取
- `src/database/init.sql`：PostgreSQL 啟動時自動建立資料表

---

## 4. 啟動流程

1. 開發者執行 `docker compose up` 啟動所有服務
2. pg 服務啟動，執行 `init.sql` 建立資料表
3. server 服務啟動，連線到 pg
4. proxy (nginx) 啟動，監聽 80 port，將流量導向 server
5. 前端/開發者可直接用 `http://localhost` 存取 API

---

## 5. 圖解（簡易流程）

```
[Browser] --(HTTP/80)--> [nginx] --(proxy_pass)--> [server:3000] --(連線)--> [pg:5432]
```

---

## 6. 備註

- 所有服務都在同一個 backend 虛擬網路下，可用服務名稱互相溝通
- 建議所有帳密設定集中於 .env，並用 `${VAR_NAME}` 方式同步到 docker-compose
- 可依需求擴充 volume、production 設定等
