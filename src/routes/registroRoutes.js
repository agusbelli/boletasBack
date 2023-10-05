import { Router } from 'express';
import postRegistro from '../handlers/registro/postRegistro.js';

const registroRouter = Router();

//rutas
registroRouter.post('/', postRegistro )

export default registroRouter;