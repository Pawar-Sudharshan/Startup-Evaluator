# startUp-Evaluator
# 🚀 startWise — AI Startup Simulator

## Pitch. Simulate. Survive. Evolve.

A full-stack, AI-powered startup simulation platform where aspiring founders pitch ideas, face real-world challenges, and watch their metrics shift in real time.

---

## 🧠 Overview

**startWise** is a gamified, AI-powered simulation platform that lets anyone — from first-time founders to seasoned entrepreneurs — stress-test a startup idea before investing real money.

Users pitch a **Business Startup** or **Non-Profit NGO**, receive an AI-driven evaluation, and then enter a turn-based simulation loop where they face monthly challenges, make strategic decisions, and watch their startup survive or crash.

### Product-Led Growth Model

| Access Level      | What You Can Do                                     |
| ----------------- | --------------------------------------------------- |
| 🌐 Guest (Free)   | Pitch ideas, run AI simulations, export PDF reports |
| 🔐 Logged-In User | Save pitches, evolve ideas, view history            |

---

## ✨ Features

### 🎯 Core Simulation

* Dual Mode: Business Startup & NGO simulation
* AI Pitch Analysis with structured scoring
* Monthly Challenge Engine (Easy / Medium / Hard)
* Deterministic Math Engine (offline fallback)
* AI Narrative Feedback with sentiment

### 📊 Dashboard & Analytics

* Real-Time Metrics Dashboard
* Breakdown Scores
* Evolution Timeline

### 🔧 Advanced Features

* Pitch Refinement (Pivot)
* Undo / Rewind system
* Idea Evolution (v2.0)
* PDF Export

### 🔐 Auth & Persistence

* Clerk Authentication (JWT)
* MongoDB Watchlist (max 10 projects)

### 🎨 Design

* Neo-Brutalist UI

---

## 🏗 Architecture

```
CLIENT (Browser)
  ├── Landing Page
  ├── Dashboard
  └── Watchlist
        │
        ▼
EXPRESS SERVER (:8080)
  ├── Static Files
  ├── Middleware (Clerk)
  ├── API Routes
        │
        ▼
  Controllers
        │
        ▼
  ├── AI Service (LLM)
  └── Simulation Service
        │
        ▼
  MongoDB Atlas
```

---

## 🔄 Simulation Workflow

1. User visits site
2. Logs in or continues as guest
3. Submits startup pitch
4. AI analyzes idea
5. Dashboard displays metrics
6. AI generates scenario
7. User makes decision
8. Metrics updated via math engine
9. AI gives feedback
10. Repeat loop or evolve idea

---

## 🛠 Tech Stack

| Layer      | Technology              |
| ---------- | ----------------------- |
| Frontend   | HTML, CSS, JavaScript   |
| Backend    | Node.js, Express        |
| Database   | MongoDB                 |
| Auth       | Clerk                   |
| AI         | OpenAI (via OpenRouter) |
| Deployment | Railway                 |

---

## 📁 Project Structure

```
startWise/
 ├── frontend/
 │   ├── index.html
 │   ├── landing.html
 │   └── hero.png
 │
 ├── backend/
 │   ├── index.js
 │   ├── server.js
 │   ├── routes/
 │   ├── controllers/
 │   ├── models/
 │   ├── services/
 │   └── utils/
 │
 ├── package.json
 ├── railway.json
 └── README.md
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js v18+
* MongoDB Atlas
* Clerk Account
* OpenRouter API Key (optional)

### Installation

```bash
git clone https://github.com/Pawar-Sudharshan/Startup-development-backend.git
cd Startup-development-backend
npm install
```

### Environment Variables (.env)

```
PORT=8080
MONGO_URI=your_mongo_uri
CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
OPENAI_API_KEY=your_key
```

### Run

```bash
npm start
```

Server runs at: [http://localhost:8080](http://localhost:8080)

---

## 📡 API Reference

### Public Routes

* POST /analyze-startup
* POST /simulate-step
* POST /generate-scenario
* POST /feedback

### Protected Routes

* GET /watchlist
* POST /save-to-watchlist
* POST /iterate-startup

---

## ☁️ Deployment

1. Push code to GitHub
2. Connect repo to Railway
3. Add environment variables
4. Deploy automatically via Nixpacks

---

## ❤️ Credits

Made with love by **codenyx team 9**
