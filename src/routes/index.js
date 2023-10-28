import { Router } from 'express';
import registroRouter from './registroRoutes.js';
import clienteRouter from './clienteRoutes.js';
import productoRouter from './productoRoutes.js';

const router = Router();

//rutas
router.use('/registro', registroRouter )
router.use('/cliente', clienteRouter )
router.use('/producto', productoRouter )

export default router;