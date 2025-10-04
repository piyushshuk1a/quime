import express from 'express';

import { updateRole } from '@/controllers';
import { checkJwt } from '@/middlewares';

const router = express.Router();

router.put('/:id', checkJwt, updateRole);

router.get('/:id/quizzes', checkJwt, () => {}); // Get all quizzes for a user

router.get('/:id/invited', checkJwt, () => {}); // Get all quizzes a user is invited to

export default router;
