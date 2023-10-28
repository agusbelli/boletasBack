import prisma from '../../db.js'

const getClientesController = async()=>{
    const clientes = await prisma.prisma.cliente.findMany()
    return clientes;
};

export default getClientesController;