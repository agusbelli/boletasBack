import prisma from '../../db.js'

const generaBoletaController = async(cliente, desde, hasta)=>{

 const desdeFecha = new Date(desde)
 desdeFecha.setHours(0, 0, 0, 0);

 const hastaFecha = new Date(hasta)
 hastaFecha.setHours(23, 59, 59, 59);

    let registros = await prisma.prisma.registro.findMany({
        where:{
            idCliente:Number(cliente),
        },
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

    registros = registros.filter(r=>{ 
        const fecha = new Date(r.fecha)
        fecha.setHours(23, 59, 59, 59);
        if ( fecha >= desdeFecha && fecha <= hastaFecha) {
            return r        
        }
    })

    let total = 0;
    registros = registros?.map(r=>{
         total=total+Number(r.costo)
         return {
            id: r.id,
            fecha:r.fecha,
            costo:r.costo,
            producto: r.producto.nombre,
            cantidad:r.cantidad,
            tipoCantidad:r.tipoCantidad,
            cliente: r.cliente.nombre,
         }
        })

    if (registros.length) {

        return {
            cliente: registros[0].cliente,
            registros:registros,
            total: total
            }        
    }else{
        return null;
    }
};

export default generaBoletaController;