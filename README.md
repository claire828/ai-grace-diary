# 🌟 AI Grace Diary

> A modern Node.js + Express + PostgreSQL + Vue 3 + RxJS diary application powered by AI that helps you understand your emotional journey through intelligent analysis and gentle insights.

## ✨ Overview

AI Grace Diary is a full-stack web application that combines personal journaling with AI-powered emotional analysis. Write your daily thoughts and receive personalized insights about your emotional patterns, stress levels, and mental well-being from Google's Gemini AI.

## 🚀 Features

### 🧠 AI-Powered Analysis

- **Emotional Intelligence**: Powered by Google Gemini AI for deep psychological insights
- **Stress Level Assessment**: 1-5 scale stress analysis with detailed explanations
- **Mood Recognition**: Identifies emotional categories, mood words, and intensity levels
- **Gratitude Extraction**: Automatically finds and highlights things you're grateful for
- **Theme Identification**: Discovers recurring patterns and key topics in your writing
- **Personalized Feedback**: Warm, caring responses that feel like advice from a close friend

### 📊 Insights Dashboard

- **Visual Analysis Cards**: Beautiful, intuitive display of your emotional data
- **Stress Level Tracking**: Monitor your stress patterns over time
- **Emotional State Overview**: Understand your emotional journey with detailed breakdowns
- **Gratitude Reflections**: Celebrate the positive aspects of your life
- **Gentle Guidance**: Receive supportive, actionable advice for personal growth

## 🛠 Tech Stack

### Frontend

- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for modern, responsive styling
- **RxJS** for reactive programming and stream-based data flow
- **Vue Router** for client-side routing
- **Vite** for fast development and building

### Backend

- **Node.js** with Express.js framework
- **TypeScript** for robust server-side development
- **PostgreSQL** database for reliable data storage
- **Google Gemini AI** integration for intelligent diary analysis
- **RESTful API** design with comprehensive error handling
- **Swagger/OpenAPI** documentation for API endpoints

## 📁 Project Structure

```
ai-grace-diary/
├── frontend/                 # Vue.js frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── icons/        # Custom SVG icon components (14 icons)
│   │   │   └── diary/        # All diary-related smart components
│   │   │        ├── DiaryContent.vue         # Accordion-style diary viewer
│   │   │        ├── DiaryRow.vue             # Diary list item component
│   │   │        ├── DiaryInsightTip.vue      # Writing guidance tips
│   │   │        ├── StressLevel.vue          # Stress analysis card
│   │   │        ├── EmotionalState.vue       # Emotion analysis card
│   │   │        ├── EmotionalBalance.vue     # Positive/negative ratio card
│   │   │        ├── KeyThemes.vue            # Theme identification card
│   │   │        ├── GratitudeReflections.vue # Gratitude extraction card
│   │   │        ├── DayReflection.vue        # Daily summary card
│   │   │        └── GentleGuidance.vue       # AI feedback card
│   │   ├── views/           # Page-level components
│   │   │   ├── DiaryWriter.vue      # Diary creation interface
│   │   │   ├── DiaryAnalysis.vue    # Analysis results display
│   │   │   └── DiaryHistory.vue     # Diary history listing
│   │   ├── composables/     # Reactive business logic
│   │   │   └── useDiary.ts  # Diary operations with RxJS
│   │   ├── models/          # TypeScript data models
│   │   ├── router/          # Vue Router configuration
│   │   ├── types/           # TypeScript type definitions
│   │   └── utils/           # Utility functions and API helpers
│   └── ...
├── backend/                  # Express.js backend API
│   ├── src/
│   │   ├── controllers/     # HTTP request handlers
│   │   ├── services/        # Business logic layer
│   │   │   ├── diary.service.ts     # Diary CRUD operations
│   │   │   ├── analyze.service.ts   # AI analysis orchestration
│   │   │   └── gemini.service.ts    # Google Gemini AI integration
│   │   ├── routes/          # API route definitions
│   │   ├── interfaces/      # TypeScript interfaces
│   │   ├── database/        # Database configuration and migrations
│   │   │   └── init.sql     # PostgreSQL table schemas
│   │   ├── middlewares/     # Express middleware
│   │   └── http/            # API testing files
│   │       └── diary.http   # REST Client test requests
│   └── swagger.yaml         # API documentation
└── README.md                # Project documentation
```

## 🎯 Key Features Explained

### Intelligent Emotional Analysis

The AI analysis provides comprehensive insights:

- **Stress Assessment**: 1-5 scale with contextual explanations
- **Emotional Categorization**: Positive, Neutral, or Negative with specific mood words
- **Gratitude Recognition**: Automatically finds 3-5 things you're grateful for
- **Theme Extraction**: Identifies main topics and recurring patterns
- **Supportive Feedback**: Personal, caring advice like from a close friend

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher)
- PostgreSQL database
- Google Gemini API key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/claire828/ai-grace-diary.git
   cd ai-grace-diary
   ```

2. **Backend Setup**

   ```bash
   cd backend
   pnpm install

   # Set up environment variables
   cp .env.example .env.development.local
   # Edit .env.development.local with your database credentials and Gemini API key

   # Initialize database
   psql -U your_username -d your_database -f src/database/init.sql

   # Start development server
   pnpm run dev
   ```

3. **Frontend Setup**

   ```bash
   cd frontend
   pnpm install

   # Start development server
   pnpm run dev
   ```

4. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3000`
   - API Documentation: `http://localhost:3000/api-docs`

### 🐳 Docker Compose Setup (Alternative)

For containerized deployment, use Docker Compose:

```bash
cd backend
docker-compose up -d
```

This will start a complete backend infrastructure with:

#### **Services Architecture**

- **Proxy (nginx)**: Reverse proxy server on port 80

  - Routes requests and provides load balancing
  - Serves static content efficiently
  - SSL termination and security headers

- **Server (Node.js)**: Main application server on port 3000

  - Express.js API with TypeScript
  - Hot reload for development (volume mounted)
  - Connects to PostgreSQL database
  - Integrates with Google Gemini AI

- **Database (PostgreSQL)**: Data persistence on port 5432
  - PostgreSQL 14.5 with Alpine Linux
  - Auto-initializes with `init.sql` schema
  - Persistent data storage (configurable)

#### **Development Features**

- **Hot Reload**: Code changes automatically restart the server
- **Database Initialization**: Automatically runs `init.sql` on first startup
- **Network Isolation**: All services communicate through internal bridge network
- **Environment Variables**: Pre-configured development settings

## 📚 API Documentation

The project includes comprehensive Swagger/OpenAPI documentation. Once the backend is running, visit:

```
http://localhost:3000/api-docs
```

### Main Endpoints:

- `POST /diaries` - Create a new diary entry
- `GET /diaries` - Retrieve all diary entries
- `GET /diaries/:id` - Get specific diary entry
- `POST /diaries/:id/analyze` - Trigger AI analysis
- `GET /diaries/:id/analysis` - Retrieve analysis results
- `DELETE /diaries/:id` - Delete diary entry

## 🧪 Testing

Use the provided HTTP test files for manual API testing:

```bash
# Backend directory contains diary.http
# Use REST Client extension in VS Code to run tests
```

## 🎨 Design Philosophy

### User-Centric Experience

- **Gentle Interface**: Calming colors and smooth animations
- **Thoughtful Prompts**: Helpful guidance for diary writing
- **Personal Touch**: AI responses feel like caring advice from a friend

---

**Built with ❤️ for personal growth and emotional well-being**
