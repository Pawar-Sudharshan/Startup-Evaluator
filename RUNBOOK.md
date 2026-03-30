# Startup Evaluator - Runbook

This document details the steps required to run the "Startup Evaluator" project locally.

## Prerequisites
- Node.js installed

## 1. Running the Backend

The backend is built with Node.js and Express. It powers the AI evaluations.

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the development server
npm start
```
By default, the backend will start on **port 8080**. You should see the message `Server is running on port 8080`.

**Note:** Ensure your `backend/.env` file contains your OpenRouter/OpenAI API key. An example configuration looks like this:
```
PORT=8080
OPENAI_API_KEY=sk-or-v1-...
```

## 2. Running the Frontend

The frontend is a lightweight, static client composed of an `index.html` file. You do not need Node.js to run the frontend; a basic HTTP server will suffice.

### Option A: Using `npx serve` (Recommended)
If you have Node.js installed, the easiest way to serve the frontend folder is:
```bash
# Navigate to the frontend directory
cd frontend

# Serve the frontend directory
npx serve
```
Then, open the provided localhost link (usually `http://localhost:3000`) in your web browser.

### Option B: VS Code Live Server
1. Open the project in VS Code.
2. Install the **Live Server** extension.
3. Right-click on `frontend/index.html` and select **"Open with Live Server"**.

### Option C: Direct File Execution
You can simply open `frontend/index.html` directly in your favorite web browser (e.g., Chrome, Edge) by double-clicking it. The app relies on your locally running backend API.

## Usage
Once both the backend and frontend are running, you can fill out your startup's problem, solution, target audience, and initial budget on the main dashboard to evaluate your business or non-profit idea.
