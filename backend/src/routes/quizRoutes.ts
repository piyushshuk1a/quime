import express from 'express';

import { checkJwt } from '@/middlewares';

const router = express.Router();

router.get('/', () => {}); // Get all public quizzes
router.post('/', checkJwt, () => {}); // Create Quiz

router.get('/:id', checkJwt, () => {}); // Get Quiz
router.put('/:id', checkJwt, () => {}); // Update Quiz
router.get('/:id/invited', checkJwt, () => {}); // Get invited candidates for a quiz
router.put('/:id/invite', checkJwt, () => {}); // Invite candidates for a quiz

router.put('/:id/start', checkJwt, () => {}); // Start a quiz
router.put('/:id/submit', checkJwt, () => {}); // Submit a quiz
export default router;
