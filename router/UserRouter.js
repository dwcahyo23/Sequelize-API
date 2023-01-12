import express from 'express';
import { CreateUser, FindUser } from '../controllers/UserController.js';

const router = express.Router();

router.post('/create', CreateUser);
router.get('/find', FindUser);

export default router;
