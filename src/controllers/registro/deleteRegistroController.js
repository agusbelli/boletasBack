import prisma from '../../db.js'

const deleteRegistroController = async(idRegistro)=>{
    const registro = await prisma.prisma.registro.delete({
        where:{
            id:Number(idRegistro)
        }
    })
    return registro;
};

export default deleteRegistroController;