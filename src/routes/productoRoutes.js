import { Router } from 'express';
import postProducto from '../handlers/producto/postProducto.js';
import getProductos from '../handlers/producto/getProductos.js';

const productoRouter = Router();

//rutas
productoRouter.post('/', postProducto )
productoRouter.get('/', getProductos )

export default productoRouter;