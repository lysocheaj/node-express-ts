import { Router } from 'express';

import { createTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);
router.get('/');
router.patch('/:id');
router.post('/:id');

export default router;