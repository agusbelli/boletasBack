import prisma from '../../db.js'

const postRegistroController = async(registro)=>{
    const {costo, tipoCantidad, fecha, cantidad, producto, cliente} = registro
    const newRegistro = await prisma.prisma.registro.create({
        data:{
            costo: costo,
            tipoCantidad: tipoCantidad,
            fecha: fecha,
            cantidad: cantidad,
            idProducto: producto,
            idCliente: cliente
        }
    })

    return newRegistro
}

export default postRegistroController;