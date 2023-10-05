import { Router } from 'express';
import registroRouter from './registroRoutes.js';

const router = Router();

//rutas
router.use('/registro', registroRouter )

export default router;