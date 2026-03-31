# Startup Evaluator - Runbook

This document details the steps required to run the "Startup Evaluator" project locally.

## Prerequisites
- Node.js installed

## 1. Environment Setup

Before starting the application, configure your environment variables. 
Create a `.env` file inside the `backend` folder:
```bash
PORT=8080
OPENAI_API_KEY=your_actual_openai_api_key_here
```

## 2. Running Local Development (Recommended)

Thanks to a root-level `package.json` configuration, you can now run both the backend and frontend simultaneously with a single command. 

From the **project root directory**:
```bash
# Install root dependencies (which also installs backend dependencies automatically)
npm install

# Start both backend and frontend servers
npm start
```
This will start:
- **Backend API:** internally on port 8080
- **Frontend App:** typically on port 3000

Open the provided frontend localhost link (usually `http://localhost:3000`) in your web browser.

## 3. Alternative Ways to Run

If you prefer to run them separately:
1. **Backend:** `cd backend`, then run `npm start`
2. **Frontend:** `cd frontend`, then run `npx serve`
You can also run the frontend by opening the `frontend/index.html` file using VS Code Live Server or by double-clicking it directly in an unsupported environment, though local basic HTTP serving is recommended.

## Usage
Once both the backend and frontend are running, open the frontend link in your browser. You can then fill out your startup's problem, solution, target audience, and initial budget on the main dashboard to evaluate your business or non-profit idea.
