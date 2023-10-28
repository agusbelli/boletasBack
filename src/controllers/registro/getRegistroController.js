import prisma from '../../db.js'

const getRegistrosController = async()=>{
    const registros = await prisma.prisma.registro.findMany({
        include:{
            cliente:{
                select:{nombre:true}
            },
            producto:{
                select:{nombre:true}
            }
        },
        orderBy:{
            fecha:'desc'
        }
    })
    return registros;
};

export default getRegistrosController;