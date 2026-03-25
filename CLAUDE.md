# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 概要

Report を管理する小さな Web アプリ。backend（Rails API）と frontend（Next.js）を分離した構成で、すべて Docker Compose で動かす。

## 技術スタック

| 役割 | 技術 | バージョン |
|------|------|-----------|
| backend | Ruby on Rails (API mode) | Ruby 4.0.2 |
| frontend | Next.js (App Router) | Node 24 |
| DB | PostgreSQL | 18 |

## 起動・操作コマンド

```bash
# 全サービス起動
docker compose up

# 個別ビルド
docker compose build backend
docker compose build frontend

# Rails コマンド
docker compose run --rm backend bundle exec rails db:migrate
docker compose run --rm backend bundle exec rails db:seed
docker compose run --rm backend bundle exec rails console

# テスト実行（backend）
docker compose run --rm backend bundle exec rspec

# テスト実行（frontend）
docker compose run --rm frontend npm test
```

## エンドポイント

| サービス | URL |
|---------|-----|
| Rails API | http://localhost:3000 |
| Next.js | http://localhost:3001 |
| PostgreSQL | localhost:5432 |

## アーキテクチャ

- `backend/` — Rails API。JSON のみ返す。CORS で frontend からのリクエストを許可。
- `frontend/` — Next.js App Router。API との通信は `NEXT_PUBLIC_API_URL` 環境変数を使う。
- backend と frontend は責務を分離する。Rails はビューを持たない。

## コミットメッセージ

日本語で書く。
