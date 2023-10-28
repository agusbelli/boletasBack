import prisma from '../../db.js'

const getProductosController = async()=>{
    const productos = await prisma.prisma.producto.findMany()
    return productos;
};

export default getProductosController;