import { Router } from 'express';
import postCliente from '../handlers/cliente/postCliente.js';
import getClientes from '../handlers/cliente/getClientes.js';

const clienteRouter = Router();

//rutas
clienteRouter.post('/', postCliente )
clienteRouter.get('/', getClientes )

export default clienteRouter;