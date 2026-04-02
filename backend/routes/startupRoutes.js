import express from 'express';
import { requireAuth } from '@clerk/express';
import { analyzeAndInit, simulateAndProgress, scenarioPrompt, feedbackPrompt, getWatchlist, iterateProject, saveToWatchlist } from '../controllers/startupController.js';

const router = express.Router();

// ── PUBLIC ROUTES (No auth required — freemium AI simulation) ──
router.post('/analyze-startup', analyzeAndInit);
router.post('/simulate-step', simulateAndProgress);
router.post('/generate-scenario', scenarioPrompt);
router.post('/feedback', feedbackPrompt);

// ── PROTECTED ROUTES (Clerk auth required — user data persistence) ──
router.get('/watchlist', requireAuth(), getWatchlist);
router.post('/save-to-watchlist', requireAuth(), saveToWatchlist);
router.post('/iterate-startup', requireAuth(), iterateProject);

export default router;
