import { Router } from 'express';
import postRegistro from '../handlers/registro/postRegistro.js';
import getRegistros from '../handlers/registro/getRegistro.js';
import deleteRegistro from '../handlers/registro/deleteRegistro.js';
import generaBoleta from '../handlers/registro/generaBoleta.js';

const registroRouter = Router();

//rutas
registroRouter.get('/', getRegistros )
registroRouter.get('/boleta', generaBoleta )
registroRouter.post('/', postRegistro )
registroRouter.delete('/', deleteRegistro )

export default registroRouter;