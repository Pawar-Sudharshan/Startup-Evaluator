import express from 'express';
import { requireAuth } from '@clerk/express';
import { analyzeAndInit, simulateAndProgress, scenarioPrompt, feedbackPrompt } from '../controllers/startupController.js';

const router = express.Router();

// Enforce authentication on all startup routes
router.use(requireAuth());

router.post('/analyze-startup', analyzeAndInit);
router.post('/simulate-step', simulateAndProgress);
router.post('/generate-scenario', scenarioPrompt);
router.post('/feedback', feedbackPrompt);

export default router;
