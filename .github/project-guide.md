# Copilot Instructions for Diary AI Project

## Project Purpose

This project is a diary application with AI analysis.  
Users can:

1. Write and edit today's diary entry.
2. Trigger AI analysis manually (locks entry afterwards).
3. If not triggered, server auto-analyzes at midnight (locks entry afterwards).
4. View AI insights (mood chart, stress index, summary).

## Tech Stack

- Node.js + Express
- PostgreSQL
- AI API client (Gemini / OpenAI compatible)

## Project Structure

- controllers/ : API controllers (handle HTTP)
- services/ : Business logic
- models/ : Database schemas
- routes/ : API routes
- utils/ : AI client, scheduler, db
- app.js : Express app setup
- server.js : Entry point

## APIs

- Diary
  - POST /api/diary → Create diary
  - GET /api/diary/today → Get today's diary
  - PUT /api/diary/:id → Edit diary (only before analysis)
- Analysis
  - POST /api/analysis/:diaryId → Trigger AI analysis
  - GET /api/analysis/:diaryId → Get analysis result

## Special Rules

- A diary cannot be edited after analysis.
- Analysis can be triggered manually by user, or automatically at midnight.
- Midnight analysis checks all un-analyzed diaries from previous day.

## Code Style

- Use ES Modules (`import`/`export`)
- Async/await only (no .then chains)
- Controllers should stay thin, business logic in services
