import findOrCreateCliente from "../../controllers/cliente/findOrCreateCliente.js"
import findOrCreateProducto from "../../controllers/producto/findOrCreatePRoducto.js"
import postRegistroController from "../../controllers/registro/postRegistroController.js"

const postRegistro = async(req, res)=>{
    const { registros } = req.body
    try {
        const nuevosRegistros = await registros.map(async(r)=>{
            const idProducto = await findOrCreateProducto(r.producto)
            const idCliente = await findOrCreateCliente(r.cliente)
            const newRegistro = await postRegistroController({...r, producto:idProducto, cliente:idCliente})
            return newRegistro
        })
        res.status(200).send("Registros Cargados")
    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo algun proplema")
    }
}

export default postRegistro;