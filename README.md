# daily-report-app

日報を管理する Web アプリ。

## 技術スタック

- **backend**: Ruby on Rails (API mode) / Ruby 4.0.2
- **frontend**: Next.js 16 (App Router) + TypeScript + Tailwind CSS / Node 24
- **DB**: PostgreSQL 18
- **インフラ**: Docker Compose

## 起動方法

```bash
docker compose up
```

| サービス | URL |
|---------|-----|
| API | http://localhost:3000 |
| フロントエンド | http://localhost:3001 |

## 機能

- 日報の一覧表示
- 日報の作成
- 日報の更新
