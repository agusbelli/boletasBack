import findOrCreateCliente from "../../controllers/cliente/findOrCreateCliente.js";

const postCliente = async(req, res)=>{
    const {cliente} = req.body
    try {
        const newCliente = await findOrCreateCliente(cliente)
        res.status(200).send("cliente cargado con exito")
    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo algun proplema")
    }
};

export default postCliente;