import express from 'express';

import {
  createUser,
  getAllQuizzesForUser,
  getInvitedQuizzes,
} from '@/controllers';
import { checkJwt } from '@/middlewares';

const router = express.Router();

router.put('/:id', checkJwt, createUser);

router.get('/quizzes', checkJwt, getAllQuizzesForUser); // Get all quizzes for a user

router.get('/invited', checkJwt, getInvitedQuizzes); // Get all quizzes a user is invited to

export default router;
