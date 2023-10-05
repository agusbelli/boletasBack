import prisma from '../../db.js'

const findOrCreateCliente = async(cliente)=>{
    let clienteBdd = await prisma.prisma.cliente.findUnique({
        where: {
            nombre:cliente
        }
    })
    if (!clienteBdd) {
        const newCliente = await prisma.prisma.cliente.create({
            data:{
            nombre:cliente
            }
        })
        clienteBdd = newCliente
    }
    return clienteBdd.id
};

export default findOrCreateCliente;