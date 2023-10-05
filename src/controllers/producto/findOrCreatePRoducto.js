import prisma from '../../db.js'

const findOrCreateProducto = async(producto)=>{
    let productoBdd = await prisma.prisma.producto.findUnique({
        where: {
            nombre:producto
        }
    })
    if (!productoBdd) {
        const newProducto = await prisma.prisma.producto.create({
            data:{
            nombre:producto
            }
        })
        productoBdd = newProducto
    }
    return productoBdd.id
};

export default findOrCreateProducto;